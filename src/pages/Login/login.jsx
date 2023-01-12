import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import PasswordField from '../../components/UI Elements/PasswordField';
import TextFieldWithIcon from '../../components/UI Elements/TextFieldWithIcon';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = e => {
        setEmail(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <section className='login__container'>
            <div className='login__title'>
                <h1 className='login__title-primary'>Welcome to</h1>
                <h2 className='login__title-secondary'>TA in a Box</h2>
            </div>
            <div className='input__container'>
                <TextFieldWithIcon 
                    text="Email/Phone Number"
                    type="email"
                    value={email}
                    Icon={EmailIcon}
                    onChange={onChangeEmail}
                />  
                <PasswordField 
                    value={password} 
                    onChange={onChangePassword}
                /> 
                <div className='login__actions'>
                    <button className='borderless__button float__left'>Forgot Password?</button>
                    <button className='borderless__button float__right'>First Time?</button>
                </div>
                <button className='contained__button width__80'>Log In</button>
            </div>
            <button className='contained__button'>Connect With UVU</button>
        </section>
    )
}

export default LoginPage