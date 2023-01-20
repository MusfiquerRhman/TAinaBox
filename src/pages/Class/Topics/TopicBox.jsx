import Dialog from '@mui/material/Dialog';
import React, { useCallback, useContext, useState } from "react";
import TopicPopup from "../../../components/Popups/TopicPopup";
import SearchBox from '../../../components/UI Elements/SearchBox';
import { TopicContext } from "../../../contexts/TopicContext";
import SortTopicsButtons from "./SortTopicsButtons";
import TopicList from "./TopicList";

const TopicBox = React.memo(() => {
    const [selected, setSelected] = useState('');
    const { topicDispatch, topicActionType } = useContext(TopicContext);

    const [openAddTopic, setOpenAddTopic] = useState(false);
    const [openEditTopic, setOpenEditTopic] = useState(false);

    const handleClickOpenAddTopic = () => {
        setOpenAddTopic(true);

    }

    const handleCloseAddTopic = () => {
        setOpenAddTopic(false);
    }

    const handleSubmitAddTopic = (e) => {
        e.preventDefault();

        
        // TODO:
    }

    const handleSubmitEditTopic = (e) => {
        e.preventDefault();

        // TODO:
    }

    const handleCloseEditTopic = () => {
        setOpenEditTopic(false);
    }

    const handleClickOpenEditTopic = () => {
        setOpenEditTopic(true);
    }


    const handleClickSelected = useCallback((id) => {
        setSelected(id);
        topicDispatch({
            type: topicActionType.SELECT_TOPIC,
            payload: {
                value: id
            }
        })
    }, [topicActionType.SELECT_TOPIC, topicDispatch])

    return (
        <>
            <div className='popup'>
                <Dialog onClose={handleCloseAddTopic} open={openAddTopic}>
                    <TopicPopup section='Topic' type='Add' handleSubmit={handleSubmitAddTopic} />
                </Dialog>
                <Dialog onClose={handleCloseEditTopic} open={openEditTopic}>
                    <TopicPopup section='Topic' type='Edit' handleSubmit={handleSubmitEditTopic} />
                </Dialog>
            </div>
            <div className="topic__section">
                <SearchBox text='topics' />
                <SortTopicsButtons />
                <TopicList
                    handleClickSelected={handleClickSelected}
                    selected={selected}
                />
                <div className="section__buttons">
                    <button className='bordered__button section__button' onClick={handleClickOpenEditTopic}>Edit Topic</button>
                    <button className='bordered__button section__button warning__button'>Remove From Consideration</button>
                    <button className='bordered__button section__button' onClick={handleClickOpenAddTopic}>Add Topic</button>
                </div>
            </div>
        </>
    )
})

export default TopicBox;