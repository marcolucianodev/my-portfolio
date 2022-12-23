import styled from "styled-components";

export const TopSectionContent = styled.section`
    display: flex;

    @media(max-width: 1023px) {
        flex-direction: column;
    }
`;

export const Headline = styled.h1`
    text-transform: uppercase;
    flex: 2;
    font-size: 4rem;
    padding-right: 2rem;

    span {
        font-size: 6rem;
        color: var(--main-color);

        @media(max-width: 480px) {
            font-size: 4rem;
        }
    }

    @media(max-width: 1023px) {
        text-align: center;
    }

    @media(max-width: 479px) {
        font-size: 2.5rem;
    }
`;

export const HeadButtons = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 425px) {
        flex-direction: column;
        width: 100%;

        a button {
            width: 100%;
        }
    }

    @media(max-width: 1023px) {
        justify-content: center;
    }
`;

export const TopSectionImage = styled.img`
    max-width: 50rem;
    flex: 1;
    padding: 3rem;
    margin: 0 auto;

    @media(max-width: 480px) {
        max-width: 38rem;
    }

    @media(max-width: 375px) {
        max-width: 30rem;
    }
`;