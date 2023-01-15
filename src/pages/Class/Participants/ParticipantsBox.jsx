import React, { useCallback, useContext, useState } from "react";
import SearchBox from '../../../components/UI Elements/SearchBox';
import { ParticipantContext } from "../../../contexts/ParticipantsContext";
import ParticipantsList from "./ParticipantsList";
import SortParticipantsButtons from "./SortParticipantsButtons";

const ParticipantsBox = React.memo(() => {
    const [selected, setSelected] = useState('');
    const { participantState, dispatch, ACTION_TYPE } = useContext(ParticipantContext);

    const handleClickSelected = useCallback((id) => {
        setSelected(id);
        dispatch({
            type: ACTION_TYPE.SELECT_PARTICIPANT,
            payload: {
                value: id
            }
        })
    }, [ACTION_TYPE.SELECT_PARTICIPANT, dispatch]);

    const handleClickTopic = (e) => {
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

    const handleClickTime = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPE.SORT_ORDER,
            payload: {
                name: 'sortQueryTime',
                orderBy: 'orderByQuery',
                order: 'timeFrame'
            }
        })
    };

    return (
        <div className="topic__section">
            <SearchBox text='Participants' />
            <SortParticipantsButtons 
                handleClickTopic={handleClickTopic}
                handleClickTime={handleClickTime}
                state={participantState}
            />
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