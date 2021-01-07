import React from 'react'
import s from './menu.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

function Menu({header, items, active, setActive}) {

    return (<div className={`${active ? s.menuActive : s.menu}`} onClick={()=>{
        setActive(false)}}>
            <div className={s.blur}/>
            <div className={s.menuContent} onClick={e=>e.stopPropagation()}>
                <div className={s.closeMenu} onClick={()=>{
                    setActive(false)}}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </div>
                <div className={s.menuHeader}>
                    {header}
                </div>
                    <div className={s.items}>
                        {items.map(item =>
                            <div className={s.oneItem}>
                                <a href={item.href}>{item.value}</a>
                            </div>)}
                    </div>
            </div>
        </div>


    );
}

export default Menu;