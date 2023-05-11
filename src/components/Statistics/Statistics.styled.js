import styled from "@emotion/styled";

export const StatisticsMenu = styled.section`
    width: ${({ amount }) => {
        return `${amount * 100}px`;
    }};
    background-color: rgb(244, 248, 255);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    /* Position for testing purposes */
    margin: 50px auto;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: rgb(33, 47, 73);
    text-align: center;
    margin: 0;
    padding: 16px;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    background-color: rgb(158, 175, 206);
    margin: 0;
    padding: 0;
`;

export const StatItem = styled.li`
    flex-basis: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
    background-color: ${() => {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    }};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
        0px 18px 23px rgba(0, 0, 0, 0.1), 0px 0px 20px black, 0px 0px 20px black;
    color: white;
`;

export const Label = styled.span`
    font-weight: 600;
`;

export const Percentage = styled.span`
    font-size: 24px;
`;
