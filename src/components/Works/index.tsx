import { MainSection } from "../WrapContent/styles";
import { SectionTitle } from "../About/styles";
import { BackToTop, WorksContent, WorksItem } from "./styles";

import { FaAngleUp } from "react-icons/fa";

const Works = () => {
    return (
        <MainSection>
            <div id="works-section">
                <SectionTitle>Trabalhos</SectionTitle>
                <WorksContent>
                    <WorksItem>
                        <div className="work-info">
                            <h2 className="job-title">Markus Social Network</h2>
                            <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
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
                    </WorksItem>
                </WorksContent>
                <BackToTop>
                    <span><FaAngleUp /></span>
                </BackToTop>
            </div>
        </MainSection>
    )
}

export default Works;