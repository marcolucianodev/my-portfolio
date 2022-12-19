import { SocialMediaContainer, SocialMediaItem } from "./styles";

type SocialMediaProps = {
    content: string,
    bg: string,
    color: string, 
    height: string,
    width: string,
    border: string,
    url: string
}

const SocialMedia = ({content, bg, border, color, height, width, url}: SocialMediaProps) => {
    return (
        <a href={url} target="_blank">
            <SocialMediaItem
                iconBg={bg}
                iconColor={color}
                iconHeight={height}
                iconWidth={width}
                iconBorder={border}
            >
                {content}
            </SocialMediaItem>
        </a>
    )
}

export default SocialMedia;