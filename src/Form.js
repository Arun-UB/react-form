import React, {Component} from 'react';

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
            email: ''
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
        const {name, email} = values;
        return {
            name: !name || !this.validateName(name)
                ? true
                : false
        }
    }

    // To check for the presence of both first name and the last name
     validateName = (name) => {
    name = name
      .trim()
      .split(" ");
    return name.length > 1;
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
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange=
                        {(e) =>this.onChange(e)}
                        placeholder="Email"/></div>

                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        )
    }
}

export default Form;