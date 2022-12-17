import styled from "styled-components";

type ButtonProps = {
    btn2?: boolean,
}

export const Button = styled.button<ButtonProps>`
    background-color: ${props => props.btn2 ? "var(--third-color)": "var(--main-color)"};
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: var(--main-font);
    color: #FFF;
    cursor: pointer;
`;