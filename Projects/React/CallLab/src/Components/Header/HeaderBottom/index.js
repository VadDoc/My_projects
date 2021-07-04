import React, { useState } from 'react'
import styles from './HeaderBottom.module.scss'
import Control from '../../Control'
import Button from '../../Button'

export default function HeaderBottom(props) {
    const [valueInput, setValueInput] = useState({
        name: '', 
        email: '', 
        phone: '', 
        number: '', 
        comment: ''
    })
    const content = props.content
    const placeholder = content.placeholder
    let serverMessage  = ''

    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;

        setValueInput(prev => {
            return {
              ...prev,
              [name]: value
            }
        });
    }

    function handleSubmit(event) {
        // event.preventDefault();
        // console.log(valueInput);

        const status = function (response) {
            if (response.status !== 200) {
              return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response);
          }
    
        const text = function (response) {
          return response.text();
        }    

        fetch("../../../order.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            credentials: 'same-origin',
            body: "data=" + JSON.stringify(valueInput)
        })
         .then(status)
         .then(text)
         .then(function (value) { 
            serverMessage = value;
         })
         .catch(function (error) {
            serverMessage = "Были ошибки, сообщение не отправлено" 
          })
    }

    return(
        <div className={styles.box} >
            <div className={styles.title}>{content.title[0]}<br />{content.title[1]}</div>
            <form action="" method="post" id="mailForm" name="mailForm" onSubmit={handleSubmit}>
                <Control 
                    inputType="input"
                    type="text" 
                    name="name"
                    className="flex"
                    placeholder={placeholder.name}
                    onChange={handleInput} 
                    value={valueInput.firstName} 
                />
                <Control 
                    inputType="input"
                    type="text" 
                    name="email"
                    className="flex"
                    placeholder={placeholder.email}
                    onChange={handleInput} 
                    value={valueInput.email} 
                />
                <Control 
                    inputType="input"
                    type="tel" 
                    name="phone"
                    className="flex"
                    placeholder={placeholder.phone}
                    onChange={handleInput} 
                    value={valueInput.phone} 
                />
                <Control 
                    inputType="input"
                    type="number" 
                    name="number"
                    className="flex"
                    placeholder={placeholder.number}
                    onChange={handleInput} 
                    value={valueInput.number} 
                />
                <Control 
                    inputType="textarea"
                    type="text" 
                    name="comment"
                    className="flex"
                    placeholder={placeholder.comment}
                    onChange={handleInput} 
                    value={valueInput.comment} 
                    cols="30"
                    rows="4"
                />   
                <Button title={content.btn} onClick={handleSubmit} />                 
            </form>
        </div>
    )
}