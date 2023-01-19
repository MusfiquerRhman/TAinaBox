import React, { useCallback, useContext, useEffect, useState } from 'react';
import { QueryContext } from '../../../contexts/QueryContext';
import { TopicContext } from '../../../contexts/TopicContext';
import AnalyticsCards from "../AnalyticsCards";
import QueryBox from '../Queries/QueryBox';
import Questions from '../Questions/Questions';
import RelatedTopics from './RelatedTopics';
import TopicBox from './TopicBox';

const Topic = React.memo(() => {
    const [selectedRelatedTopic, setSelectedRelatedTopic] = useState('');
    const [selectRelatedQuery, setSelectRelatedQuery] = useState('');
    const { topicState } = useContext(TopicContext);
    const { queryState } = useContext(QueryContext);


    const handleClickSelectedRelatedTopic = useCallback((id) => {
        setSelectedRelatedTopic(id);
    }, []);

    const handleClickSelectedRelatedQuery = useCallback((id) => {
        setSelectRelatedQuery(id);
    }, []);

    useEffect(() => {
        console.log(topicState.selectedTopic.length)
    }, [topicState])


    return (
        <section className='topic__container'>
            <h1 className='title-secondary'>Topics</h1>
            <AnalyticsCards />
            <div className='topic__topics'>
                <TopicBox />
                {
                    topicState.selectedTopic.length > 0 && (
                        <QueryBox />
                    )
                }
                {
                    topicState.selectedTopic.length > 0 && queryState.selectedQuery.length > 0 && (
                        <Questions />
                    )
                }
            </div>
            <div className='related__section'>
                <div className="topic__section">
                    <h2 className='title-tertiary margin-left'>Related Topics</h2>
                    <RelatedTopics
                        handleClickSelected={handleClickSelectedRelatedTopic}
                        selected={selectedRelatedTopic}
                    />
                </div>
                <div className="topic__section">
                    <h2 className='title-tertiary margin-left'>Related Queries</h2>
                    <RelatedTopics
                        handleClickSelected={handleClickSelectedRelatedQuery}
                        selected={selectRelatedQuery}
                    />
                </div>
            </div>
        </section>
    )
});

export default Topic;