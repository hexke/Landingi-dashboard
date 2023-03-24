import { useState, useEffect, memo } from 'react';
import { getAllCarts } from '../../utils/cart';
import { Cart } from '../../interface/interface';
import styled from 'styled-components';

const StyledCart = styled.div`
background-color: blue;
color: #F2F2F2;
margin-bottom: 10px;
border-radius: 5px;
padding: 10px 20px;
font-size: 20px;
cursor: pointer;

&:hover {
background-color: #1d00ad;
}
`;

export const Sidenav = () => {
    const [cartsList, setCartsList] = useState<Cart[]>([]);

    useEffect(() => {
        const FetchCarts = async () => {
            const body = await getAllCarts();

            setCartsList(body.carts);
        }

        FetchCarts();
    }, []);


    return (
        <div>Sidenav
            {cartsList.map(cart => <StyledCart key={`cart-${cart.id}`}>Cart no. {cart.id}</StyledCart>)}
        </div>
    )
}

export default memo(Sidenav);