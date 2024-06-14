import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    border-style: ${({ $isnew }) => ($isnew ? 'dashed' : 'none')};
    background-color: ${({ theme, $isnew }) => ($isnew ? 'transparent' : theme.COLORS.DARK_GRAY)};

    margin-bottom: 8px;
    border-radius: 1rem;
    padding-right: 1.6rem;
    
    > button {
        border: none;
        background: none;
    }
    
    .button-delete {
        color: red;
    }
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    }
    
    > input {
        outline: none;
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.DARK_GRAY};
        }
    }

`;