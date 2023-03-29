import { faDollarSign, faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICart } from "../../interface/interface";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCallback, useState } from "react";
import { deleteCart } from "../../utils/cart";
import useTimeout from "../../hooks/useTimeout";
import { color } from "../../lib/styles.config";

const StyledDiv = styled.div`
position: relative;
display: flex;
align-items: center;
width: 100%;
border: 1px solid black;
border-radius: 5px;
`;

const StyledLink = styled(Link)`
color: ${color.black};
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
padding: 10px 20px;
font-size: 20px;
flex: 1 1 200px;
text-decoration: none;
cursor: pointer;
position: relative;
transition: background-color .1s ease-in-out;

&:hover {
background-color: ${color.hover};
}

& > svg {
    margin-right: 10px;
}
`;

const StyledSpan = styled.span`
font-size: 13px;
background-color: ${color.gold};
color: ${color.black};
font-weight: 700;
padding: 3px 7px;
border-radius: 3px;
position: absolute;
top: 0px;
z-index: 100;
left: 0px;
transform: translate(0, -15px);
`;

const StyledButton = styled.button`
background-color: ${color.red};
color: ${color.white};
border: none;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
align-self: stretch;
padding: 0 10px;
font-size: 18px;
cursor: pointer;
`;

const StyledError = styled.div`
position: absolute;
top: 0;
left: 0;
width:100%;
height:100%;
z-index:10;
color: ${color.white};
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: ${color.red};
`;

interface ICartProps {
    cart: ICart,
    onCartDelete: () => void,
}

export const Cart = ({ cart, onCartDelete }: ICartProps) => {
    const [error, setError] = useState<boolean>(false);
    const [set, clear] = useTimeout(() => { setError(false) }, 3000);

    const cartRemoveHandler = useCallback(async () => {
        const response = await deleteCart(cart.id);

        if (!response.ok) {
            setError(true);
            set();
            return;
        }

        onCartDelete();

    }, [onCartDelete]);

    return (
        <StyledDiv>
            <StyledLink to={`/carts/${cart.id}`}>
                <FontAwesomeIcon icon={faShoppingCart} />
                cart no: {cart.id}
            </StyledLink>
            <StyledSpan>
                <FontAwesomeIcon icon={faDollarSign} />: {cart.discountedTotal}
            </StyledSpan>
            <StyledButton onClick={cartRemoveHandler}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </StyledButton>
            {error && <StyledError>Could not remove cart</StyledError>}
        </StyledDiv>
    )
}

export default Cart;