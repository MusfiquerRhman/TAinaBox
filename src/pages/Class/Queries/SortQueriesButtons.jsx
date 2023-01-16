import React, { useContext } from "react";
import SortButton from '../../../components/UI Elements/SortButton';
import { QueryContext } from "../../../contexts/QueryContext";

const SortQueriesButtons = React.memo(() => {
    const { queryState, queryDispatch, queryActionType } = useContext(QueryContext);

    const handleClickFeedBack = (e) => {
        e.preventDefault();
        queryDispatch({
            type: queryActionType.SORT_ORDER,
            payload: {
                name: 'sortFeedBack',
                orderBy: 'feedBack'
            }
        })
    };

    const handleClickTime = (e) => {
        e.preventDefault();
        queryDispatch({
            type: queryActionType.SORT_ORDER,
            payload: {
                name: 'sortQueryTime',
                orderBy: 'timeFrame'
            }
        })
    };

    const handleClickQuery = (e) => {
        e.preventDefault();
        queryDispatch({
            type: queryActionType.SORT_ORDER,
            payload: {
                name: 'sortQuery',
                orderBy: 'query'
            }
        })
    };

    let buttons = [
        {name: 'Feedback', state: queryState.sortFeedBack, handleClick: handleClickFeedBack},
        {name: 'Query', state: queryState.sortQuery, handleClick: handleClickQuery},
        {name: 'Time', state: queryState.sortQueryTime, handleClick: handleClickTime},
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

export default SortQueriesButtons;