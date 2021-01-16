import React, {useCallback, useEffect, useRef} from 'react'
import s from './menu.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

function Menu({header, items, active, setActive}) {

    const modalRef = useRef(null)

    const onClickOutsideHandler = useCallback(
        (event) => {
            if (
                active &&
                !(
                    modalRef.current && modalRef.current.contains(event.target)
                )
            ) {
                setActive(false);
            }
        },
        [active, modalRef]
    );

    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);
        return () => {
            window.removeEventListener('click', onClickOutsideHandler);
        };
    }, [onClickOutsideHandler]);

    return (<div className={`${active ? s.menuActive : s.menu}`}>
            <div className={s.menuContent}>
                <div className={s.closeMenu} onClick={() => {
                    setActive(false)
                }}>
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