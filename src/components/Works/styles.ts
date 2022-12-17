import styled from "styled-components";

export const WorksContent = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    width: 100%;
    gap: 1.5rem;
`;

export const WorksItem = styled.article`
    height: 29rem;
    background-color: gray;
    position: relative;

    .work-info {
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

    :hover .work-info {
        background-color: rgba(0,0,0,0.5);
        width: inherit;
        height: inherit;
        color: #FFF;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 1;
    }
`;

export const BackToTop = styled.div`
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span {
        font-size: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem;
        border: 3px solid var(--text-color);
        cursor: pointer;
    }
`;