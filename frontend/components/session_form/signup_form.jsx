import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e =>
            this.setState({
                [field]: e.target.value
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signupForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='userAuth'>
                <span className='signup_title'>Create New Customer Account</span>

                <div className='signup_form_container'>

                    <div className='left_signin'>
                        <h2 className='sub_title'>Personal Information</h2>
                        <div className='error_message'>{this.renderErrors()}</div>
                        <form onSubmit={this.handleSubmit} className='signup_form_box'>
                            <div className='personal_login'>
                                <label className='name_signup'>First Name
                                    <input type="text" className='personal_input'/>
                                </label>

                                <label className='lname_signup'>Last Name
                                    <input type="text" className='personal_input'/>
                                </label>

                                <div className='check_div'>
                                    <input type="checkbox" default='checked' className='check'/>                   
                                    <label className='newsletter'>Subscribe to our newsletter</label>
                                </div>
                                
                            </div>

                        <h2 className='sub_title'>Sign-in information</h2>

                            <div className='sign_info'>
                                <label className='email_signup'>Email<span className='asterisk'>*</span>
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.handleInput('email')}
                                    />
                                </label>

                                <label className='password_signup'>Password<span className='asterisk'>*</span>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.handleInput('password')}
                                    />
                                </label>
                                <div className='disclaimer'>
                                    <p>This website is for demonstration purposes. Please do not store personal information.</p>   
                                    <p>Thank you!</p>
                                </div>
                            </div>   

                            <div className='enter_back'>

                                <button type="submit" value="Create An Account" className='signupButton'>Create An Account</button>
                                
                                {this.props.formType === "login"
                                    ? <Link to='/signup'>Create an account</Link>
                                    : <Link to='/login' className='backLogin'>Back</Link>
                                }
                            </div>
                            <span className='requried_field'>* Required Field</span>
                        </form>
                    </div>



                </div>
            </div>
        )
    }
}

export default SignUpForm;