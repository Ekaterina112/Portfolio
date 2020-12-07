import React from 'react'
import styles from './Projects.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";


function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <div className={styles.title}>
                    <Title title={'My portfolio'}/>
                </div>

                <div className={styles.projects}>
                    <Project title={"First Project"} description={"short description of the project..."}
                             link={"link #1"} titleLink={"here will be img-link"}/>
                    <Project title={"Second Project"} description={"short description of the project..."}
                             link={"link #2"} titleLink={"here will be img-link"}/>
                    <Project title={"Second Project"} description={"short description of the project..."}
                             link={"link #2"} titleLink={"here will be img-link"}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;