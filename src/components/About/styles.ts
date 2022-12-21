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
    margin-bottom: 2rem;

    @media(max-width: 480px) {
        font-size: 3rem;
    }
`;

export const AboutContent = styled.section`
    display: flex;

    @media(max-width: 1023px) {
        flex-direction: column;
    }
`;

export const AboutImage = styled.img`
    padding: 3rem;
    max-width: 40rem;
    margin: 0 auto;

    @media(max-width: 768px){
        margin: 0 auto;
        max-width: 30rem;
    }
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

        @media(max-width: 768px) {
            justify-content: center;
        }
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

     @media(max-width: 768px) {
        padding: 0;
     }
`;

export const SkillSet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem 0 1.5rem 0;

    .skill-icon {
        width: 4.8rem;
        height: 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: 0.3s;

        :hover {
            svg.js {
                color: var(--js-color);
                transition: all.3s;
            }

            svg.react {
                color: var(--react-color);
                transition: all.3s;
            }

            svg.html {
                color: var(--html-color);
                transition: all.3s;
            }

            svg.css {
                color: var(--css-color);
                transition: all.3s;
            }

            svg.git {
                color: var(--git-color);
                transition: all.3s;
            }

            img.ts {
                filter: var(--ts-hover-filter);
                transition: all.3s;
            }
        }

        img {
            width: 4.2rem;
            filter: var(--ts-main-filter);
        }

        :hover .hint-icon {
            opacity: 1;
            transition: .5s;
        }

        .hint-icon {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.8);
            bottom: -3.3rem;
            padding: 0 1rem;
            border-radius: 0.5rem;
            color: #FFF;
            opacity: 0;
            z-index: 99;
            min-width: 10rem;
            text-align: center;

            :after {
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid rgba(0, 0, 0, 0.8);
                top: -10px;
                left: 40%;
            }
        }
    } 

    @media(max-width: 768px) {
        flex-wrap: wrap;
    }
`;