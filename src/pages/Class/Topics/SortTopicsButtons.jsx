import React, { useContext } from 'react';
import SortButton from '../../../components/UI Elements/SortButton';
import { TopicContext } from '../../../contexts/TopicContext';

const SortTopicsButtons = React.memo(() => {
    const { topicState, topicDispatch, topicActionType } = useContext(TopicContext);

    const handleClickTopic = (e) => {
        e.preventDefault();
        topicDispatch({
            type: topicActionType.SORT_ORDER,
            payload: {
                name: 'sortTopic',
                orderBy: 'name'
            }
        })
    };

    const handleClickTime = (e) => {
        e.preventDefault();
        topicDispatch({
            type: topicActionType.SORT_ORDER,
            payload: {
                name: 'sortTopicTime',
                orderBy: 'timeFrame'
            }
        })
    };

    let buttons = [
        { name: 'Topic', state: topicState.sortTopic, handleClick: handleClickTopic },
        { name: 'Time', state: topicState.sortTopicTime, handleClick: handleClickTime },
    ]

    return (
        <div className='sort__container'>
            {
                buttons.map((item, index) => (
                    <SortButton
                        name={item.name}
                        state={item.state}
                        handleClick={item.handleClick}
                        key={index}
                    />
                ))
            }
        </div>
    )
})

export default SortTopicsButtons;