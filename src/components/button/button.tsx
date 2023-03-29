import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components';
import { color } from '../../lib/styles.config';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

const StyledButton = styled.button`
cursor: pointer;
padding: 10px 20px;
text-transform: uppercase;
border-radius: 100px;
font-weight: 600;
transition: color .2s ease-in-out;
background-color: transparent;
border: 2px solid currentColor;

&:hover {
    color: ${color.blue};
}
`;

export const Button = ({ children, ...props }: IButtonProps) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;