import React from 'react'
import styles from './MainContacts.module.scss'

function CallForm(props) {
    const content= props.content
    return (
        <div className={styles.form}>
            <h3>{content.title}</h3>
            <p>{content.text}</p>
            <form id="callbackForm" name="callbackForm" method="post">
                <div className={[styles.wrap, 'flex'].join(' ')}>
                    <div className={[styles.img, 'flex'].join(' ')}>
                        <img src="./img/icon-name.png" alt="" />
                    </div>
                    <div className={[styles.input, 'flex'].join(' ')}>
                        <label for="form-contacts_name">{content.enterName}</label>
                        <input type="text" name="name" id="form-contacts_name" placeholder="Иван" />
                    </div>
                </div>
    
                <div className={[styles.wrap, 'flex'].join(' ')}>
                    <div className={[styles.img, 'flex'].join(' ')}>
                        <img src="./img/icon-form-phone.png" alt="" />
                    </div>
                    <div className={[styles.input, 'flex'].join(' ')}>
                        <label for="form-contacts_phone">{content.enterPhone}</label>
                        <input type="tel" name="phone" id="form-contacts_phone" placeholder="+38 ххх ххх хх хх" />
                    </div>
                </div>
                <button type="button" id="btn-callback" className={styles.btn}>{content.btn}</button>
    
            </form>
            <div id="error-mess-callback" class="error-mess-callback"></div>
        </div>
    )
}

function Contacts(props) {
    const content= props.content

    return (
        <div className={styles.contacts}>
            <h2>{content.title}</h2>
            <ul class="">
                <li>
                    <span>{content.titlePhone}</span>
                    <img src="./img/icon_phone.png" alt="" /><span><a href="tel:+380961121515">{content.phone}</a></span>
                </li>
                <li>
                    <span>{content.titleEmail}</span>
                    <img src="./img/icon_mail.png" alt="" /><span class="form-mail"><a href="mailto:info@callab.com.ua">{content.email}</a></span>
                </li>
            </ul>
            <div class="visa">
                {content.titleSocials}<br />
                <a href="https://m.facebook.com/CallabUkraine/"><img width="20" src="./img/fb.png" alt="лаборатория callab facebook" /></a>  <a href="https://www.instagram.com/callabukraine/"><img width="20" src="./img/insta.png" alt="лаборатория callab instagram" /></a>
            </div>
            <div class="visa">
                {content.titlePay}<br />
                <img src="./img/payment2.png" alt="" />
            </div>
        </div>
    )
}


export default function MainContacts(props) {
    return (
        <div className={styles.mainContacts}>
           <div class='flex container'>
              <CallForm content={props.content.form} />
              <Contacts content={props.content.contacts} />
           </div>
        </div>
    )
}