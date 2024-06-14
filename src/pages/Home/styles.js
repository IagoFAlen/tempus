import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    gap: 4rem;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";

    overflow-y: hidden;
`;
export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: calc(20rem + 5%);
`;


export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 85%;
    justify-content: start;
    justify-self: center;
    gap: 4rem;
    
    ::-webkit-scrollbar{
        background-color: transparent;
        width: 8px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        border-radius: 8px;
    }

`;

export const Collection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        font-size: 3.2rem;
    }
`;

export const NoteBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 100%;

    overflow-y: auto;
`;