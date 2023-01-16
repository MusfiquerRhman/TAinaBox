import React, { useContext } from 'react';
import { ParticipantContext } from '../../../contexts/ParticipantsContext';
import { compare } from '../../helperFunctions';
import TopicRow from '../Topics/TopicRow';

export function getComparator(sortParticipant, sortParticipantTime, orderBy) {
    if (orderBy === 'name') {
        return compare(sortParticipant, orderBy);
    }
    else {
        return compare(sortParticipantTime, orderBy);
    }
}

const ParticipantsList = React.memo((props) => {
    const { handleClickSelected, selected } = props;
    const { participantState } = useContext(ParticipantContext);

    return (
        <div className='topic__column'>
            {
                participantState.participantData
                    .sort(getComparator(
                        participantState.sortParticipant, 
                        participantState.sortParticipantTime, 
                        participantState.orderByParticipant
                    )).map((item, index) => (
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