import React, { useContext } from 'react';
import SortButton from '../../../components/UI Elements/SortButton';
import { ParticipantContext } from '../../../contexts/ParticipantsContext';

const SortParticipantsButtons = React.memo(() => {
    const { participantState, participantDispatch, participantActionType } = useContext(ParticipantContext);

    const handleClickParticipants = (e) => {
        e.preventDefault();
        participantDispatch({
            type: participantActionType.SORT_ORDER,
            payload: {
                name: 'sortParticipant',
                orderBy: 'name'
            }
        })
    };

    const handleClickParticipantsTime = (e) => {
        e.preventDefault();
        participantDispatch({
            type: participantActionType.SORT_ORDER,
            payload: {
                name: 'sortParticipantTime',
                orderBy: 'timeFrame'
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