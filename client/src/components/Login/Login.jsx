import './Login.css';

import React, { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const LoginForm = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Sign In</h2>

                <div className="form-group">
                    <label htmlFor={LoginFormKeys.Email}>Email</label>
                    <input
                        type="text"
                        id={LoginFormKeys.Email}
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor={LoginFormKeys.Password}>Password</label>
                    <input
                        type="password"
                        id={LoginFormKeys.Password}
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={onChange}
                    />
                </div>

                <button
                    type="submit"
                    className="login-button"
                    disabled={false}

                >
                    Login
                </button>

                <div className="signup-link">
                    Don't have an account? <a href="/register">Sign up</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;