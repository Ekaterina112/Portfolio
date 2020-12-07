import React from 'react'
import styles from './Title.module.css';



function Title (props) {
    return <div>
        <h2 className={styles.title}>{props.title} </h2>
    </div>
}
export default Title;