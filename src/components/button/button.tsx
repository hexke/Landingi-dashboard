import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

const StyledButton = styled.button`
cursor: pointer;
padding: 5px 15px;
border-radius: 100px;
background-color: transparent;
border: 2px solid currentColor;
`;

export const Button = ({ children, ...props }: IButtonProps) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;