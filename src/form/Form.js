import React, { Component } from 'react'

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
            firstNameData:this.event.target.value
        })
    }

    lastNameHandler(event){
        this.setState({
            lastNameData: this.event.target.value
        })
    }

    emailDataHandler(event){
        this.setState({
            emailData:event.target.value
        })
    }


    render() {
        return (
            <div className="form-container">
            <form className="register-form" autoComplete="off">
                {/* Uncomment the next line to show the success message */}
                {/* <div className="success-message">Success! Thank you for registering</div> */}
                <input
                    onChange={event => this.firstNameHandler(event)}
                    value={this.state.firstNameData}
                    id="first-name"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="first-name-error">Please enter a first name</span> */}
                <input
                    onChange={event => this.lastNameHandler(event)}
                    value={this.state.lastNameData}
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="last-name-error">Please enter a last name</span> */}
                <input
                    onChange={event => this.emailDataHandler(event)}
                    value={this.state.emailData}
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="email-error">Please enter an email address</span> */}
                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>

        )
    }
}
