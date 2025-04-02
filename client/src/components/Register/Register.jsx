import React, { useContext, useState } from 'react';
import '../Login/Login.css';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 're-password',
};

export default function RegisterForm() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: '',
    });

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Sign In</h2>

                <div className="form-group">
                    <label htmlFor={RegisterFormKeys.Email}>Email</label>
                    <input
                        type="text"
                        id={RegisterFormKeys.Email}
                        name={RegisterFormKeys.Email}
                        value={values[RegisterFormKeys.Email]}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor={RegisterFormKeys.Password}>Password</label>
                    <input
                        type="password"
                        id={RegisterFormKeys.Password}
                        name={RegisterFormKeys.Password}
                        value={values[RegisterFormKeys.Password]}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor={RegisterFormKeys.RepeatPassword}>Password</label>
                    <input
                        type="password"
                        id={RegisterFormKeys.RepeatPassword}
                        name={RegisterFormKeys.RepeatPassword}
                        value={values[RegisterFormKeys.RepeatPassword]}
                        onChange={onChange}
                    />
                </div>

                <button
                    type="submit"
                    className="login-button"
                    disabled={false}
                >
                    Register
                </button>

                <div className="signup-link">
                    You already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
};

