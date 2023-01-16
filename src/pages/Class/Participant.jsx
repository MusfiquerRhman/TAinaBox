import React, { useCallback, useContext, useState } from 'react';
import { ParticipantContext } from '../../contexts/ParticipantsContext';
import { QueryContext } from '../../contexts/QueryContext';
import AnalyticsCards from "./AnalyticsCards";
import ParticipantsBox from './Participants/ParticipantsBox';
import QueryBox from './Queries/QueryBox';
import Questions from './Questions/Questions';
import RelatedTopics from './Topics/RelatedTopics';

const Participant = React.memo(() => {
    const [selected, setSelected] = useState('');
    const { queryState } = useContext(QueryContext);
    const { participantState } = useContext(ParticipantContext);

    const handleClickSelected = useCallback((id) => {
        setSelected(id);
    }, []);

    return (
        <section className='topic__container'>
            <h1 className='title-secondary'>Students and  Faculty list</h1>
            <AnalyticsCards />
            <div className='topic__topics'>
                <ParticipantsBox />
                {
                    participantState.selectedParticipant.length > 0 && (
                        <QueryBox />
                    )
                }
                {
                    participantState.selectedParticipant.length > 0 && queryState.selectedQuery.length > 0 && (
                        <Questions />
                    )
                }
            </div>
            <div className='related__section'>
                <div className="topic__section">
                    <h2 className='title-tertiary margin-left'>Related Queries</h2>
                    <RelatedTopics
                        handleClickSelected={handleClickSelected}
                        selected={selected}
                    />
                </div>
            </div>
        </section>
    )
})

export default Participant;