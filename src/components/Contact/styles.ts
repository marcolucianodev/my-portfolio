import styled from "styled-components";

type ContactProps = {
    contactIconBg: string
}

export const ContactContent = styled.section`
    display: flex;
`;

export const ContactImage = styled.img`
    width: 50rem;
    padding: 3rem;
`;

export const ContactText = styled.div`
    padding: 3rem 0;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1.5rem;
    }
`;

export const ContactItemsBox = styled.section`
    display: flex;
    gap: 2rem;
    margin: 3rem 0;
`;

export const ContactItem = styled.div<ContactProps>`
    /* width: 15rem; */
    /* height: 4.8rem; */
    background-color: ${props => props.contactIconBg};
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;
    color: #FFF;

    svg {
        font-size: 2rem;
    }
`;