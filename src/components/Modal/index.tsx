import { 
    CloseModal, 
    ModalContainer, 
    ModalContent, 
    ProjectContent, 
    ProjectDescription, 
    ProjectImage 
} from "./styles";

import { GrClose } from "react-icons/gr";
import { FaGithub, FaLink } from "react-icons/fa";

type ModalProps = {
    modalOpen: () => void,
    title: string,
    description: string,
    image: string,
    url: string,
    repo: string
}

const Modal = ({description, title, image, modalOpen, url, repo}: ModalProps) => {
    return (
        <ModalContainer>
            <ModalContent>
                <CloseModal onClick={modalOpen}><span><GrClose color="red" title="Fechar"/></span></CloseModal>
                <ProjectContent>
                    <ProjectImage>
                        <img src={image} alt={title} />
                    </ProjectImage>
                    <ProjectDescription>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <ul>
                            <li><a href={url} target="_blank"><FaLink /> Link do projeto</a></li>
                            <li><a href={repo} target="_blank"><FaGithub /> Github</a></li>
                        </ul>
                    </ProjectDescription>
                </ProjectContent>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;