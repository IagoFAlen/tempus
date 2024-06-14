import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    filter: brightness(2);
    cursor: pointer;
`;