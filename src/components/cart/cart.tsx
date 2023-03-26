import { faDollarSign, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICart } from "../../interface/interface";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
background-color: #e5e5e5;
color: black;
margin-bottom: 20px;
border-radius: 5px;
padding: 10px 20px;
font-size: 20px;
display: flex;
align-items: center;
width: 250px;
text-decoration: none;
cursor: pointer;
position: relative;
transition: background-color .1s ease-in-out;

&:hover {
background-color: #dadada;
}

& > svg {
    margin-right: 10px;
}
`;

const StyledSpan = styled.span`
font-size: 13px;
background-color: gold;
color: black;
font-weight: 700;
padding: 3px 7px;
border-radius: 3px;
position: absolute;
top: 0px;
right: 0px;
transform: translate(0, -5px);
`;


export const Cart = ({ cart }: { cart: ICart }) => {
    return (
        <StyledLink to={`/carts/${cart.id}`}>
            <FontAwesomeIcon icon={faShoppingCart} />
            cart no: {cart.id}
            <StyledSpan>
                <FontAwesomeIcon icon={faDollarSign} />: {cart.discountedTotal}
            </StyledSpan>
        </StyledLink>
    )
}

export default Cart;