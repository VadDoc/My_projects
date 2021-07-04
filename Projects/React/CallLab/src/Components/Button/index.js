import React from 'react'
import styles from './Button.module.scss'

export default function Button(props) {
    return(
        <button 
            type="button" 
            name="button" 
            className={styles.button}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}
