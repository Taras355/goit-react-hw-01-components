import styled from "@emotion/styled";

export const Table = styled.table`
    width: 600px;
    background-color: rgba(244, 248, 255, 0.5);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 24px;
    color: rgb(33, 47, 73);

    /* Position for testing purposes */
    margin: 50px auto;

    thead {
        height: 50px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
            rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        background-color: rgba(128, 191, 255, 0.5);
        text-transform: uppercase;
    }

    tbody > tr {
        text-align: center;
        height: 30px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
            rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    }

    tbody > tr:nth-of-type(2n) {
        background-color: rgba(128, 191, 255, 0.15);
    }
`;
