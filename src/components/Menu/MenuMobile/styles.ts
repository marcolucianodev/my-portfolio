import styled from "styled-components";

export const MenuMobileContainer = styled.nav`
    background-color: #FFF;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
    padding: 2rem;

    @media(min-width: 769px) {
        display: none;
    }
`;

export const CloseMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    svg path {
        font-size: 3rem;
        stroke: var(--text-color);
        cursor: pointer;
    }
`;

export const MenuMobileList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 5rem;
    text-align: center;

    li a {
        font-size: 4rem;
        color: var(--text-color);
        text-transform: none;
    }
`;

export const MenuMobileIcon = styled.div`
    font-size: 2.5rem;

    @media(min-width: 769px) {
        display: none;
    }
`;

