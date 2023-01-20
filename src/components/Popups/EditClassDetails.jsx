import { useSnackbar } from 'notistack';
import React, { useReducer, useState } from "react";
import DropDown from "../UI Elements/DropDown";
import { ACTION_TYPE, Reducer } from './Reducer';

const initialState = {
    course: { value: 0, text: 'Per Day' },
    className: { value: 0, text: 'Per Day' },
    syllabus: '',
    timeFrame: '',
    book: '',
    linkToBook: '',
    linkToCanvas: ''
}

const EditClassDetails = React.memo(props => {
    const { handleClose } = props;
    const { enqueueSnackbar } = useSnackbar();
    const [state, dispatch] = useReducer(Reducer, initialState);
    const [image, setImage] = useState('');
    const [displayImage, setDisplayImage] = useState('');


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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)

    }

    const options = [
        { value: 0, text: 'Per Day' },
        { value: 1, text: 'Per Month' },
        { value: 2, text: 'Per Year' },
    ]

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

    return (
        <div className='popup__container'>
            <h1 className='title-secondary'>Edit Class Details</h1>
            <form onSubmit={handleSubmit} className='form__container'>
                <div className="popup__image--container">
                    {
                        displayImage.length > 0 && (
                            <div className="popup__image--box">
                                <img src={displayImage} alt='Class' />
                            </div>
                        )
                    }
                    <div className='popup__input-container'>
                        <label htmlFor='photo'>Select Class Image</label>
                        <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                            imageSelectHandler(e);
                        }} />
                    </div>
                </div>
                <div className='popup__input-container'>
                    <DropDown
                        title={'Courses'}
                        value={state.course.value}
                        name={'course'}
                        options={options}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__input-container'>
                    <DropDown
                        title={'Class'}
                        value={state.className.value}
                        name={'className'}
                        options={options}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='syllabus'>Syllabus</label>
                    <input accept=".pdf"
                        className='file__input' 
                        type="file" 
                        id="syllabus" 
                        name='syllabus'
                        onChange={changeFile}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='timeFrame'>Time Frame</label>
                    <input accept=".pdf" 
                        name='timeFrame' 
                        className='file__input' 
                        type="file" 
                        id="timeFrame" 
                        onChange={changeFile}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='book'>Book</label>
                    <input accept=".pdf" 
                        name='book' 
                        className='file__input' 
                        type="file" 
                        id="book" 
                        onChange={changeFile}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='book'>Link to Book</label>
                    <input
                        name='linkToBook' 
                        className='popup__input' 
                        placeholder='Link to Book'
                        value={state.linkToBook}
                        type="url" 
                        id="booklink" 
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='canvas'>Link to Canvas</label>
                    <input
                        name='linkToCanvas' 
                        className='popup__input' 
                        placeholder='Link to Canvas'
                        type="url" 
                        id="canvas" 
                        value={state.linkToCanvas}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__button-container'>
                    <button type='submit' className='popup__button bordered__button'>
                        Confirm
                    </button>
                </div>
            </form>
            <div className='popup__button-container'>
                <button className='popup__button nevermind bordered__button warning__button' onClick={handleClose}>
                    Nevermind
                </button>
            </div>
        </div>
    )
})

export default EditClassDetails;