import EmailIcon from '@mui/icons-material/Email';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SendIcon from '@mui/icons-material/Send';
import { useSnackbar } from 'notistack';
import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextFieldWithIcon from "../../components/UI Elements/TextFieldWithIcon";

const ForgotPassword = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');

    const onChangeEmail = useCallback(e => {
        e.preventDefault();
        setEmail(e.target.value);
    }, []);

    const submitResetForm = () => {
        if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            enqueueSnackbar("Invalid Email Address", { variant: 'error' });
        }
    }

    return (
        <section className="login__container">
            <div className='login__title'>
                <h1 className='title-primary'>Forgot Your Password?</h1>
                <h2 className='title-tertiary'>Please type in your Email/Phone number below</h2>
            </div>
            <div className='input__container'>
                <TextFieldWithIcon 
                    text="Email/Phone Number"
                    type="email"
                    value={email}
                    Icon={EmailIcon}
                    onChange={onChangeEmail}
                />  
                <div className='width__80'>
                    <button className='contained__button float__left' onClick={submitResetForm}>
                        Send Code
                        <SendIcon sx={{marginLeft: '0.5rem'}}/>
                    </button>
                    <NavLink to='/' className='contained__button float__right'>
                        <KeyboardBackspaceIcon sx={{marginRight: '0.5rem'}}/>
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;