import styled from "styled-components";
import Header from "../header/header";
import { Outlet } from 'react-router-dom';
import Container from "../container/container";
import Sidenav from "../sidenav/sidenav";

const Grid = styled.div`
gap: 20px;  
display: grid;
margin: 30px 0;
grid-template-columns: 1fr 3fr;

`;

export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Grid>
                        <Sidenav />
                        <Outlet />
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Layout;