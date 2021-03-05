import React from 'react';
import styles from './ModalWindow.module.scss'

function HiringModal({
                         activeModal, setActiveModal
                     }) {
    const sendHandler = () => {
        setActiveModal(false)
    }

    return (
        <div className={activeModal ? `${styles.modalBlock} + ${styles.modalBlockActive}` : styles.modalBlock} onClick={sendHandler}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.title}>
                    <h4>HAVE A PROJECT?</h4>
                    <p> I’m ready to help you. You just type details below, and/or send us a file.</p>
                </div>
                <form className={styles.form}>
                    <div className={styles.inputBlock}>
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Please Enter Your Email"/>
                    </div>
                    <textarea placeholder="Describe your offer"/>
                    <button className={styles.btn} onClick={sendHandler}>
                        Send Offer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HiringModal;