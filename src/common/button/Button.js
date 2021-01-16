import React from 'react'
import styles from './Button.module.scss';


function Button({title}) {
    return <div>
        <button className={styles.button}>
            <a>
                {title}
            </a>
        </button>
    </div>
}

export default Button;