import AddLinkIcon from '@mui/icons-material/AddLink';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import { useSnackbar } from 'notistack';
import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PasswordField from '../../components/UI Elements/PasswordField';
import TextFieldWithIcon from '../../components/UI Elements/TextFieldWithIcon';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const onChangeEmail = useCallback(e => {
        e.preventDefault();
        setEmail(e.target.value);
    }, [])

    const onChangePassword = useCallback(e => {
        e.preventDefault();
        setPassword(e.target.value);
    }, []);

    const submitLogin = () => {
        if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            enqueueSnackbar("Invalid Email Address", { variant: 'error' });
        }
    }

    return (
        <section className='login__container'>
            <div className='login__title'>
                <h1 className='title-primary'>Welcome to</h1>
                <h2 className='title-secondary'>TA in a Box</h2>
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
                <div className='width__80'>
                    <NavLink to='/forgotPassword' className='borderless__button float__left'>
                        Forgot Password?
                    </NavLink>
                    <NavLink to='/registration' className='borderless__button float__right'>
                        First Time?
                    </NavLink>
                </div>
                <button className='contained__button width__80' onClick={submitLogin}>
                    <LoginIcon sx={{marginRight: '0.5rem'}}/>
                    Log In
                </button>
            </div>
            <button className='contained__button'>
                <AddLinkIcon sx={{marginRight: '0.5rem'}}/>
                Connect With UVU
            </button>
        </section>
    )
}

export default LoginPage