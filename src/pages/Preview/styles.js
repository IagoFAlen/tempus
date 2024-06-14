import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";
    gap: 4rem;
    overflow-y: hidden;
`;

export const Content = styled.div`
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    width: 75%;
    height: 85%;
    justify-self: center;

    ::-webkit-scrollbar{
        background-color: transparent;
        width: 8px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        border-radius: 8px;
    }


`;
export const ContentBox = styled.div`
    display: flex;
    gap: ${({ $gap }) => $gap};
    align-items: center;
    font-weight: 500;

    > h2 {
        font-size: 3.6rem;
    }

    p {
        text-align: justify;
        gap: .8rem;
    }
`;

export const ContentInfo = styled.div`
    display: flex;
    gap: .8rem;
    align-items: center;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;

    > img {
        border-radius: 50%;
        width: 1.6rem;
        height: 1.6rem;
    }
    
`;

export const Tags = styled.div`
    display: flex;
    gap: .8rem;
`;