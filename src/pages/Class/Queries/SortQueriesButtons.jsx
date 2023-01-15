import React, { useContext } from "react";
import SortButton from '../../../components/UI Elements/SortButton';
import { QueryContext } from "../../../contexts/QueryContext";

const SortQueriesButtons = React.memo(() => {
    const { queryState, dispatch, ACTION_TYPE } = useContext(QueryContext);

    const handleClickFeedBack = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPE.SORT_ORDER,
            payload: {
                name: 'sortFeedBack',
                orderBy: 'orderByQuery',
                order: 'feedBack'
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

    const handleClickQuery = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPE.SORT_ORDER,
            payload: {
                name: 'sortQuery',
                orderBy: 'orderByQuery',
                order: 'query'
            }
        })
    };

    let buttons = [
        {name: 'Feedback', state: queryState.sortFeedBack, handleClick: handleClickFeedBack},
        {name: 'Query', state: queryState.sortQueryTime, handleClick: handleClickQuery},
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