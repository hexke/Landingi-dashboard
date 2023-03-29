import { ReactNode, TableHTMLAttributes } from "react";
import styled from "styled-components";
import { color } from "../../lib/styles.config";

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> { };

const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;

& th,
& td {
    text-align: center;
    padding: 5px 10px;
    border: 1px solid black;

    &:first-child {
        text-align: left;
    }
}

& thead th,
& tfoot th {
    background-color: ${color.grey};
}

& tfoot th:first-child {
    text-align: right;
}
`;

export const Table = ({ children, ...rest }: ITableProps) => {
    return (
        <StyledTable {...rest}>
            {children}
        </StyledTable>
    )
}


export default Table;