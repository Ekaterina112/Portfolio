import React from 'react'
import styles from './Button.module.scss';


function ButtonHiring({title,onclick}) {
    return <div>
        <button className={styles.button} onClick={onclick}>
                {title}
        </button>
    </div>
}

export default ButtonHiring;