import React from 'react'
import styles from './Button.module.css';


function Button(props) {
    return <div className={styles.buttonBlock}>
        <button className={styles.button}>
            <a>
            {props.title}
            </a>
        </button>
    </div>
}

export default Button;