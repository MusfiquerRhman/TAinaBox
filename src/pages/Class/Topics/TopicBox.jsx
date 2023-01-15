import React, { useCallback, useContext, useState } from "react";
import SearchBox from '../../../components/UI Elements/SearchBox';
import { TopicContext } from "../../../contexts/TopicContext";
import SortTopicsButtons from "./SortTopicsButtons";
import TopicList from "./TopicList";

const TopicBox = React.memo(() => {
    const [selected, setSelected] = useState('');
    const {dispatch, ACTION_TYPE} = useContext(TopicContext);
    
    const handleClickSelected = useCallback((id) => {
        setSelected(id);
        dispatch({
            type: ACTION_TYPE.SELECT_TOPIC,
            payload: {
                value: id
            }
        })
    }, [ACTION_TYPE.SELECT_TOPIC, dispatch])

    return (
        <div className="topic__section">
            <SearchBox text='topics'/>
            <SortTopicsButtons />
            <TopicList
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