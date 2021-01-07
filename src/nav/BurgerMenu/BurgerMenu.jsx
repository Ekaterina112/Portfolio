import React, {useState} from 'react'
import Menu from "./menu/menu";
import s from './Burger.module.css'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function BurgerMenu({items}) {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div>
            <nav>
                <div className={s.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </nav>
            <Menu items={items} header={'menu'} active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default BurgerMenu;