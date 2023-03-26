import { useState, useEffect, memo } from 'react';
import { getAllCarts } from '../../utils/cart';
import { ICart } from '../../interface/interface';
import Cart from '../cart/cart';
import styled from 'styled-components';

const StyledSidenav = styled.div`
@media (max-width: 992px){
    overflow-y: scroll;
    padding: 10px;
    
    & div {
        gap: 10px;
        display: flex;
        width: max-content;
    }
}
`;

export const Sidenav = () => {
    const [error, setError] = useState<boolean>(false);
    const [cartsList, setCartsList] = useState<ICart[]>([]);

    useEffect(() => {
        const FetchCarts = async () => {
            const response = await getAllCarts();

            const body = await response.json();

            if (!response.ok) {
                setError(true);
                return;
            }

            setCartsList(body.carts);
        }

        FetchCarts();
    }, []);

    return (

        <StyledSidenav>
            <div>
                {error && <p>Could not load carts!</p>}
                {!error && cartsList.map(cart => <Cart key={`cart-${cart.id}`} cart={cart} />)}
            </div>
        </StyledSidenav>
    )
}

export default memo(Sidenav);