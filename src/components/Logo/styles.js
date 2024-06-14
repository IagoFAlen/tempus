import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};
`;