import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { useCallback, useState } from 'react';
import UserDetailsRow from './UserDetailsRow';

const ManageRole = React.memo(props => {
    const { handleClose } = props;
    const [selected, setSelected] = useState('');

    const handleClickSelected = useCallback((id) => {
        setSelected(id);
    }, [])

    const users = [
        { name: 'Jhon', type: 'Faculty', role: 'Teacher', id: '356364' },
        { name: 'Jhon', type: 'Faculty', role: 'Teacher', id: '356364' },
        { name: 'Jhon', type: 'Faculty', role: 'Teacher', id: '356364' },
        { name: 'Jhon', type: 'Faculty', role: 'Teacher', id: '356364' },
    ]

    return (
        <div className='fullscreen__popup'>
            <div className='popup__head'>
                <h1 className='title-primary'>Manage Role</h1>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </div>
            <div className='header__container'>
                <div className="header__details">
                    <div className="header__image">
                        <img alt='user' src={'https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/117745653_176475144041910_3998483349071500847_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEOOdWoTMevhkzhdB3CAC4Lk_z1cVStw4iT_PVxVK3DiI3lnbbbSF9PW-DpLLwHLaY5xcsL2kNHxnrP0i_CIyeq&_nc_ohc=4H0iMZlMvwkAX9fTbkm&_nc_ht=scontent.fdac149-1.fna&oh=00_AfAnwuTAzARP3tQkV8aKbloxFisCi_kaCwVimd794AAXMg&oe=63E8FCDF'} />
                    </div>
                    <div>
                        <h1 className='title-tertiary'>Class Name</h1>
                        <h4 className='header__details--info'>Teacher / Co-teacher</h4>
                        <p className='header__details--info'>Building: 3, Room: 213</p>
                        <p className='header__details--info'>8:30 am - 11:00am</p>
                        <p className='header__details--info'>12:00 pm - 3:00pm</p>
                        <p className='header__details--info'>4:00 pm - 5:00pm</p>
                    </div>
                </div>
            </div>
            <div className='popup__body'>
                <div className='popup__members'>
                    <h4 className='title-tertiary'>Members</h4>
                    {users.map((item, index) => (
                        <UserDetailsRow name={item.name}
                            type={item.type}
                            role={item.role}
                            id={item.id}
                            handleClickSelected={handleClickSelected}
                            selected={selected}
                            key={index}
                        />
                    ))}
                </div>
                <div className='popup__roles'>
                    <h4 className='title-tertiary'>Role</h4>
                    <div className='role__buttons'>
                        <button onClick={() => handleClickSelected(0)} 
                            className={`role__button ${selected === 0 ? 'contained__button' : 'bordered__button '}`}
                        >
                            Teacher
                        </button>
                        <button onClick={() => handleClickSelected(1)} 
                            className={`role__button ${selected === 1 ? 'contained__button' : 'bordered__button '}`}
                        >
                            Technical Assistant
                        </button>
                        <button onClick={() => handleClickSelected(2)} 
                            className={`role__button ${selected === 2 ? 'contained__button' : 'bordered__button '}`}
                        >
                            Co Teacher
                        </button>
                        <button onClick={() => handleClickSelected(3)} 
                            className={`role__button ${selected === 3 ? 'contained__button' : 'bordered__button '}`}
                        >
                            Student
                        </button>
                        <button onClick={() => handleClickSelected(4)} 
                            className={`role__button ${selected === 4 ? 'contained__button' : 'bordered__button '}`}
                        >
                            Course Manager
                        </button>
                    </div>
                </div>
            </div>
            <div className='popup__button-container'>
                <button type='submit' className='popup__button bordered__button'>
                    Confirm User
                </button>
                <button type='submit' className='popup__button bordered__button warning__button'>
                    Cancel
                </button>
            </div>
        </div>
    );
})

export default ManageRole;