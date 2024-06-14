import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: .64rem;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    filter: brightness(2);
`;