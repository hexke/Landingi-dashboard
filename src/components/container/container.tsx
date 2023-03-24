import styled from 'styled-components';
import { ReactNode } from 'react';


const StyledContainer = styled.div`
max-width: 1200px;
margin: auto;
`;

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;
