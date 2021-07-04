import React from 'react'
import styles from './MainTop.module.scss'

export default function MainTop() {
    return (
        <div className={styles.mainTop}>
            <div className={[styles.box, 'flex'].join(' ')}></div>
        </div>
    )
}