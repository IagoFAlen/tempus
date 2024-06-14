import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    gap: .8rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.FUTURE_BLUE};

    padding: 2rem;
    text-align: justify;
    h3 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};

    }

    p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

    }
    margin-bottom: 2.4rem;

    cursor: pointer;
`;

export const Tags = styled.div`
    display: flex;
    gap: .8rem;
`;