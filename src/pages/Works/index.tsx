import { SocialMediaContainer, SocialMediaItem } from "../../components/SocialMedia/styles";
import { MainSection, WrapContent } from "../../components/WrapContent/styles";
import { SectionTitle } from "../About/styles";
import { BackToTop, WorkInfo, WorksContent, WorksItem } from "./styles";

import { FaAngleUp } from "react-icons/fa";

const Works = () => {
    return (
        <WrapContent>
            <MainSection>
                <SocialMediaContainer>
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                </SocialMediaContainer>
                <div className="works-section">
                    <SectionTitle>Trabalhos</SectionTitle>
                    <WorksContent>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Markus Social Network</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 2</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 3</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 4</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 5</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 6</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 7</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 8</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                        <WorksItem>
                            <WorkInfo>
                                <h2 className="job-title">Job 9</h2>
                                <p className="job-desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo, itaque, voluptatem, voluptatum odit impedit animi facilis doloremque aliquam rem adipisci?</p>
                            </WorkInfo>
                        </WorksItem>
                    </WorksContent>
                    <BackToTop>
                        <span><FaAngleUp /></span>
                    </BackToTop>
                </div>
            </MainSection>
        </WrapContent>
    )
}

export default Works;