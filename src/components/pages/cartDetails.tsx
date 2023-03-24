import { useParams } from 'react-router-dom';

export const CartDetailsPage = () => {
    const { cartId } = useParams();

    return (
        <div>Cart no: {cartId}</div>
    )
}

export default CartDetailsPage;
