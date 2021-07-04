import React, { useState } from 'react'
import styles from './MainFAQ.module.scss'
import arrow from '../img/arrow_accord.png'

export default function MainFAQ(props) {
    const [isShow0, setIsShow0] = useState(false)
    const [isShow1, setIsShow1] = useState(false)
    const [isShow2, setIsShow2] = useState(false)
    const [isShow3, setIsShow3] = useState(false)
    const [isShow4, setIsShow4] = useState(false)
    const [isShow5, setIsShow5] = useState(false)
    const [isShow6, setIsShow6] = useState(false)
    const [isShow7, setIsShow7] = useState(false)
    const [isShow8, setIsShow8] = useState(false)

    const states = [
        {isShow: isShow0, setIsShow: setIsShow0},
        {isShow: isShow1, setIsShow: setIsShow1},
        {isShow: isShow2, setIsShow: setIsShow2},
        {isShow: isShow3, setIsShow: setIsShow3},
        {isShow: isShow4, setIsShow: setIsShow4},
        {isShow: isShow5, setIsShow: setIsShow5},
        {isShow: isShow6, setIsShow: setIsShow6},
        {isShow: isShow7, setIsShow: setIsShow7},
        {isShow: isShow8, setIsShow: setIsShow8}
    ]

    return (
        <div className={styles.mainFAQ}>
            <div className={styles.title}>
                <h2>{props.title.first}<br />{props.title.second}</h2>
            </div>
            <div className={[styles.box, 'container'].join(' ')}>
                <div className={styles.wrap}>
                   {props.content.map((elem, index) => (
                       <div className={styles.elem} key={index}>
                           <div 
                            className={styles.question} 
                            onClick={() => states[index].setIsShow(!states[index].isShow)}
                           >
                               <div>{elem.question}</div>
                               <div className={[styles.arrow, 'flex'].join(' ')}>
                                   <img style={{transform: states[index].isShow ? 'rotate(-90deg)' : ''}} src={arrow} alt="" />
                               </div>
                           </div>
                           <div 
                             className={styles.answer} 
                             style={{display: states[index].isShow ? 'block' : 'none'}}
                           >
                               {elem.answer}
                           </div> 
                       </div>
                   ))}
                </div>
            </div>
            <a name="call" htef="/"></a>
        </div>
    )
}