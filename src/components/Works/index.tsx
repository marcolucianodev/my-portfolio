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

    return (
        <MainSection>
            <div id="works-section">
                <div className="hidden"></div>
                <SectionTitle>Projetos</SectionTitle>
                <WorksContent>
                    {project.map((item: any) => (
                        <Project 
                            key={item.id}
                            desc={item.description}
                            image={item.image}
                            title={item.title}
                            repo={item.repo}
                            url={item.url}
                        />
                    )).reverse()}
                </WorksContent>
            </div>
        </MainSection>
    )
}

export default Works;