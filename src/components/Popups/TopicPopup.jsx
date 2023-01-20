import React, { useReducer } from 'react';
import { ACTION_TYPE, Reducer } from './Reducer';

const initialState = {
    topic: '',
    answer: '',
    url: '',
    bookInfo: '',
    linkToVideo: '',
    positionInVideo: '',
    relatedTopic: '',
}

const TopicPopup = React.memo(props => {
    const { section, type, handleSubmit } = props;
    const [state, dispatch] = useReducer(Reducer, initialState);

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

    let title = '';
    if(type === 'Add' && section === 'Answers')
        title = 'Answer Question';

    else title = `${type} ${section}`;


    return (
        <div className='popup__container'>
            <h1 className='title-secondary'>{title}</h1>
            <form onSubmit={handleSubmit} className='form__container'>
                {
                    section !== 'Answers' && (
                        <div className='popup__input-container'>
                            <label htmlFor='topic'>What is the {section}</label>
                            <textarea
                                name='topic'
                                className='popup__input'
                                placeholder={`What is the ${section}`}
                                type="text"
                                id="topic"
                                rows={section === 'Topic' ? 1 : 3}
                                value={state.topic}
                                onChange={changeValue}
                            />
                        </div>
                    )
                }

                <div className='popup__input-container'>
                    <label htmlFor='answer'>What is the Answer</label>
                    <textarea
                        rows={section === 'Answers' ? 7 : 5}
                        name='answer'
                        className='popup__input'
                        placeholder='What is the Answer'
                        type="text"
                        id="answer"
                        value={state.answer}
                        onChange={changeValue}
                    />
                </div>
                <h5 className='title-tertiary'>Where Can I find it?</h5>
                <div className='popup__input-container'>
                    <label htmlFor='url'>URL</label>
                    <input
                        name='url'
                        className='popup__input'
                        placeholder='URL'
                        type="url"
                        id="url"
                        value={state.url}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='bookInfo'>Book Info</label>
                    <input
                        name='bookInfo'
                        className='popup__input'
                        placeholder='Book Info'
                        type="text"
                        id="bookInfo"
                        value={state.bookInfo}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='linkToVideo'>Link to Video</label>
                    <input
                        name='linkToVideo'
                        className='popup__input'
                        placeholder='Link to Video'
                        type="text"
                        id="linkToVideo"
                        value={state.linkToVideo}
                        onChange={changeValue}
                    />
                </div>
                <div className='popup__input-container'>
                    <label htmlFor='positionInVideo'>Position in Video</label>
                    <input
                        name='positionInVideo'
                        className='popup__input'
                        placeholder='Position in Video'
                        type="text"
                        id="positionInVideo"
                        value={state.positionInVideo}
                        onChange={changeValue}
                    />
                </div>
                {
                    section !== 'Answers' && (
                        <div className='popup__input-container'>
                            <label htmlFor='relatedTopic'>Related {section}</label>
                            <input
                                name='relatedTopic'
                                className='popup__input'
                                placeholder={`Related ${section}`}
                                type="text"
                                id="relatedTopic"
                                value={state.relatedTopic}
                                onChange={changeValue}
                            />
                        </div>
                    )
                }

                <div className='popup__button-container'>
                    <button type='submit' className='popup__button bordered__button'>
                        {type} {section}
                    </button>
                </div>
            </form>
        </div>
    )
})

export default TopicPopup;