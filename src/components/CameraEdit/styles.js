import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 2.4rem;
            height: 2.4rem;
        }
    }
`;
