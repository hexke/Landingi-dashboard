import styled from "styled-components";
import Header from "../header/header";
import { Outlet } from 'react-router-dom';
import Container from "../container/container";

const StyledMain = styled.main`
margin: 50px 0;
`;

export const Layout = () => {
    return (
        <>
            <Header />
            <StyledMain>
                <Container>
                    <Outlet />
                </Container>
            </StyledMain>
        </>
    )
}

export default Layout;
