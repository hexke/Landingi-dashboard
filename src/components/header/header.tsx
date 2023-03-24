import styled from "styled-components";
import Container from "../container/container";

const StyledHeader = styled.header`
background-color: #1d00ad;
color: #F2F2F2; 
padding: 10px;
text-align: center;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <h1>Dashboard</h1>
            </Container>
        </StyledHeader>
    );
}

export default Header;