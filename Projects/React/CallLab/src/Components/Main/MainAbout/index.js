import React from 'react'
import styles from './MainAbout.module.scss'
import image1 from '../img/callab-23.jpg'
import image2 from '../img/about-1.png'

export default function MainAbout(props) {
    return (
        <div className={styles.mainAbout}>
            <div className={[styles.title, 'title1'].join(' ')}><h2>{props.content.title}</h2></div>
            <div className={[styles.box1, 'flex', 'container'].join(' ')}>
                <div className={styles.text}>
                    <p><b>{props.content.box1Par1Title}</b> {props.content.box1Par1}</p>
                    <p>{props.content.box1Par2}</p>
                    <p>{props.content.box1Par3}</p>
                </div>
                <div className={styles.image}>
                    <img src={image1} alt="" />
                </div>
            </div>

            <div className={[styles.box2, 'flex', 'container'].join(' ')}>
                <div className={[styles.image, 'flex'].join(' ')}>
                    <img src={image2} alt="" />
                </div>
                <div className={styles.text}>
                    <p><b>{props.content.box2Par1}</b></p>
                    <p>{props.content.box2Par2}</p>  
                </div>    
            </div>
        </div>
    )
}