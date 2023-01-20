import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import TopicPopup from '../../../components/Popups/TopicPopup';

const Questions = React.memo(() => {
    const [openAddQuestion, setOpenAddQuestion] = useState(false);
    const [openEditQuestion, setOpenEditQuestion] = useState(false);

    const handleClickOpenAddQuestion = () => {
        setOpenAddQuestion(true);

    }

    const handleCloseAddQuestion = () => {
        setOpenAddQuestion(false);
    }

    const handleSubmitAddQuestion = (e) => {
        e.preventDefault();


        // TODO:
    }

    const handleSubmitEditQuestion = (e) => {
        e.preventDefault();

        // TODO:
    }

    const handleCloseEditQuestion = () => {
        setOpenEditQuestion(false);
    }

    const handleClickOpenEditQuestion = () => {
        setOpenEditQuestion(true);
    }

    return (
        <>
            <div className='popup'>
                <Dialog onClose={handleCloseAddQuestion} open={openAddQuestion}>
                    <TopicPopup section='Answers' type='Add' handleSubmit={handleSubmitAddQuestion} />
                </Dialog>
                <Dialog onClose={handleCloseEditQuestion} open={openEditQuestion}>
                    <TopicPopup section='Answers' type='Edit' handleSubmit={handleSubmitEditQuestion} />
                </Dialog>
            </div>
            <div className='topic__section'>
                <h1 className='title-secondary chat__heading'>Question Answer</h1>
                <div className="section__buttons">
                    <button className='bordered__button section__button' onClick={handleClickOpenEditQuestion}>Edit Answer</button>
                    <button className='bordered__button section__button' onClick={handleClickOpenAddQuestion}>Answer Question</button>
                </div>
            </div>
        </>
    )
});

export default Questions;