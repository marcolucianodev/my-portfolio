import styled from "styled-components";

export const WrapContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

export const MainSection = styled.section`
    width: 100%;
    max-width: 120rem;
    margin: 7rem auto;
    display: flex;
    align-items: center;
    position: relative;

    #about-section {
        flex-direction: column;
        padding: 0 1.5rem;
    }

    #works-section {
        width: 100%;
        padding: 0 1.5rem;
    }
`;