import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem 0;
    margin-top: 6.5rem;
`;

export const FooterContent = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
`;

export const SocialMedias = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 1.5rem;
`;

export const SocialMediaItem = styled.div`
    background-color: gray;
    width: 24px;
    height: 24px;
`;

export const Copy = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
`;