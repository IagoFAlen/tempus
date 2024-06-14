import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 24rem auto;
    grid-template-areas: 
    "header"
    "content";
`;

export const Header = styled.div`
    display: grid;
    align-items: center;
    grid-area: header;
    background-color: ${({ theme }) => theme.COLORS.FUTURE_BLUE};
    padding-left: calc(5rem + 5%);
`;

export const Content = styled.div`
    display: flex;
    grid-area: content;
    align-items: center;
    margin-top: -10rem;
    flex-direction: column;
    gap: 6rem;
`

export const ProfileEdit = styled.div`
    display: flex;
    align-items: end;
    > img {
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
    }
`


export const CameraWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    border: none;
    border-radius: 50%;
    height: 5.6rem;
    width: 5.6rem;
    margin-left: -6.4rem;
    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};
    }
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 22%;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
`;
