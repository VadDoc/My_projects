import React from 'react'
import styles from './Header.module.scss'
import Languages from './Languages'
import HeaderMenu from './HeaderMenu/index'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

function Header() {
    const menus = [
        ['О компании', '#about'], 
        ['Почему мы', '#why'], 
        ['FAQ', '#faq'], 
        ['Контакты', '#faq']
    ]

    const menuTexts = {
        menu: 'Меню',
        callLab: 'Вызов мобильной лаборатории',
        recieveCalls: 'Принимаем звонки 24/7',
        orderCall: 'Заказать звонок',
        phone: '+38 (096) 112 15 15'
    } 

    const contentHeaderTop = {
        title: ['ТЕСТИРОВАНИЕ НА COVID-19', 'ДЛЯ ОРГАНИЗАЦИЙ И ПРЕДПРИЯТИЙ'],
        btn: 'Получить консультацию',
        list: [
            'Сэкономим Ваше время и время Ваших сотрудников',
            'Приедем в любую точку страны в удобное для вас время',
            'Предоставим корпоративную скидку'    
        ]
    } 

    const contentHeaderBottom = {
        title: ['Укажите Вашу контактную информацию', 'и желаемую дату забора'],
        btn: 'Оформить заявку',
        placeholder: {
            name: "Укажите имя",
            email: "Укажите email",
            phone: "Номер телефона: +38 (000) 000-00-00",
            number: "Количество человек",
            comment: "Оставить комментарий к заявке..."
        }
    }

    return(
        <header className={styles.header}>
            <Languages />
            <HeaderMenu menuTexts={menuTexts} menus={menus} />
            <HeaderTop content={contentHeaderTop} />
            <HeaderBottom content={contentHeaderBottom} />
        </header>
    )
}

export default Header