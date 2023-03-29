import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components"

const StyledTitle = styled.p`
font-size: 32px;
font-weight: 700;
line-height: 1em;
margin-bottom: 1em;
`;

interface ITitleProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
}

export const Title = ({ children, ...props }: ITitleProps) => {
    return (
        <StyledTitle {...props}>{children}</StyledTitle>
    )
}

export default Title