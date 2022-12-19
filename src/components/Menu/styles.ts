import styled from "styled-components";

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media(max-width: 768px) {
        display: none;
    }
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
