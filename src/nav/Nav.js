import React from 'react'
import s from './Nav.module.scss';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Link} from "react-scroll";

function Nav() {
    const items = [
        {value: 'Home', href: 'home', offset:1},
        {value: 'Skills', href: 'skills', offset: 1},
        {value: 'Portfolio', href: 'portfolio', offset: 1},
        {value: 'Contacts', href: 'contacts', offset: 1}]
    return (
        <div className={s.navigation}>
            <div className={s.container}>
                {items.map(item =>
                        <Link
                            className={s.link}
                            activeClass={s.active}
                            to={item.href}
                            spy={true}
                            smooth={true}
                            offset={item.offset}
                            duration={500}
                        >{item.value}</Link>
                )}
            <BurgerMenu items={items}/>
        </div>
</div>
);
}

export default Nav;