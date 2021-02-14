import React from 'react'
import s from './Project.module.scss';

export const Project = ({img, description, link, title}) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={{backgroundImage: `url(${img})`}}>
                <div className={s.overlay}>
                    <h3>{title}</h3>
                    <span>{description}</span>
                    <a href={link}>
                        <button className={s.btn}>view project</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

