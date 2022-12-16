import styled from "styled-components";

export const WrapContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100vh;
`;

export const MainSection = styled.section`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

export const Headline = styled.h1`
    text-transform: uppercase;
    flex: 2;
    font-size: 4rem;
    padding-right: 2rem;

    span {
        font-size: 6rem;
        color: var(--main-color);
    }
`;

export const HeadButtons = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
`;

export const TopSectionImage = styled.img`
    max-width: 50rem;
    flex: 1;
    padding: 3rem;
`;