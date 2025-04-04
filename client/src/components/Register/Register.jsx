import React, { useContext, useState } from 'react';
import '../Login/Login.css';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


const RegisterFormKeys = {
    Email: 'email',
    FirstName: 'firstName',
    LastName: 'lastName',
    PhoneNumber: 'phoneNumber',
    Password: 'password',
    RepeatPassword: 're-password',
};

export default function RegisterForm() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.FirstName]: '',
        [RegisterFormKeys.LastName]: '',
        [RegisterFormKeys.PhoneNumber]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: '',
    });

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Sign Up</h2>

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
                    <label htmlFor={RegisterFormKeys.FirstName}>Fisrt Name</label>
                    <input
                        type="text"
                        id={RegisterFormKeys.FirstName}
                        name={RegisterFormKeys.FirstName}
                        value={values[RegisterFormKeys.FirstName]}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={RegisterFormKeys.LastName}>Last Name</label>
                    <input
                        type="text"
                        id={RegisterFormKeys.LastName}
                        name={RegisterFormKeys.LastName}
                        value={values[RegisterFormKeys.LastName]}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={RegisterFormKeys.PhoneNumber}>Phone Number</label>
                    <input
                        type="text"
                        id={RegisterFormKeys.PhoneNumber}
                        name={RegisterFormKeys.PhoneNumber}
                        value={values[RegisterFormKeys.PhoneNumber]}
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
                    <label htmlFor={RegisterFormKeys.RepeatPassword}>Repeat password</label>
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
                    You already have an account? <a href="/login">Sign in</a>
                </div>
            </form>
        </div>
    );
};

