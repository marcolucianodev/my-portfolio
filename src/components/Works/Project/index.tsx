import { useState } from "react";
import Modal from "../../Modal";
import { ProjectItem } from "./styles";

type ProjectProps = {
    desc: string,
    title: string,
    image: string,
    url: string,
    repo: string
}

const Project = ({
    desc, 
    title, 
    image, 
    repo, 
    url
}: ProjectProps) => {

    const [ modal, setModal ] = useState(false);
    
    const handleOpenModal = () => {
        setModal(!modal)
        console.log(!modal)
    }

    return (
        <ProjectItem bgImage={image}>
            {modal && 
                <Modal 
                    description={desc}
                    image={image}
                    title={title}
                    modalOpen={handleOpenModal}
                    repo={repo}
                    url={url}
                /> 
            }
            <div className="project-info" onClick={handleOpenModal}>
                <h2 className="job-title">{title}</h2>
                <p className="job-desciption">{desc}</p>
            </div>
        </ProjectItem>
    )
}

export default Project;