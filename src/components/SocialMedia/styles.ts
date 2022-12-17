import styled from "styled-components";

type SocialMediaProps = {
    iconWidth: string,
    iconHeight: string,
    iconBorder: string,
    iconBg: string,
    iconColor: string
}

export const SocialMediaContainer = styled.section`
    display: flex;
    gap: 2rem;
    height: auto;
    right: 3.6rem;

    .linkedin, 
    .github {
        width: 3.6rem;
        height: 3.6rem;
        background-color: gray;
    }
`;

export const SocialMediaItem = styled.div<SocialMediaProps>`
    width: ${props => props.iconWidth};
    height: ${props => props.iconHeight};
    background-color: ${props => props.iconBg};
    border: ${props => props.iconBorder} solid ${props => props.iconColor};
    border-radius: .5rem;
    color: ${props => props.iconColor};
`;