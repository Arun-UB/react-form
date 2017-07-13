import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            name:'',
            email:''
        }
    }

    //Submit handler for the form
    onSubmit = (e) => {
        e.preventDefault();
    }

    //OnChange handler for the form
    onChange = (e) => {
        this.setState({
        [e.target.name] :e.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={this.state.name}
                        required
                        onChange = {(e) =>this.onChange(e)}
                        placeholder="First Last"/></div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"/></div>
                    
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        )
    }
}

export default Form;