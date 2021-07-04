import React from 'react'
import styles from './MainIndications.module.scss'

export default function MainIndications(props) {
    return (
        <div className={styles.mainIndications}>
            <div className={styles.title}>
                <h2>{props.title.first}<br />{props.title.second}</h2>
            </div>
            <div className={[styles.box, 'flex'].join(' ')}>
                <div className={styles.left}>
                    <ul className={styles.list}>
                        {props.content.left.map(item => (
                            <li key={item} style={{marginBottom: '10px'}}>{item}</li>
                        ))}                        
                    </ul>
                </div>
                <div className={styles.right}>
                    <ul className={styles.list}>
                        {props.content.right.map(item => (
                            <li key={item} style={{marginBottom: '10px'}}>{item}</li>
                        ))}                        
                    </ul>

                </div>
            </div>
        </div>
    )
}