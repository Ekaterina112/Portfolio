import React from 'react'
import s from './Nav.module.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Nav() {
    const items = [
        {value: 'Home', href: '/first'},
        {value: 'Skills', href: '/one'},
        {value: 'Portfolio', href: '/two'},
        {value: 'Contacts', href: '/three'}]
    return (
        <div className={s.navigation}>
            <div className={s.menu}>
                {items.map(item =>
                    <a href={item.href}> {item.value} </a>
                )}
            </div>
            <BurgerMenu items={items}/>
        </div>
    );
}

export default Nav;