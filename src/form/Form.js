import React, { Component } from 'react'
import '../form/Form.css'

export default class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }
    }
    
    firstNameHandler(event){
        this.setState({
            firstNameData:event.target.value
        })
    }

    lastNameHandler(event){
        this.setState({
            lastNameData: event.target.value
        })
    }

    emailDataHandler(event){
        this.setState({
            emailData:event.target.value
        })
    }

    onSubmitted(event){
        event.preventDefault();
        this.setState({
            submitted:true
        })
        if(this.state.firstNameData && this.state.lastNameData && this.state.emailData){
            this.setState({
                allValid:true
                
            })
            
        }
        setTimeout(() => {
           this.setState({
            allValid:false
           }) 
        }, 3000);
    }

    render() {
        return (
            <div className="form-container">
            <form className="register-form" autoComplete="off">
                {this.state.allValid && <div className="success-message">Success! Thank you for registering</div>}
                <input
                    onChange={event => this.firstNameHandler(event)}
                    value={this.state.firstNameData}
                    id="first-name"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {(this.state.submitted && !this.state.firstNameData) ? <span id="first-name-error">Please enter a first name</span> : null}
                <input
                    onChange={event => this.lastNameHandler(event)}
                    value={this.state.lastNameData}
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {(this.state.submitted&&!this.state.lastNameData) ? <span id="last-name-error">Please enter a last name</span>:null}
                <input
                    onChange={event => this.emailDataHandler(event)}
                    value={this.state.emailData}
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {(this.state.submitted &&!this.state.emailData) ? <span id="email-error">Please enter an email address</span> : null}
                <button className="form-field" type="submit" onClick={event => this.onSubmitted(event)}>
                    Register
                </button>
            </form>
        </div>

        )
    }
}
