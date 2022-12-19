import styled from "styled-components";

export const WrapContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    /* padding-top: 10.2rem; */
`;

export const MainSection = styled.section`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;

    #top-section {
        padding: 0 1.5rem;
        /* display: flex; */
        width: 100%;
        
        @media(max-width: 1023px) {
            flex-direction: column;
        }
    }

    #about-section {
        flex-direction: column;
        padding: 0 1.5rem;
    }

    #works-section {
        width: 100%;
        padding: 0 1.5rem;
    }

    #contact-section {
        width: 100%;
        padding: 0 1.5rem;
    }

    .hidden {
        width: 100%;
        height: 10.2rem;
        visibility: hidden;
    }

    .top-hidden {
        width: 100%;
        height: 18rem;
        visibility: hidden;

        @media(max-width) {
            height: 10.2rem;
        }
    }

    @media(max-width: 768px) {
        flex-direction: column;
        margin: 2rem auto;
    }
`;