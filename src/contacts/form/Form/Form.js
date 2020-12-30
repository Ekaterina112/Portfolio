import React from 'react'
import styles from './Form.module.css';



function Form() {
    return (
            <form className={styles.form}>
                <div className={styles.inputBlock}>
                     <input type="text" id="contact_name" name="name" placeholder="Your Name"/>
                <input type="email" id="contact_email" name="email" placeholder="Your Email"/>
                </div>
                <textarea className="mt-50" name="message" id="contact_message" placeholder="Your Message"/>
                <button type="submit" className={styles.btn} name="submit"
                        id="contact_submit" data-complete-text="Well done!">
                    Send Message
                </button>
            </form>
    );
}

export default Form;