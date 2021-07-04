import React, {useState} from 'react'
import HeaderMenu1 from './HeaderMenu1'
import HeaderMenu2 from './HeaderMenu2'
import styles from './HeaderMenu.module.scss'

export default function HeaderMenu(props) {
    const [displayHeaderMenu1, setDisplayHeaderMenu1] = useState()
    const [displayHeaderMenu2, setDisplayHeaderMenu2] = useState()

    function onClickHeaderMenu1() {
        setDisplayHeaderMenu2('flex')
        setDisplayHeaderMenu1('none')
    }

    function onClickHeaderMenu2() {
        setDisplayHeaderMenu1('flex')
        setDisplayHeaderMenu2('none')
    }

    return(
        <div className={styles.headerMenu}>
            <HeaderMenu1 
                menuTexts={props.menuTexts}
                displayHeaderMenu1={displayHeaderMenu1}
                onClick = {()=>onClickHeaderMenu1()}
            />
            <HeaderMenu2 
                displayHeaderMenu2={displayHeaderMenu2} 
                onClick = {()=>onClickHeaderMenu2()}
                menus = {props.menus}
            />
        </div>
    )
}
