import { useCallback, useState } from "react";
import { ICart } from "../../interface/interface";
import { getAllCarts } from "../../utils/cart";
import styled from "styled-components";
import Cart from "../cart/cart";
import { useLoaderData } from "react-router-dom";

const StyledList = styled.div`
gap: 40px 20px;
display: grid;
grid-template-columns: repeat(4,1fr);

@media (max-width: 992px){
    grid-template-columns: repeat(3,1fr);
}

@media (max-width: 768px){
    grid-template-columns: repeat(2,1fr);
}

@media (max-width: 576px){
    margin: auto;
    width: max-content;
    grid-template-columns: 1fr;
}
`;

export const HomePage = () => {
    const carts = useLoaderData() as ICart[];
    const [cartsList, setCartsList] = useState<ICart[]>(carts);

    const deleteCart = useCallback((cartId: number) => {
        setCartsList(prev => [...prev.filter(cart => cart.id !== cartId)]);
    }, []);

    return (
        <>
            <StyledList>
                {cartsList.map(cart => <Cart key={`cart-${cart.id}`} cart={cart} onCartDelete={() => deleteCart(cart.id)} />)}
            </StyledList>
        </>
    )
}

export const homePageLoader = async () => {
    const response = await getAllCarts();

    if (!response.ok) throw new Error("something went wrong...");

    const body = await response.json();

    return body.carts;
}

export default HomePage;
