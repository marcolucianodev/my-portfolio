import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem 1.5rem;
    margin-top: 6.5rem;

    @media(max-width: 1023px) {
        margin-top: 0;
    }
`;

export const FooterContent = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    align-items: center;

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const Copy = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
`;