import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";
    gap: 4rem;

    overflow-y: hidden;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.0rem;
    width: 70%;
    justify-self: center;
    overflow-y: auto;

    &::-webkit-scrollbar {
        background-color: transparent;
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        border-radius: 8px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};
`;

export const Fill = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(1fr, auto));
    grid-template-rows: 1fr 5fr;
    grid-template-areas: 
    "title rating"
    "description description";
    gap: 1.6rem;
`;

export const InputTitle = styled.div`
    grid-area: title;
`;

export const InputRating = styled.div`
    grid-area: rating;
`;

export const InputDescription = styled.textarea`
    grid-area: description;
    background: ${({ theme }) => theme.COLORS.DARK_GRAY};
    border: none;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};
    font-size: 2rem;
    border-radius: 1rem;
    resize: none;
    outline: none;
    overflow-y: auto;
    &::-webkit-scrollbar {
        background-color: transparent;
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        border-radius: 8px;
    }
`;

export const Ticket = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const TicketTitle = styled.h3`
    font-size: 2rem;
`;

export const TicketTags = styled.div `
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem;
    background-color: black;
    border-radius: .8rem;
`;

export const TicketButtons = styled.div`
    display: flex;
    margin-top: 2.4rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 4.8rem;
`;