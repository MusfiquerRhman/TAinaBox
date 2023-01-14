import React, { useCallback, useState } from "react";
import SearchBox from '../../../components/UI Elements/SearchBox';
import SortTopicsButtons from "./SortTopicsButtons";
import TopicList from "./TopicList";

const TopicBox = React.memo(props => {
    const [sortTopic, setSortTopic] = useState(null);
    const [sortTime, setSortTime] = useState(null);
    const [orderBy, setOrderBy] = useState('timeFrame');
    const [selected, setSelected] = useState('');

    const handleClickTopic = useCallback(() => {
        setSortTopic(currentState => !currentState);
        setOrderBy('info');
    }, []);

    const handleClickTime = useCallback(() => {
        setSortTime(currentState => !currentState);
        setOrderBy('timeFrame');
    }, []);

    const handleClickSelected = useCallback((id) => {
        setSelected(id);
    }, [])

    return (
        <div className="topic__section">
            <SearchBox text='topics'/>
            <SortTopicsButtons 
                sortTopic={sortTopic}
                sortTime={sortTime}
                handleClickTopic={handleClickTopic}
                handleClickTime={handleClickTime}
            />
            <TopicList 
                sortTopic={sortTopic}
                sortTime={sortTime}
                orderBy={orderBy}
                handleClickSelected={handleClickSelected}
                selected={selected}
            />
            <div className="section__buttons">
                <button className='bordered__button section__button'>Edit Topic</button>
                <button className='bordered__button section__button warning__button'>Remove From Consideration</button>
                <button className='bordered__button section__button'>Add Topic</button>
            </div>
        </div>
    )
})

export default TopicBox;