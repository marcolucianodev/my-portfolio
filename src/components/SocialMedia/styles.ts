import styled from "styled-components";

type SocialMediaAttributes = {
    iconWidth: string,
    iconHeight: string,
    iconBorder: string,
    iconBg: string,
    iconColor: string,
    iconSize: string
}

type SocialMediaDisplay = {
    mdisplay?: boolean
}

export const SocialMediaContainer = styled.section<SocialMediaDisplay>`
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

    @media(max-width: 768px) {
        display: ${props => props.mdisplay ? "none" : "flex"};
    }
`;

export const SocialMediaItem = styled.div<SocialMediaAttributes>`
    width: ${props => props.iconWidth};
    height: ${props => props.iconHeight};
    background-color: ${props => props.iconBg};
    border: ${props => props.iconBorder} solid ${props => props.iconColor};
    color: ${props => props.iconColor};
    font-size: ${props => props.iconSize};
    padding: .3rem;
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
`;