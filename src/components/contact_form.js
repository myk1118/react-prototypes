import React, { Component } from 'react';
import Field from './field.js';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(event) {
        // console.log(event.target.value); //the letter you type in
        // console.log(event.target.name); //first name or last name
        const { value, name } = event.target;
        const { form } = this.state;
        form[name] = value; //Use the name constant to select the correct key in the form object and set it to the constant value
        this.setState({
            form: { ...form }
        });
    }
    handleSubmit(event) {
        event.preventDefault(); //this will stop the form from trying to submit and refresh the page
        console.log('handleSubmit called, form values are:', this.state.form);
        this.props.add(this.state.form);
        this.reset();
    }
    reset() {
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        });
    }
    render() {
        const { firstName, lastName, phone, email } = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange} autoComplete="off" />
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange} autoComplete="off" />
                <Field name="phone" label="Phone" type="text" value={phone} onChange={this.handleInputChange} autoComplete="off" />
                <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange} autoComplete="off" />
                <button>Add Contact</button>
                <button type="button" onClick={this.reset}>Clear Form</button>
            </form>
        );
    }
}

export default ContactForm;