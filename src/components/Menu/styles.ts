import styled from "styled-components";

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

export const MenuItem = styled.li`
    display: inline-block;
    gap: 3rem;

    a {
        text-transform: uppercase;
        font-weight: 600;
        color: var(--text-color);
    }
`;

export const MenuMobile = styled.section`
    background-color: #FFF;
    /* opacity: 0.5; */
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
    padding: 2rem;

    .close-menu {
        display: flex;
        justify-content: flex-end;
        width: 100%;

        svg path {
            font-size: 3rem;
            stroke: var(--text-color);
            cursor: pointer;
        }
    }

    .menu-mobile-list {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        margin-top: 5rem;
        text-align: center;
    }

    .menu-mobile-list li a {
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
