import React from 'react'
import styles from './HeaderTop.module.scss'

export default function HeaderTop(props) {
    const content = props.content

    return(
        <div className={[styles.box, 'container'].join(' ')} >
            <div className={styles.title}>
                <h1>{content.title[0]}<br />{content.title[1]}</h1>
            </div>
            <div className={[styles.list, 'flex'].join(' ')}>  
                {content.list.map(item => (
                    <div key={item}>{item}</div>
                ))}
            </div>
            <div className={styles.btns}>
                <a href="#call"><button>{content.btn}</button></a> 
                <a name="order" href="/"></a>
            </div>
        </div>
    )
}