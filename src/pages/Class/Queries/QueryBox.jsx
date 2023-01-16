import React, { useCallback, useContext, useState } from "react";
import SearchBox from '../../../components/UI Elements/SearchBox';
import { QueryContext } from "../../../contexts/QueryContext";
import QueryList from "./QueryList";
import SortQueriesButtons from "./SortQueriesButtons";

const QueryBox = React.memo(() => {
    const [selected, setSelected] = useState('');
    const { queryDispatch, queryActionType } = useContext(QueryContext);

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
        <div className="topic__section">
            <SearchBox text='Queries' />
            <SortQueriesButtons />
            <QueryList
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

export default QueryBox;