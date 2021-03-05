import React, {useState} from 'react'
import styles from './Vacansy.module.scss';
import Title from "../common/components/title/Title";
import HiringModal from "../common/components/ModalWindow/ModalWindox";
import ButtonHiring from "../common/button/ButtonHiring";


function Vacancy() {
    const [activeModal, setActiveModal] = useState(false)
    const handlerModal = () => {
        console.log(activeModal)
        setActiveModal(true)}
    return (
        <div className={styles.vacancyBlock}>
            <div className={styles.vacancyContainer}>
                <Title title={'I Am Available For Freelance'}/>
                <ButtonHiring title={" HIRE ME"} onclick={handlerModal}/>
                <HiringModal activeModal={activeModal} setActiveModal={setActiveModal}/>
            </div>
        </div>
    );
}

export default Vacancy;