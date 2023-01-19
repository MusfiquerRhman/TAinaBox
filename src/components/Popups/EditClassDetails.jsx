import { useSnackbar } from 'notistack';
import React, { useRef, useState } from "react";
import DropDown from "../UI Elements/DropDown";

const EditClassDetails = React.memo(props => {
    const { enqueueSnackbar } = useSnackbar();
    const { handleClose } = props;
    const [image, setImage] = useState('');
    const [displayImage, setDisplayImage] = useState('');
    const [course, setCourse] = useState('');
    const [className, setClassName] = useState('');
    const [syllabus, setSyllabus] = useState('');
    const [timeFrame, setTimeFrame] = useState('');
    const [book, setBook] = useState('');

    const handleChangeCourseName = (e) => {
        e.preventDefault()
        setCourse(e.target.value);
    }

    const handleChangeClass = e => {
        e.preventDefault();
        setClassName(e.target.value);
    }

    const handleChangeSyllabus = e => {
        e.preventDefault();
        setSyllabus(e.target.files[0]);
    }

    const handleChangeTimeFrame = e => {
        e.preventDefault();
        // if(e.target.files[0].type !== 'application/pdf'){
        //     enqueueSnackbar("Select a pdf", { variant: 'error' });
        // }
        setTimeFrame(e.target.files[0]);
    }

    const handleChangeBook = e => {
        e.preventDefault();
        setBook(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(syllabus, timeFrame, book)
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
                        value={0}
                        name={'Courses'}
                        options={options}
                        onChange={handleChangeCourseName}
                    />
                </div>
                <div className='popup__input-container'>
                    <DropDown
                        title={'Class'}
                        value={0}
                        name={'Class'}
                        options={options}
                        onChange={handleChangeClass}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='syllabus'>Syllabus</label>
                    <input accept=".pdf"
                        className='file__input' 
                        type="file" 
                        id="syllabus" 
                        onChange={(e) => {
                            handleChangeSyllabus(e);
                        }}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='timeframe'>Time Frame</label>
                    <input accept=".pdf" 
                        name='timeframe' 
                        className='file__input' 
                        type="file" 
                        id="timeframe" 
                        onChange={(e) => {
                            handleChangeTimeFrame(e);
                        }}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='book'>Book</label>
                    <input accept=".pdf" 
                        name='book' 
                        className='file__input' 
                        type="file" 
                        id="book" 
                        onChange={(e) => {
                            handleChangeBook(e);
                        }}
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