import { useLoaderData } from 'react-router-dom';
import { getCart } from '../../utils/cart';
import { Cart } from '../../interface/interface';
import styled from 'styled-components';

const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;

& th,
& td {
    text-align: center;
    padding: 3px 10px;
    border: 1px solid black;

    &:first-child {
        text-align: left;
    }
}

& thead th,
& tfoot th {
    background-color: #e8e8ff;
}

& tfoot th:first-child {
    text-align: right;
}
`;

export const CartDetailsPage = () => {
    const cart = useLoaderData() as Cart;

    return (
        <div>
            <p>Id: {cart.id}</p>
            <hr />
            <p>Products:</p>
            <StyledTable>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>discounted price</th>
                        <th>discounted %</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.products.map(product =>
                            <tr>
                                <td>{product.title}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>{product.discountedPrice}</td>
                                <td>{product.discountPercentage}</td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>totals</th>
                        <th>{cart.totalQuantity}</th>
                        <th>{cart.total}</th>
                        <th>{cart.discountedTotal}</th>
                        <th>N/A</th>
                    </tr>
                </tfoot>
            </StyledTable>
        </div>
    )
}

export const loader = async ({ params }: { params: any }) => {
    const response = await getCart(params.cartId);

    return response;
}

export default CartDetailsPage;
