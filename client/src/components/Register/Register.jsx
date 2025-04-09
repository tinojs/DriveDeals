import '../Login/Login.css';

import React, { useContext, useState } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import registerSchema from './registerSchema'

const RegisterFormKeys = {
    Email: 'email',
    FirstName: 'firstName',
    LastName: 'lastName',
    PhoneNumber: 'phoneNumber',
    Password: 'password',
    RepeatPassword: 'repeatPassword',
};

const RegisterForm = () => {
    const [errors, setErrors] = useState({});
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(handleOnSubmit, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.FirstName]: '',
        [RegisterFormKeys.LastName]: '',
        [RegisterFormKeys.PhoneNumber]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: '',
    });

    function handleOnSubmit() {
        const result = registerSchema.safeParse(values);
        if (!result.success) {
            const newErrors = {};
            result.error.issues.forEach(issue => {
                newErrors[issue.path[0]] = issue.message;
            });
            setErrors(newErrors);
        } else {
            registerSubmitHandler(values);
        }
    };

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
                    {errors[RegisterFormKeys.Email] && <span className="error">{errors[RegisterFormKeys.Email]}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor={RegisterFormKeys.FirstName}>First Name</label>
                    <input
                        type="text"
                        id={RegisterFormKeys.FirstName}
                        name={RegisterFormKeys.FirstName}
                        value={values[RegisterFormKeys.FirstName]}
                        onChange={onChange}
                    />
                    {errors[RegisterFormKeys.FirstName] && <span className="error">{errors[RegisterFormKeys.FirstName]}</span>}
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
                    {errors[RegisterFormKeys.LastName] && <span className="error">{errors[RegisterFormKeys.LastName]}</span>}
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
                    {errors[RegisterFormKeys.PhoneNumber] && <span className="error">{errors[RegisterFormKeys.PhoneNumber]}</span>}
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
                    {errors[RegisterFormKeys.Password] && <span className="error">{errors[RegisterFormKeys.Password]}</span>}
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
                    {errors[RegisterFormKeys.RepeatPassword] && <span className="error">{errors[RegisterFormKeys.RepeatPassword]}</span>}
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

export default RegisterForm;