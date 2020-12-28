import React from 'react'
import s from './Project.module.css';

export const Project = ({img, description, link, title}) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={{backgroundImage: `url(${img})`}}>
                <h3>{title}</h3>
                <span className={s.description}>{description}</span>
                <a href={link}>
                    <button>view project</button>
                </a>
            </div>
        </div>
    );
}

