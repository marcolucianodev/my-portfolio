import styled from "styled-components";

type AboutProps = {
    bgBtn: string,
    borderBtn: string,
    colorBtn: string;
}

export const SectionTitle = styled.h1`
    font-size: 5rem;
    color: var(--main-color);
    text-transform: uppercase;
`;

export const AboutContent = styled.section`
    display: flex;
`;

export const AboutImage = styled.img`
    padding: 3rem;
    max-width: 40rem;
`;

export const AboutText = styled.div<AboutProps>`
     padding: 0 3rem;

     h2 {
        margin-bottom: 1rem;
     }

     p {
        margin-bottom: 1.5rem;
     }

     .get-in-touch {
        display: flex;
        margin-top: 2rem;
        height: 4.5rem;
        gap: 1.2rem;
     }

     .leaked-button {
        background-color: ${props => props.bgBtn};
        border: 2px solid ${props => props.borderBtn};
        color: ${props => props.colorBtn};
        padding: 1rem 2rem;
        font-weight: 600;
        display: inline-flex;
        cursor: pointer;
        transition: all 0.3s;
        font-size: 1.4rem;
        align-items: center;

        :hover {
            font-size: 1.6rem;
            text-decoration: underline;
            border: 2px solid ${props => props.bgBtn};
        }
     }
`;

export const SkillSet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .skill-icon {
        width: 48px;
        height: 48px;
        background-color: gray;
    } 
`;