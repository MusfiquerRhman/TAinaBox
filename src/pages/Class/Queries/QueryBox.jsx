import Dialog from '@mui/material/Dialog';
import React, { useCallback, useContext, useState } from "react";
import RemoveFromConsideration from '../../../components/Popups/RemoveFromConsideration';
import TopicPopup from "../../../components/Popups/TopicPopup";
import SearchBox from '../../../components/UI Elements/SearchBox';
import { QueryContext } from "../../../contexts/QueryContext";
import QueryList from "./QueryList";
import SortQueriesButtons from "./SortQueriesButtons";

const QueryBox = React.memo(() => {
    const [selected, setSelected] = useState('');
    const { queryDispatch, queryActionType } = useContext(QueryContext);

    const [openAddQuery, setOpenAddQuery] = useState(false);
    const [openEditQuery, setOpenEditQuery] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);

    const handleClickOpenAddQuery = () => {
        setOpenAddQuery(true);

    }

    const handleCloseAddQuery = () => {
        setOpenAddQuery(false);
    }

    const handleSubmitAddQuery = (e) => {
        e.preventDefault();

         // TODO:
    }

    const handleSubmitEditQuery = (e) => {
        e.preventDefault();

        // TODO:
    }

    const handleCloseEditQuery = () => {
        setOpenEditQuery(false);
    }

    const handleClickOpenEditQuery = () => {
        setOpenEditQuery(true);
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
        queryDispatch({
            type: queryActionType.SELECT_QUERY,
            payload: {
                value: id
            }
        })
    }, [queryActionType.SELECT_QUERY, queryDispatch]);

    return (
        <>
            <div className='popup'>
                <Dialog onClose={handleCloseAddQuery} open={openAddQuery}>
                    <TopicPopup section='Query' type='Add' handleSubmit={handleSubmitAddQuery} />
                </Dialog>
                <Dialog onClose={handleCloseEditQuery} open={openEditQuery}>
                    <TopicPopup section='Query' type='Edit' handleSubmit={handleSubmitEditQuery} />
                </Dialog>
                <Dialog onClose={handleCloseRemove} open={openRemove}>
                    <RemoveFromConsideration handleSubmit={handleSubmitRemoveFromConsideration} />
                </Dialog>
            </div>
            <div className="topic__section">
                <SearchBox text='Queries' />
                <SortQueriesButtons />
                <QueryList
                    handleClickSelected={handleClickSelected}
                    selected={selected}
                />
                <div className="section__buttons">
                    <button className='bordered__button section__button' onClick={handleClickOpenEditQuery}>Edit Query</button>
                    <button className='bordered__button section__button warning__button' onClick={handleOpenRemove}>Remove From Consideration</button>
                    <button className='bordered__button section__button' onClick={handleClickOpenAddQuery}>Add Query</button>
                </div>
            </div>
        </>
    )
})

export default QueryBox;