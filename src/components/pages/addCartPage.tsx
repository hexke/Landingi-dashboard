import { FormEvent, useCallback, useReducer, useRef, useState } from "react";
import { createCart, getAllProducts } from "../../utils/cart";
import Title from "../title/title";
import { useLoaderData } from "react-router-dom";
import { IProduct } from "../../interface/interface";
import cartReducer, { ICartProduct, initialCartState } from "../../reducers/cartReducer";
import styled from "styled-components";
import Button from "../button/button";
import useFilter from "../../hooks/useFilter";
import Table from "../table/table";
import { color } from "../../lib/styles.config";

const StyledForm = styled.form`
display: flex;
gap: 10px;
margin-bottom: 30px;

& input {
    font-size: 16px;
    padding: 5px 0 0 0;
    border: none;
    color: ${color.blue};
    font-weight: 700;
    outline: none;
    border-bottom: 2px solid ${color.blue};
}

& [type="number"]{
    padding: 10px 5px;
    flex: 0 1 20px;
    max-width: 100px;
}
`;

export const AddCartPage = () => {
    const availableProducts = useLoaderData() as IProduct[];
    const [filteredProducts, filterProducts] = useFilter<IProduct>(availableProducts);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const quantityRef = useRef<HTMLInputElement | null>(null);

    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    const onCartCreate = async () => {
        const cartJson = {
            userId: cartState.userId,
            products: [...cartState.cart]
        };

        dispatch({
            type: "CLEAR",
            payload: {} as ICartProduct
        });

        const response = await createCart(JSON.stringify(cartJson));

        if (!response.ok) {
        }
    };

    const onInput = () => {
        if (!inputRef.current) return;

        const inputValue = inputRef.current.value.toLowerCase().trim();

        filterProducts(product => product.title.toLocaleLowerCase().includes(inputValue));
    }

    const addProduct = useCallback((product: ICartProduct) => {
        if (!inputRef.current || !quantityRef.current) return;

        dispatch({
            type: "ADD",
            payload: {
                id: product.id,
                title: product.title,
                quantity: product.quantity
            }
        });

        inputRef.current.value = '';
        quantityRef.current.value = '';
    }, [dispatch]);

    const onFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputRef.current || !quantityRef.current || inputRef.current.value === '') return;

        const inputValue = inputRef.current.value.trim();
        const quantityValue = parseInt(quantityRef.current.value);

        const product = availableProducts.find(product => product.title.toLowerCase().includes(inputValue.toLowerCase()));

        if (!product) return;

        addProduct({
            id: product.id,
            title: product.title,
            quantity: quantityValue,
        });
    }, [addProduct]);

    return (
        <div>
            <Title>Add new cart</Title>

            <StyledForm onSubmit={onFormSubmit}>
                <input ref={inputRef} type="text" placeholder="product title" onInput={onInput} />
                <input ref={quantityRef} type="number" placeholder="amount" min={1} />
                <Button type="submit">add product</Button>
            </StyledForm>

            <div>
                <p>Available products:</p>
                <Table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product =>
                            <tr key={product.title} onClick={() => addProduct({
                                id: product.id,
                                title: product.title,
                                quantity: 1
                            })}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>

            <p>cart:</p>
            <ul>
                {cartState.cart.map(product => <li key={product.title}>{product.title}: ({product.quantity})</li>)}
            </ul>

            <Button onClick={onCartCreate}>add cart</Button>
        </div>
    )
}

export const addCartLoader = async () => {
    const response = await getAllProducts();

    if (!response.ok) throw new Error("Could not fetch products");

    const body = await response.json();

    return body.products;
}

export default AddCartPage;
