import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const StyledError = styled.div`
font-weight: 700;
color: red;
font-size: 18px;
text-align: center;
`;

export const ErrorBoundary = () => {
    const error: any = useRouteError();

    return (
        <StyledError>Something went wrong...<br />
            {error && error.message && <p>message: {error.message}</p>}
        </StyledError>
    )
}

export default ErrorBoundary;
