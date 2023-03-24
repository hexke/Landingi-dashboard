import { useState, useEffect, memo } from 'react';
import { getAllCarts } from '../../utils/cart';
import { Cart } from '../../interface/interface';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCart = styled(Link)`
background-color: blue;
color: #F2F2F2;
margin-bottom: 10px;
border-radius: 5px;
padding: 10px 20px;
font-size: 20px;
display: block;
text-decoration: none;
cursor: pointer;

&:hover {
background-color: #1d00ad;
}
`;

export const Sidenav = () => {
    const [cartsList, setCartsList] = useState<Cart[]>([]);

    useEffect(() => {
        const FetchCarts = async () => {
            const body = await (await getAllCarts()).json();

            setCartsList(body.carts);
        }

        FetchCarts();
    }, []);


    return (
        <div>Sidenav
            {cartsList.map(cart => <StyledCart to={`/carts/${cart.id}`} key={`cart-${cart.id}`}>Cart no. {cart.id}</StyledCart>)}
        </div>
    )
}

export default memo(Sidenav);