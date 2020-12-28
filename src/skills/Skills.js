import React from 'react'
import styles from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";



function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={styles.skills}>
                    <Skill title ={'DEVELOPMENT'} description={"React, Redux, AXIOS etc"}/>
                    <Skill title ={'FOUNDATION'} description={"JavaScript, TypeScript, HTML5, CSS3"}/>
                    <Skill title ={'TESTING'} description={"Unit Tests, SnapShot, Storybook"}/>
                    <Skill title ={'DESIGN'} description={"Material UI, Ant-Design etc"}/>
                </div>
                </div>
        </div>
    );
}

export default Skills;