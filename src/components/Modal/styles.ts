import styled from "styled-components";

export const ModalContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    background-color: #FFF;
    padding: 2%;
`;

export const ModalContent = styled.article`
    background-color: #FFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 120rem;

    @media (max-width: 960px) {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: auto;
        overflow: auto;
    }
`;

export const CloseModal = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    span {
        cursor: pointer;
        padding: 0.5rem;
        font-size: 3rem;
        
        path {
            stroke: var(--text-color);
            font-size: 10rem;
        }
        
        @media (max-width: 960px) {
            font-size: 2rem;
        }
    }

    @media (max-width: 960px) {
        padding: 3rem 3rem 0;
        max-width: 59rem;
        margin: 0 auto;
    }
`;

export const ProjectContent = styled.article`
    display: flex;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const ProjectImage = styled.div`
    flex: 1;
    padding: 2%;

    img {
        display: block;
        margin: 0 auto;
        max-width: 60rem;

        @media (max-width: 615px) {
            width: 100%;
        }
    }
`;

export const ProjectDescription = styled.div`
    flex: 1;
    padding: 3rem;

    h2 {
        margin-bottom: 1.5rem;
    }

    p {
        margin-bottom: 1.5rem;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        text-decoration: underline;
        color: var(--text-color);
    }

    @media (max-width: 960px) {
        max-width: 59rem;
        margin: 0 auto;
    }
`;