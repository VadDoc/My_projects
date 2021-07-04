import React, { useState, useEffect} from 'react'
import styles from './HeaderMenu1.module.scss'
import logo from '../img/logo.png'
import menuLogo from '../img/menu.png'


export default function HeaderMenu1(props) {
    const [scrollY, setScrollY] = useState(0)

    const scrollHandler = () => {
        setScrollY(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {//удаляю handler
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [scrollY])

  
    return (
        <div className={styles.box} 
            style={{
                backgroundColor: (scrollY > 50) ? 'rgb(34, 206, 163)' : '',
                display: props.displayHeaderMenu1
            }}
        >
            <div className={styles.logo}>
                    <img src={logo} alt="" />
            </div>
            <div className={styles.text}>{props.menuTexts.callLab}</div>
            <div className={styles.menu} onClick={props.onClick}>
                <div>
                    <img src={menuLogo} alt="" />
                </div>
                <div className={styles.text}>{props.menuTexts.menu}</div>
            </div>
            <div className={styles.phone}
                style={{color: (scrollY > 50) ? 'white' : 'rgb(49, 184, 148)'}}>
                <p>
                    <a href="tel:{props.menuTexts.phone}" style={{color: (scrollY > 50) ? 'white' : 'rgb(49, 184, 148)'}}>
                        {props.menuTexts.phone}
                    </a>
                </p>
                <p>{props.menuTexts.recieveCalls}</p>
            </div>
            <div className={styles.headerMenu_1_5}>
                <a href="#call"><button className={styles.btnOrder}>{props.menuTexts.orderCall}</button></a>
            </div>
        </div> 
    )
}
