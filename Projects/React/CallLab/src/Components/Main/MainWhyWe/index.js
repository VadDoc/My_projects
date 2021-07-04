import React, { useState } from 'react'
import styles from './MainWhyWe.module.scss'
import arrow from '../img/arrow_accord.png'

export default function MainWhyWe(props) {
    const [isShow0, setIsShow0] = useState(false)
    const [isShow1, setIsShow1] = useState(false)
    const [isShow2, setIsShow2] = useState(false)
    const [isShow3, setIsShow3] = useState(false)
    const [isShow4, setIsShow4] = useState(false)
    const [isShow5, setIsShow5] = useState(false)
    const [isShow6, setIsShow6] = useState(false)
    const [isShow7, setIsShow7] = useState(false)

    const states = [
        {isShow: isShow0, setIsShow: setIsShow0},
        {isShow: isShow1, setIsShow: setIsShow1},
        {isShow: isShow2, setIsShow: setIsShow2},
        {isShow: isShow3, setIsShow: setIsShow3},
        {isShow: isShow4, setIsShow: setIsShow4},
        {isShow: isShow5, setIsShow: setIsShow5},
        {isShow: isShow6, setIsShow: setIsShow6},
        {isShow: isShow7, setIsShow: setIsShow7},
    ]

    return (
        <div className={[styles.mainWhyWe, 'container'].join(' ')}>
            <div className={[styles.title, 'title1'].join(' ')}><h2>{props.title.first}<br />{props.title.second}</h2></div>
            <div className={[styles.box, 'flex'].join(' ')}>
                <div className={[styles.wrap, 'flex'].join(' ')}>
                    {props.content.map((item, index) => (
                        <div key={item.title}>
                            <div className={[styles.elem, 'flex'].join(' ')}
                                onClick={() => states[index].setIsShow(!states[index].isShow)}
                            >
                                 {/* <div><img src={require({props.content.img}).default} alt="" /></div> */}
                                 <div><img src={require('../img/cause-1.png').default} alt="" /></div>
                                 <div className={styles.title}>{item.title}</div>
                                 <div className={styles.arrow}>
                                    <img style={{transform: states[index].isShow ? 'rotate(-90deg)' : ''}} src={arrow} alt="" />
                                 </div>
                            </div>
                            <div className={styles.answer} style={{display: states[index].isShow ? 'block' : 'none'}}>{item.text}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.logo}></div>
            </div>
            <div>
                <a href="#order"><button className={styles.btn}>{props.btn}</button></a>
            </div>
        </div>
    )
} 