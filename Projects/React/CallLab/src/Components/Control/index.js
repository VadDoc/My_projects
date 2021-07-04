import React from 'react'
import styles from './Control.module.scss'
import clsx from 'clsx'


export default function Control(props) {
    const { name, inputType, type, onChange, placeholder, className, ...rest } = props;

    let input = null;
  
    if(inputType === 'textarea'){
        input = <textarea type={type} name={name} onChange={onChange} placeholder={placeholder} {...rest} />
    } else {
        input = <input type={type} name={name} onChange={onChange} placeholder={placeholder} {...rest} />
    }
    
    return(
        <div className={clsx(styles.control, className)}>
            {input}
        </div> 
    )
}
