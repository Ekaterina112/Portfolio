import React from 'react'
import styles from './Form.module.css';



function Form() {
    return (
            <form className={styles.form}>
                <input/>
                <input/>
                <textarea/>
                <button type={"submit"}> Submit </button>
            </form>
    );
}

export default Form;