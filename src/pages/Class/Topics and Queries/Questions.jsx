import React from 'react';
import TopicRow from './TopicRow';

const Questions = React.memo(props => {
    return (
        <div className='topic__section'>
            <h1 className='title-secondary chat__heading'>Question Answer</h1>
        </div>
    )
});

export default Questions;