import { useState, useEffect } from "react";
import axios from "axios";

import { MainSection } from "../WrapContent/styles";
import { SectionTitle } from "../About/styles";
import { WorksContent } from "./styles";
import Project from "./Project";

const Works = () => {

    const [project, setProject] = useState([]);

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

    const projectTitle = project.map((item: any) => item.title)
    const projectDesc = project.map((item: any) => item.description)
    const projectImage = project.map((item: any) => item.image)
    const projectUrl = project.map((item: any) => item.url)
    const projectRepo = project.map((item: any) => item.repo)

    return (
        <MainSection>
            <div id="works-section">
                <div className="hidden"></div>
                <SectionTitle>Trabalhos</SectionTitle>
                <WorksContent>
                    <Project 
                        desc={projectDesc[6]}
                        image={projectImage[6]}
                        title={projectTitle[6]}
                        repo={projectRepo[6]}
                        url={projectUrl[6]}
                    />
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
                </WorksContent>
            </div>
        </MainSection>
    )
}

export default Works;