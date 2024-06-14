import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_GRAY};
    border-radius: 1rem;

    > input {
        background: ${({ theme }) => theme.COLORS.DARK_GRAY};
        border: none;
        padding: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};
        font-size: 2rem;
        border-radius: 1rem;
        width: 100%;
    }

    > input:focus{
        outline: none;
    }

    > svg{
        margin-left: 1.6rem;
    }
    
`;