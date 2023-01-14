import React, { useCallback, useState } from "react";
import SearchBox from '../../../components/UI Elements/SearchBox';
import QueryList from "./QueryList";
import SortQueriesButtons from "./SortQueriesButtons";

const QueryBox = React.memo(props => {
    const [sortFeedBack, setSortFeedBack] = useState(null);
    const [sortQuery, setSortQuery] = useState(null);
    const [sortTime, setSortTime] = useState(null);
    const [orderBy, setOrderBy] = useState('timeFrame');

    const handleClickFeedBack = useCallback(() => {
        setSortFeedBack(currentState => currentState === true ? false : true);
        setOrderBy('feedBack');
    }, []);

    const handleClickTime = useCallback(() => {
        setSortTime(currentState => currentState === true ? false : true);
        setOrderBy('timeFrame');
    }, []);

    const handleClickQuery = useCallback(() => {
        setSortQuery(currentState => currentState === true ? false : true);
        setOrderBy('query');
    }, []);
    
    return (
        <div className="topic__section">
        <SearchBox text='Queries'/>
        <SortQueriesButtons 
            sortFeedBack={sortFeedBack}
            sortTime={sortTime}
            sortQuery={sortQuery}
            handleClickFeedBack={handleClickFeedBack}
            handleClickQuery={handleClickQuery}
            handleClickTime={handleClickTime}
        />
        <QueryList 
            sortFeedBack={sortFeedBack}
            sortTime={sortTime}
            sortQuery={sortQuery}
            orderBy={orderBy}
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