import React from 'react'
import styles from './Projects.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import stylesFromProject from './project/Project.module.css'
import imgOne from './../assets/images/gallery-photo-1.png'
import imgTwo from './../assets/images/gallery-photo-2.png'
import imgThree from './../assets/images/gallery-photo-3.png'
import imgFour from './../assets/images/gallery-photo-4.png'
import imgFive from '../assets/images/gallery-photo-5.png'
import imgSix from './../assets/images/gallery-photo-6.png'
import imgEight from '../assets/images/gallery-photo-8.png'


function Projects() {
    const project1 = {
        backgroundImage: `url(${imgOne})`,
    }
    const project2 = {
        backgroundImage: `url(${imgTwo})`,
        height: 250
    }
    const project3 = {
        backgroundImage: `url(${imgThree})`,
    }
    const project4 = {
        backgroundImage: `url(${imgFour})`,
        height: 250
    }
    const project5 = {
        backgroundImage: `url(${imgFive})`,
        height: 250
    }
    const project6 = {
        backgroundImage: `url(${imgSix})`,
    }
    const project8 = {
        backgroundImage: `url(${imgEight})`,
    }
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"project title"}
                        style={project1}
                        description={"short description of the project..."}
                        link={"link #1"} />

                    <Project
                        title={"counter"}
                        style={project2}
                        description={"short description of the project..."}
                        link={"link #2"} />

                    <Project
                        title={"the social network"}
                        style={project3}
                        description={"short description of the project..."}
                        link={"link #4"} />

                    <Project
                        title={"Todolist"}
                        style={project4}
                        description={"short description of the project..."}
                        link={"link #3"} />

                    <Project
                        title={"project title"}
                        style={project5}
                        description={"short description of the project..."}
                        link={"link #5"} />

                    <Project
                        title={"project title"}
                        style={project6}
                        description={"short description of the project..."}
                        link={"link #6"} />

                    <Project
                        title={"project title"}
                        style={project4}
                        description={"short description of the project..."}
                        link={"link #1"} />

                    <Project
                        title={"project title"}
                        style={project8}
                        description={"short description of the project..."}
                        link={"link #2"} />

                    <span className={`${stylesFromProject.item} ${styles.break}`}></span>
                    <span className={`${stylesFromProject.item} ${styles.break}`}></span>
                    <span className={`${stylesFromProject.item} ${styles.break}`}></span>

                </div>
            </div>
        </div>
    );
}

export default Projects;