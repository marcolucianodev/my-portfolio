import { useState, useEffect } from "react";
import axios from "axios";

import { MainSection } from "../WrapContent/styles";
import { SectionTitle } from "../About/styles";
import { WorksContent } from "./styles";
import Modal from "../Modal";
import Project from "./Project";

const Works = () => {

    const [project, setProject] = useState([]);
    // const [modal, setModal] = useState(false);

    const getProjects = async () => {
        try {
            const response = await axios.get("projects/projects.json");
            const data = response.data.projects
            setProject(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProjects();
    }, [])

    // const handleOpenModal = () => {
    //     setModal(!modal)
    //     console.log(!modal)
    // }

    // const id = project.map((item: any) => item.id)
    const projectTitle = project.map((item: any) => item.title)
    const projectDesc = project.map((item: any) => item.description)
    const projectImage = project.map((item: any) => item.image)
    const projectUrl = project.map((item: any) => item.url)
    const projectRepo = project.map((item: any) => item.repo)

    // let dados = []
    // for(let i = 0; i < project.length; i++){
    //     dados.push(
    //         <Modal 
    //             description={project[i].description}
    //             modalOpen={handleOpenModal}
    //             title={projectTitle[i]}
    //         />
    //     )
    //     console.log(dados)
    // }

    return (
        <MainSection>
            <div id="works-section">
                <div className="hidden"></div>
                <SectionTitle>Trabalhos</SectionTitle>
                <WorksContent>
                    <Project 
                        desc={projectDesc[5]}
                        image={projectImage[5]}
                        title={projectTitle[5]}
                        repo={projectRepo[5]}
                        url={projectUrl[5]}
                    />
                    <Project 
                        desc={projectDesc[4]}
                        image={projectImage[4]}
                        title={projectTitle[4]}
                        repo={projectRepo[4]}
                        url={projectUrl[4]}
                    />
                    <Project 
                        desc={projectDesc[3]}
                        image={projectImage[3]}
                        title={projectTitle[3]}
                        repo={projectRepo[3]}
                        url={projectUrl[3]}
                    />
                    <Project 
                        desc={projectDesc[2]}
                        image={projectImage[2]}
                        title={projectTitle[2]}
                        repo={projectRepo[2]}
                        url={projectUrl[2]}
                    />
                    <Project 
                        desc={projectDesc[1]}
                        image={projectImage[1]}
                        title={projectTitle[1]}
                        repo={projectRepo[1]}
                        url={projectUrl[1]}
                    />
                    <Project 
                        desc={projectDesc[0]}
                        image={projectImage[0]}
                        title={projectTitle[0]}
                        repo={projectRepo[0]}
                        url={projectUrl[0]}
                    />

                    {/* <WorksItem>
                        {modal && 
                            <Modal 
                                description={projectDescription[8]} 
                                title={projectTitle[8]}
                                image={projectImage[8]}
                                modalOpen={handleOpenModal}
                            />
                        }
                        <div className="work-info" onClick={handleOpenModal}>
                            <h2 className="job-title">{projectTitle[8]}</h2>
                            <p className="job-desciption">{projectDescription[8]}</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 2</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 3</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 4</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 5</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 6</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 7</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 8</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Job 9</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                        </div>
                    </WorksItem> */}
                </WorksContent>
            </div>
        </MainSection>
    )
}

export default Works;