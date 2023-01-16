import React, { useCallback, useContext, useState } from "react";
import SearchBox from '../../../components/UI Elements/SearchBox';
import { ParticipantContext } from "../../../contexts/ParticipantsContext";
import ParticipantsList from "./ParticipantsList";
import SortParticipantsButtons from "./SortParticipantsButtons";

const ParticipantsBox = React.memo(() => {
    const [selected, setSelected] = useState('');
    const { participantDispatch, participantActionType } = useContext(ParticipantContext);

    const handleClickSelected = useCallback((id) => {
        setSelected(id);
        participantDispatch({
            type: participantActionType.SELECT_PARTICIPANT,
            payload: {
                value: id
            }
        })
    }, [participantActionType.SELECT_PARTICIPANT, participantDispatch]);

    return (
        <div className="topic__section">
            <SearchBox text='Participants' />
            <SortParticipantsButtons />
            <ParticipantsList
                handleClickSelected={handleClickSelected}
                selected={selected}
            />
            <div className="section__buttons">
                <button className='bordered__button section__button'>Edit Query</button>
                <button className='bordered__button section__button warning__button'>Remove From Consideration</button>
                <button className='bordered__button section__button'>Add Query</button>
            </div>
        </div>
    )
})

export default ParticipantsBox;