import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem 0;
    position: fixed;
    background-color: #FFF;
    z-index: 999;
    padding: 1rem 1.5rem;

    @media(max-width: 768px) {
        padding: 1rem 4rem;
    }
`;

export const HeaderContent = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
`;

export const HeadBrand = styled.div`
    img {
        width: 7rem;
    }
`;