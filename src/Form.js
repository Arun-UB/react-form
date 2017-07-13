import React, {Component} from 'react';
import * as moment from 'moment';

class Form extends Component {

    constructor(props) {
        super();

        this.onSubmit = this
            .onSubmit
            .bind(this);
        this.onChange = this
            .onChange
            .bind(this);

        this.state = {
            name: '',
            email: '',
            bday: '',
            password: ''
        }

        // Create error states for all the input fields
        this.state.error = {
            ...this.state
        }
    }

    //Submit handler for the form
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: this.validate(this.state)
        })
        console.log(this.state);
    }

    //OnChange handler for the form
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Form Validation
    validate = (values) => {
        const {name, email, bday, password} = values;
        return {
            name: !name || !this.validateName(name)
                ? true
                : false,
            email: !email || !this.validateEmail(email)
                ? true
                : false,
            bday: !bday || !this.validateDate(bday),
            password: !password || !this.validatePassword(password)
        }
    }

    // To check for the presence of both first name and the last name
    validateName = (name) => {
        name = name
            .trim()
            .split(" ");
        return name.length > 1;
    }

    // Email validation
    validateEmail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    // Date validation using moment.js library
    validateDate = (date) => {
        return moment(date, 'MM/DD/YYYY').isValid();
    }

    // Password validation
    validatePassword = (password) => {
        const requiredPassWordLength = 6;
        return password
            .trim()
            .split("")
            .length >= requiredPassWordLength;
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div
                    className={`form-group ${ !this.state.error.name
                    ? null
                    : 'has-danger'}`}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange=
                        {(e) =>this.onChange(e)}
                        placeholder="First Last"/> {this.state.error.name
                        ? <div className="form-control-feedback">
                                First name and last name required</div>
                        : null}
                </div>
                <div
                    className={`form-group ${ !this.state.error.email
                    ? null
                    : 'has-danger'}`}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange=
                        {(e) =>this.onChange(e)}
                        placeholder="Email"/> {this.state.error.email
                        ? <div className="form-control-feedback">
                                Valid email required</div>
                        : null}
                </div>
                <div
                    className={`form-group ${ !this.state.error.bday
                    ? null
                    : 'has-danger'}`}>
                    <label htmlFor="bday">Birthday</label>
                    <input
                        className="form-control"
                        type="text"
                        name="bday"
                        value={this.state.bday}
                        id="bday"
                        placeholder="MM/DD/YYYY"
                        onChange={(e) => this.onChange(e)}/> {this.state.error.bday
                        ? <div className="form-control-feedback">
                                Invalid date format,input as MM/DD/YYYY</div>
                        : null}
                </div>
                <div
                    className={`form-group ${ !this.state.error.password
                    ? null
                    : 'has-danger'}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        value={this.state.password}
                        name="password"
                        id="password"
                        onChange={(e) => this.onChange(e)}/> {this.state.error.password
                        ? <div className="form-control-feedback">
                                Password should be atleast 6 characters</div>
                        : null}
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        )
    }
}

export default Form;