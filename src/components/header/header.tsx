import styled from "styled-components";
import Container from "../container/container";
import { Link } from "react-router-dom";
import { color } from "../../lib/styles.config";

const StyledHeader = styled.header`
background-color: ${color.blue};
padding: 10px;
text-align: center;
`;

const StyledNav = styled.nav`
display: flex;
align-items: center;
justify-content: flex-end;
gap: 15px;
padding: 10px 0;

& a {
    color: ${color.white};
    padding: 5px 15px;
    border-radius: 100px;
    font-weight: 500;
    text-decoration: none;
    border: 2px solid currentColor;
}
`;

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledNav>
                    <Link to="/carts">list</Link>
                    <Link to="/carts/add">new cart</Link>
                </StyledNav>
            </Container>
        </StyledHeader>
    );
}

export default Header;