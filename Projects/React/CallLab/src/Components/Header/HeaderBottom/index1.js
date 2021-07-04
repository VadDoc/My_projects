import React from 'react'
import styles from './HeaderBottom.module.scss'
import Control from '../../Control'
import Button from '../../Button'

export default class HeaderBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state= {name: '', email: '', phone: '', number: '', comment: ''}
        this.content = props.content
        this.placeholder = this.content.placeholder
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.serverMessage = ''
    }

    handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    }

    handleSubmit() {
        // event.preventDefault();
        // console.log(this.state)

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
            body: "data=" + JSON.stringify(this.state)
        })
         .then(status)
         .then(text)
         .then(function (value) { 
            this.serverMessage = value;
         })
         .catch(function (error) {
            this.serverMessage = "Были ошибки, сообщение не отправлено" 
          })
    }

    render() {
        return(
            <div className={styles.box} >
                <div className={styles.title}>{this.content.title[0]}<br />{this.content.title[1]}</div>
                <form action="" method="post" onClick={this.handleSubmit}>
                    <Control 
                        inputType="input"
                        type="text" 
                        name="name"
                        className="flex"
                        placeholder={this.placeholder.name}
                        onChange={this.handleInput} 
                        value={this.state.name} 
                    />
                    <Control 
                        inputType="input"
                        type="text" 
                        name="email"
                        className="flex"
                        placeholder={this.placeholder.email}
                        onChange={this.handleInput} 
                        value={this.state.email} 
                    />
                    <Control 
                        inputType="input"
                        type="tel" 
                        name="phone"
                        className="flex"
                        placeholder={this.placeholder.phone}
                        onChange={this.handleInput} 
                        value={this.state.phone} 
                    />
                    <Control 
                        inputType="input"
                        type="number" 
                        name="number"
                        className="flex"
                        placeholder={this.placeholder.number}
                        onChange={this.handleInput} 
                        value={this.state.number} 
                    />
                    <Control 
                        inputType="textarea"
                        type="text" 
                        name="comment"
                        className="flex"
                        placeholder={this.placeholder.comment}
                        onChange={this.handleInput} 
                        value={this.state.comment} 
                        cols="30"
                        rows="4"
                    />   
                    <Button title={this.content.btn} />                 
                </form>
                <div className={styles.serverMessage}>{this.serverMessage}</div>
            </div>
        )
    }
}