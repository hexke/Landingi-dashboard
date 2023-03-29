import styled from 'styled-components';
import { ReactNode } from 'react';
import { mq } from '../../lib/styles.config';

const StyledContainer = styled.div`
max-width: 1040px;
margin: auto;

${mq['large']}{
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
