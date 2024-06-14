import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    grid-area: header;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_GRAY};
    
`
export const InputBox = styled.div`
    justify-content: center;
    width: 35%;
    position: relative;
    z-index: 0;
`;

export const UserMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    
    img {
        height: 6.4rem;
        width: 6.4rem;

        border-radius: 50%;

        cursor: pointer;
    }

`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    h4 {
        font-size: 1.8rem;
        cursor: pointer;
    }

    span {
        font-size: 1.4rem;
        color: ${({ theme } ) => theme.COLORS.LIGHT_GRAY};
        cursor: pointer;
    }
`;

export const Titles = styled.div `
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    gap: .8rem;
    width: 100%;
    margin-top: .4rem;
    padding: 0rem .8rem;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
    border-radius: 0 0 .8rem .8rem;

    cursor: pointer;

`;

export const Title = styled.h3`
    font-size: 1.6rem;
    height: 3.2rem;
`;