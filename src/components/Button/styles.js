import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 1rem;

    background-color: ${({ theme, $inverse }) => ($inverse ? 'black' : theme.COLORS.DARK_BLUE)};
    color: ${({ theme, $inverse }) => ( $inverse ? theme.COLORS.DARK_BLUE : 'white')};
    border: none;
    border-radius: .8rem;

    width: 100%;
    height: 5.6rem;
    font-size: 1.6rem;

    > svg {
        height: 1.6rem;
        width: 1.6rem;
    }

`;