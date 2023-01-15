import React, { useContext } from 'react';
import { ParticipantContext } from '../../../contexts/ParticipantsContext';
import { descendingComparator } from '../../helperFunctions';
import TopicRow from '../Topics/TopicRow';

export function getComparator(sortParticipant, sortParticipantTime, orderBy) {
    if (orderBy === 'name') {
        return sortParticipant === true
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    else {
        return sortParticipantTime === true
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
}

const ParticipantsList = React.memo((props) => {
    const { handleClickSelected, selected } = props;
    const { participantState } = useContext(ParticipantContext);

    return (
        <div className='topic__column'>
            {
                participantState.participantData
                    .sort(getComparator(participantState.sortParticipant, participantState.sortParticipantTime, participantState.orderByParticipant))
                    .map((item, index) => (
                        <TopicRow
                            key={index}
                            info={item.name}
                            details={item.details}
                            timeFrame={item.timeFrame}
                            read={false}
                            handleClickSelected={handleClickSelected}
                            selected={selected}
                        />
                    ))
            }
        </div>
    )
})

export default ParticipantsList;