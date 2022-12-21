import styled from "styled-components";

type ProjectProps = {
    bgImage: string
}

export const ProjectItem = styled.article<ProjectProps>`
    height: 29rem;
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    position: relative;

    .project-info {
        width: inherit;
        height: inherit;
        opacity: 0;
        transition: all 0.3s;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem;
        gap: 1rem;
    }

    :hover .project-info {
        background-color: rgba(0,0,0,0.8);
        width: inherit;
        height: inherit;
        color: #FFF;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 1;
    }
`;
