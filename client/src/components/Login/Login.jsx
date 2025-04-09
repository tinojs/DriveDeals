import './Login.css';

import React, { useContext, useState } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import loginSchema from './loginSchema';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const LoginForm = () => {
    const [errors, setErrors] = useState({});
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(handleOnSubmit, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    function handleOnSubmit() {
        const result = loginSchema.safeParse(values);
        if (!result.success) {
            const newErrors = {};
            result.error.issues.forEach(issue => {
                newErrors[issue.path[0]] = issue.message;
            });
            setErrors(newErrors);
        } else {
            loginSubmitHandler(values);
        }
    }

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
                        placeholder={errors[LoginFormKeys.Email] ? errors[LoginFormKeys.Email] : 'Enter your email'}
                        style={errors[LoginFormKeys.Email] ? { borderColor: 'red' } : {}}
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
                        placeholder={errors[LoginFormKeys.Password] ? errors[LoginFormKeys.Password] : 'Enter your password'}
                        style={errors[LoginFormKeys.Password] ? { borderColor: 'red' } : {}}
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