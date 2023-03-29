import { useLoaderData } from 'react-router-dom';
import { calculateSingleDiscountedPrice, getCart } from '../../utils/cart';
import { ICart } from '../../interface/interface';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Chart from '../chart/chart';
import Title from '../title/title';
import Table from '../table/table';

const StyledSubTitle = styled(Title)`
    font-size: 24px !important;
    margin-bottom: 0.5em;
    margin-top: 2em;
`;

export const CartDetailsPage = () => {
    const cart = useLoaderData() as ICart;

    return (
        <div>
            <Title>Cart number: {cart.id}</Title>
            <StyledSubTitle>Price chart</StyledSubTitle>
            <Chart products={cart.products} />
            <StyledSubTitle>Products</StyledSubTitle>
            <Table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>quantity</th>
                        <th>price (<FontAwesomeIcon icon={faDollarSign} />)</th>
                        <th>discounted price (<FontAwesomeIcon icon={faDollarSign} />)</th>
                        <th>discount (%)</th>
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
            </Table>
        </div>
    )
}

export const cartDetailsLoader = async ({ params }: { params: any }) => {
    const response = await getCart(params.cartId);

    return response;
}

export default CartDetailsPage;
