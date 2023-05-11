import styled from "@emotion/styled";

export const Item = styled.li`
    padding: 12px 24px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
    background-color: rgba(153, 194, 255, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: rgb(33, 47, 73);
`;

export const Avatar = styled.img`
    display: block;
`;

export const Status = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ isOnline }) => {
        return isOnline ? `rgba(99, 255, 120, 0.7)` : `rgba(255, 54, 57, 0.7)`;
    }};
`;

export const Name = styled.p`
    flex-grow: 1;
    text-align: center;
`;
