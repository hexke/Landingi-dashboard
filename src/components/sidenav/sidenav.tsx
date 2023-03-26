import { useState, useEffect, memo } from 'react';
import { getAllCarts } from '../../utils/cart';
import { ICart } from '../../interface/interface';
import Cart from '../cart/cart';

export const Sidenav = () => {
    const [error, setError] = useState<boolean>(false);
    const [cartsList, setCartsList] = useState<ICart[]>([]);

    useEffect(() => {
        const FetchCarts = async () => {
            const response = await getAllCarts();

            const body = await response.json();

            console.log(response);

            if (!response.ok) {
                setError(true);
                return;
            }

            setCartsList(body.carts);
        }

        FetchCarts();
    }, []);

    return (
        <div>
            {error && <p>Could not load carts!</p>}
            {!error && cartsList.map(cart => <Cart key={`cart-${cart.id}`} cart={cart} />)}
        </div>
    )
}

export default memo(Sidenav);