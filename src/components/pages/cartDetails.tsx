import { useLoaderData } from 'react-router-dom';
import { getCart } from '../../utils/cart';
import { ICart } from '../../interface/interface';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;

& th,
& td {
    text-align: center;
    padding: 5px 10px;
    border: 1px solid black;

    &:first-child {
        text-align: left;
    }
}

& thead th,
& tfoot th {
    background-color: #e5e5e5;
}

& tfoot th:first-child {
    text-align: right;
}
`;

export const CartDetailsPage = () => {
    const cart = useLoaderData() as ICart;

    return (
        <div>
            <h1>Cart number: {cart.id}</h1>
            <hr />
            <h2>Cart chart</h2>
            <hr />
            <h2>Products</h2>
            <StyledTable>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>quantity</th>
                        <th>price (<FontAwesomeIcon icon={faDollarSign}/>)</th>
                        <th>discounted price (<FontAwesomeIcon icon={faDollarSign}/>)</th>
                        <th>discounted (%)</th>
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
                        <th></th>
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
