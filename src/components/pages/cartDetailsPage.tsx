import { useLoaderData } from 'react-router-dom';
import { calculateSingleDiscountedPrice, getCart } from '../../utils/cart';
import { ICart } from '../../interface/interface';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Chart from '../chart/chart';

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

const StyledTitle = styled.p`
font-size: 32px;
font-weight: 700;
line-height: 1em;
margin-bottom: 0.5em;
`;

const StyledSubTitle = styled(StyledTitle)`
    font-size: 24px;
    margin-bottom: 0.5em;
    margin-top: 2em;
`;

export const CartDetailsPage = () => {
    const cart = useLoaderData() as ICart;

    return (
        <div>
            <StyledTitle>Cart number: {cart.id}</StyledTitle>
            <StyledSubTitle>Cart chart</StyledSubTitle>
            <Chart products={cart.products} />
            <StyledSubTitle>Products</StyledSubTitle>
            <StyledTable>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>quantity</th>
                        <th>price (<FontAwesomeIcon icon={faDollarSign} />)</th>
                        <th>discounted price (<FontAwesomeIcon icon={faDollarSign} />)</th>
                        <th>discounted (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.products.map(product =>
                            <tr key={product.title}>
                                <td>{product.title}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>{calculateSingleDiscountedPrice(product.discountedPrice, product.quantity)}</td>
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

export const cartDetailsLoader = async ({ params }: { params: any }) => {
    const response = await getCart(params.cartId);

    return response;
}

export default CartDetailsPage;
