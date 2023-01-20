import Dialog from '@mui/material/Dialog';
import React, { useReducer, useState } from 'react';
import DropDown from "../UI Elements/DropDown";
import ClassAndHours from './ClassAndHours';
import { ACTION_TYPE, Reducer } from './Reducer';

const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    officeLocation: '',
    officeHours: '',
}

const UserPopup = React.memo(props => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const { handleSubmit, type } = props;
    const [image, setImage] = useState('');
    const [displayImage, setDisplayImage] = useState('');
    const [userType, setUserType] = useState({ value: 0, text: 'Student' })

    const [openSchedule, setOpenSchedule] = useState(false);

    const handleClickEditSchedule = () => {
        setOpenSchedule(true);
    }

    const handleCloseSchedule = () => {
        setOpenSchedule(false);
    }

    const changeValue = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPE.CHANGE_VALUE,
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const changeFile = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPE.CHANGE_VALUE,
            payload: {
                name: e.target.name,
                value: e.target.files[0]
            }
        })
    }

    const options = [
        { value: 0, text: 'Student' },
        { value: 1, text: 'Faculty' },
        { value: 2, text: 'Admin' },
    ]

    const handleFindUser = (e) => {
        e.preventDefault()
    }

    const imageSelectHandler = (event) => {
        setImage(event.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDisplayImage(reader.result);
            }
        };
        if (event.target.files[0] && event.target.files[0].type.match("image.*")) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleChangeUserType = (e) => {
        setUserType(e.target.value)
    }


    return (
        <div className='popup__container'>
            <div className='popup'>
                <Dialog onClose={handleCloseSchedule} open={openSchedule}>
                    <ClassAndHours handleClose={handleCloseSchedule} />
                </Dialog>
            </div>
            <h1 className='title-secondary'>{type} user</h1>
            <form onSubmit={handleSubmit} className='form__container'>
                <div className='popup__input-container'>
                    <DropDown
                        title={'User Type'}
                        value={state.type}
                        name={'type'}
                        options={options}
                        onChange={handleChangeUserType}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='canvas'>Identification Number</label>
                    <input
                        name='id'
                        className='popup__input'
                        placeholder='Identification Number'
                        type="text"
                        id="id"
                        value={state.id}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__button-container'>
                    <button className='popup__button bordered__button' onClick={handleFindUser}>
                        Find User
                    </button>
                </div>
                <div className="popup__image--container">
                    {
                        displayImage.length > 0 && (
                            <div className="popup__image--box">
                                <img src={displayImage} alt='Class' />
                            </div>
                        )
                    }
                    <div className='popup__input-container'>
                        <label htmlFor='photo'>Select User Image</label>
                        <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                            imageSelectHandler(e);
                        }} />
                    </div>
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='canvas'>First Name</label>
                    <input
                        name='firstName'
                        className='popup__input'
                        placeholder='First Name'
                        type="text"
                        id="firstName"
                        value={state.firstName}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='canvas'>Last Name</label>
                    <input
                        name='lastName'
                        className='popup__input'
                        placeholder='Last Name'
                        type="text"
                        id="lastName"
                        value={state.lastName}
                        onChange={changeValue}
                    />
                </div>
                {
                    userType.value !== 0 && (
                        <>
                            <div className='popup__input-container'>
                                <label htmlFor='officeLocation'>Office Location</label>
                                <input accept=".pdf"
                                    className='file__input'
                                    type="file"
                                    id="officeLocation"
                                    name='officeLocation'
                                    onChange={changeFile}
                                />
                            </div>
                            <div className='popup__button-container'>
                                <button className='popup__button bordered__button' onClick={handleClickEditSchedule}>
                                    Office Hours
                                </button>
                            </div>
                        </>
                    )
                }

                <div className='popup__button-container'>
                    <button type='submit' className='popup__button bordered__button'>
                        Confirm User
                    </button>
                </div>
            </form>
        </div>
    )
})

export default UserPopup;