import React, { useContext } from 'react';
import SortButton from '../../../components/UI Elements/SortButton';
import { ParticipantContext } from '../../../contexts/ParticipantsContext';

const SortParticipantsButtons = React.memo(() => {
    const { participantState, dispatch, ACTION_TYPE } = useContext(ParticipantContext);

    const handleClickParticipants = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPE.SORT_ORDER,
            payload: {
                name: 'sortParticipant',
                orderBy: 'orderByParticipant',
                order: 'name'
            }
        })
    };

    const handleClickParticipantsTime = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPE.SORT_ORDER,
            payload: {
                name: 'sortParticipantTime',
                orderBy: 'orderByParticipant',
                order: 'timeFrame'
            }
        })
    };

    let buttons = [
        {name: 'Name', state: participantState.sortParticipant, handleClick: handleClickParticipants},
        {name: 'Time', state: participantState.sortParticipantTime, handleClick: handleClickParticipantsTime},
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

export default SortParticipantsButtons;