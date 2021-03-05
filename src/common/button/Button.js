import React from 'react'
import styles from './Button.module.scss';


function Button({title,href,download}) {
    return <div>
        <button className={styles.button} >
            <a href={href} download={download}>
                {title}
            </a>
        </button>
    </div>
}

export default Button;