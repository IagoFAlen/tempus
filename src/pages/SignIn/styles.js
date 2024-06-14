import styled from "styled-components";
import backgroundImg from  '../../assets/background.jpg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 44%;
    
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    > h2 {
        font-size: 9.6rem;
        color: ${({ theme }) => theme.COLORS.LIGH_COLOR};
        font-family: "Teko", sans-serif;
    }
`;

export const LoginWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    > h3 {
        font-size: 2.4rem;
    }
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;

`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;