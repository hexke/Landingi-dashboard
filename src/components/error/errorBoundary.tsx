import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../lib/styles.config";
import { Link } from "react-router-dom";

const StyledError = styled.div`
font-weight: 700;
color: ${color.red};
font-size: 18px;
text-align: center;
`;

export const ErrorBoundary = () => {
    const error: any = useRouteError();

    return (
        <StyledError>Something went wrong...<br />
            {error && error.message && <p>message: {error.message}</p>}
            <Link to="/">back to homepage</Link>
        </StyledError>
    )
}

export default ErrorBoundary;
