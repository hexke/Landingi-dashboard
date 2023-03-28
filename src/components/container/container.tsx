import styled from 'styled-components';
import { ReactNode } from 'react';


const StyledContainer = styled.div`
max-width: 1040px;
margin: auto;

@media (max-width: 1060px){
    margin-inline: 15px;
}
`;

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;
