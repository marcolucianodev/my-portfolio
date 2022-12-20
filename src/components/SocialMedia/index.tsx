import { SocialMediaItem } from "./styles";

type SocialMediaProps = {
    content: string | JSX.Element,
    bg: string,
    color: string, 
    height: string,
    width: string,
    border: string,
    url: string,
    size: string,
    title: string
}

const SocialMedia = ({content, bg, border, color, height, width, url, size, title}: SocialMediaProps) => {
    return (
        <a href={url} target="_blank">
            <SocialMediaItem
                iconBg={bg}
                iconColor={color}
                iconHeight={height}
                iconWidth={width}
                iconBorder={border}
                iconSize={size}
                title={title}
            >
                {content}
            </SocialMediaItem>
        </a>
    )
}

export default SocialMedia;