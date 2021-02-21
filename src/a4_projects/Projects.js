import React from 'react'
import styles from './Projects.module.scss';
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import imgOne from './../assets/images/gallery-photo-1.png'
import imgTwo from '../assets/images/gallery-photo-2.png'
import imgThree from '../assets/images/gallery-photo-3.png'
import imgFour from '../assets/images/gallery-photo-4.png'
import imgFive from '../assets/images/gallery-photo-5.png'
import imgSix from '../assets/images/gallery-photo-6.png'
import imgSeven from '../assets/images/gallery-photo-7.jpg'
import imgEight from '../assets/images/gallery-photo-8.png'


function Projects() {
    return (
        <div className={styles.projectsBlock} id='portfolio'>
            <div className={styles.projectsContainer}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"todolist"}
                        img={imgOne}
                        description={"TS, Redux, RestAPI, Thunk,Material UI, Unit Tests"}
                        link={"https://Ekaterina112.github.io/it-incubator-todolist-ts"}/>
                    <Project
                        title={"counter"}
                        img={imgTwo}
                        description={"My first project with React/Redux/TS.I left It here as a memory."}
                        link={"https://Ekaterina112.github.io/counter-with-redux"}/>

                    <Project
                        title={"the social network"}
                        img={imgThree}
                        description={"TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests"}
                        link={"https://Ekaterina112.github.io/TheSocialNetwork/"}/>

                    <Project
                        title={"Study Point"}
                        img={imgFour}
                        description={"It was a command work. App for learning some cards"}
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