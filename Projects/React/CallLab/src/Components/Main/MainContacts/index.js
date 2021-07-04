import React, {useState} from 'react'
import clsx from 'clsx'
import styles from './MainContacts.module.scss'
import phone from '../img/icon_phone.png'
import mail from '../img/icon_mail.png'
import fb from '../img/fb.png'
import insta from '../img/insta.png'
import pay from '../img/payment2.png'


function CallForm(props) {
    const [valueInput, setValueInput] = useState({
        name: '', 
        phone: '', 
    })
    const content= props.content
    let serverMessage = ''

    function handleSubmit() {
        // event.preventDefault();
        // console.log(valueInput)

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

    function handleInput(event) {
        const value = event.target.value
        const name = event.target.name

        setValueInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    return (
        
        <div className={styles.form}>
            <h3>{content.title}</h3>
            <p>{content.text}</p>
            <form name="callbackForm" method="post" onClick={handleSubmit}>
                <div className={[styles.wrap, 'flex'].join(' ')}>
                    <div className={[styles.img, 'flex'].join(' ')}>
                        <img src="./img/icon-name.png" alt="" />
                    </div>
                    <div className={[styles.input, 'flex'].join(' ')}>
                        <label htmlFor="form-contacts_name">{content.enterName}</label>
                        <input type="text" name="name" onChange={handleInput} value={valueInput.name} placeholder={content.placeholder.name} />
                    </div>
                </div>
    
                <div className={[styles.wrap, 'flex'].join(' ')}>
                    <div className={[styles.img, 'flex'].join(' ')}>
                        <img src="./img/icon-form-phone.png" alt="" />
                    </div>
                    <div className={[styles.input, 'flex'].join(' ')}>
                        <label htmlFor="form-contacts_phone">{content.enterPhone}</label>
                        <input type="tel" name="phone" onChange={handleInput} value={valueInput.phone} placeholder={content.placeholder.phone} />
                    </div>
                </div>
                <button type="button" id="btn-callback" className={styles.btn}>{content.btn}</button>
    
            </form>
            <div className={styles.serverMessage}>{serverMessage}</div>
        </div>
    )
}

function Contacts(props) {
    const content= props.content

    return (
        <div className={styles.contacts}>
            <h2>{content.title}</h2>
            <ul>
                <li>
                    <span>{content.titlePhone}</span>
                    <img src={phone} alt="" /><span><a href="tel:+380961121515">{content.phone}</a></span>
                </li>
                <li>
                    <span>{content.titleEmail}</span>
                    <img src={mail} alt="" /><span><a href="mailto:info@callab.com.ua">{content.email}</a></span>
                </li>
            </ul>
            <div>
                {content.titleSocials}<br />
                <a href="https://m.facebook.com/CallabUkraine/"><img width="20" src={fb} alt="лаборатория callab facebook" /></a>  <a href="https://www.instagram.com/callabukraine/"><img width="20" src={insta} alt="лаборатория callab instagram" /></a>
            </div>
            <div>
                {content.titlePay}<br />
                <img src={pay} alt="" />
            </div>
        </div>
    )
}

export default function MainContacts(props) {
    return (
        <div className={styles.mainContacts}>
           <div className={clsx(styles.mainContacts, 'container')}>
              <CallForm content={props.content.form} />
              <Contacts content={props.content.contacts} />
           </div>
        </div>
    )
}