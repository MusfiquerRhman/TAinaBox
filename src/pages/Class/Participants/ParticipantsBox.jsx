import Dialog from '@mui/material/Dialog';
import React, { useCallback, useContext, useState } from "react";
import RemoveFromConsideration from "../../../components/Popups/RemoveFromConsideration";
import UserPopup from "../../../components/Popups/UserPopup";
import SearchBox from '../../../components/UI Elements/SearchBox';
import { ParticipantContext } from "../../../contexts/ParticipantsContext";
import ParticipantsList from "./ParticipantsList";
import SortParticipantsButtons from "./SortParticipantsButtons";

const ParticipantsBox = React.memo(() => {
    const [selected, setSelected] = useState('');
    const { participantDispatch, participantActionType } = useContext(ParticipantContext);
    const [openRemove, setOpenRemove] = useState(false);
    const [openAddParticipant, setOpenAddParticipant] = useState(false);
    const [openEditParticipant, setOpenEditParticipant] = useState(false);

    const handleClickOpenAddParticipant = () => {
        setOpenAddParticipant(true);

    }

    const handleCloseAddParticipant = () => {
        setOpenAddParticipant(false);
    }

    const handleSubmitAddParticipant = (e) => {
        e.preventDefault();

        
        // TODO:
    }
    const handleSubmitEditTopic = (e) => {
        e.preventDefault();

        // TODO:
    }

    const handleCloseEditParticipant = () => {
        setOpenEditParticipant(false);
    }

    const handleClickOpenEditParticipant = () => {
        setOpenEditParticipant(true);
    }

    
    const handleOpenRemove = (e) => {
        e.preventDefault();
        setOpenRemove(true)
    }

    const handleCloseRemove = e => {
        e.preventDefault()
        setOpenRemove(false);
    }
 
    const handleSubmitRemoveFromConsideration = (e) => {
        e.preventDefault();

        // TODO:
    }


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
        <>
            <div className='popup'>
                <Dialog onClose={handleCloseAddParticipant} open={openAddParticipant}>
                    <UserPopup type='Add' handleSubmit={handleSubmitAddParticipant} />
                </Dialog>
                <Dialog onClose={handleCloseEditParticipant} open={openEditParticipant}>
                    <UserPopup type='Edit' handleSubmit={handleSubmitEditTopic} />
                </Dialog>
                <Dialog onClose={handleCloseRemove} open={openRemove}>
                    <RemoveFromConsideration handleSubmit={handleSubmitRemoveFromConsideration} />
                </Dialog>
            </div>
            <div className="topic__section">
                <SearchBox text='Participants' />
                <SortParticipantsButtons />
                <ParticipantsList
                    handleClickSelected={handleClickSelected}
                    selected={selected}
                />
                <div className="section__buttons">
                    <button className='bordered__button section__button' 
                        onClick={handleClickOpenEditParticipant}
                    >   
                        Edit Participant
                    </button>
                    <button className='bordered__button section__button warning__button' 
                        onClick={handleOpenRemove}
                    >   
                        Remove Participant
                    </button>
                    <button className='bordered__button section__button' 
                        onClick={handleClickOpenAddParticipant}
                    >
                        Add Participant
                    </button>
                </div>
            </div>
        </>
    )
})

export default ParticipantsBox;