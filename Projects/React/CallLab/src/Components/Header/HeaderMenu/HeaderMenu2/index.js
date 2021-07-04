import React from 'react'
import styles from './HeaderMenu2.module.scss'
import logo from '../img/logo.png'
import closeLogo from '../img/modal-close-tw.png'

export default function HeaderMenu2(props) {
    return (
        <div 
            className={[styles.box, 'container'].join(' ')} 
            style={{display: props.displayHeaderMenu2 }} 
        >
            <div>
                <img src={logo} alt="logo" />
            </div>

            {props.menus.map(menu => (
                <div key={menu}><a href={menu[1]}>{menu[0]}</a></div>
            ))}

            <div>
                <img src={closeLogo} alt="logo" onClick={props.onClick} />
            </div>
        </div>
    )
}
