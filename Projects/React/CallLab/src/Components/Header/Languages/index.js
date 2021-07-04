import React from 'react'
import logoEn from '../../../img/en.gif'
import logoRu from '../../../img/ru.gif'
import logoUa from '../../../img/ua.gif'
import styles from './Languages.module.scss'

function LanguageItem(props) {
    if(props.lang === 'en') {
        return(
            <a href="/en/"><img src={logoEn} alt="" /></a>
        )
    }else if(props.lang === 'ru') {
        return(
            <a href="/"><img src={logoRu} alt="" /></a>
        )
    }else if(props.lang === 'ua') {
        return(
            <a href="/ua/"><img src={logoUa} alt="" /></a>
        )
    }
    
}

function Languages() {
    return(
        <div className={styles.languages}>
            <LanguageItem lang='en' />
            <LanguageItem lang='ru' />
            <LanguageItem lang='ua' />
        </div>
    )
}

export default Languages