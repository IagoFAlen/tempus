import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    font-size: 1.2rem;
    height: 5.6rem;
    padding: .5rem 1.4rem;
    border-radius: .5rem;
    margin-right: .6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    justify-content: center;
    align-items: center;
    gap: .8rem;
    font-size: 1.6rem;
    
    border-style: ${({ $newtag }) => ($newtag ? 'dashed' : 'none')};
    background-color: ${({ theme, $newtag }) => ($newtag ? 'transparent' : theme.COLORS.DARK_GRAY)};
    
    
    > input {
        border: none;
        background-color: transparent;
        outline: none;
        width: 8rem;
    }
    
    > svg {
        color: ${({ theme, $newtag }) => ($newtag ? theme.COLORS.DARK_BLUE : 'red' )};
        cursor: pointer;
    }
`;