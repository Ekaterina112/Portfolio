import React from 'react'
import styles from './Projects.module.scss';
import stylesContainer from '../common/styles/Container.module.scss'
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import imgOne from './../assets/images/gallery-photo-1.png'
import imgTwo from '../assets/images/gallery-photo-2.png'
import imgThree from '../assets/images/gallery-photo-3.png'
import imgFour from '../assets/images/gallery-photo-4.png'
import imgFive from '../assets/images/gallery-photo-5.png'
import imgSix from '../assets/images/gallery-photo-6-7.png'
import imgSeven from '../assets/images/gallery-photo-7.jpg'
import imgEight from '../assets/images/gallery-photo-8.png'


function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"todolist"}
                        img={imgOne}
                        description={"short description of the project..."}
                        link={"link #1"}/>
                    <Project
                        title={"counter"}
                        img={imgTwo}
                        description={"short description of the project..."}
                        link={"link #2"}/>

                    <Project
                        title={"the social network"}
                        img={imgThree}
                        description={"short description of the project..."}
                        link={"link #4"}/>

                    <Project
                        title={"future project"}
                        img={imgFour}
                        description={"...in progress"}
                        link={"link #3"}/>

                    <Project
                        title={"future project"}
                        img={imgFive}
                        description={"...in progress"}
                        link={"link #5"}/>

                    <Project
                        title={"future project"}
                        img={imgSix}
                        description={"...in progress"}
                        link={"link #6"}/>

                    <Project
                        title={"future project"}
                        img={imgSeven}
                        description={"...in progress"}
                        link={"link #1"}/>

                    <Project
                        title={"future project "}
                        img={imgEight}
                        description={"...in progress"}
                        link={"link #2"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;