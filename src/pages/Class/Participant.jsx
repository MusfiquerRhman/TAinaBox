import React, { useCallback, useState } from 'react';
import AnalyticsCards from "./AnalyticsCards";
import QueryBox from './Topics and Queries/QueryBox';
import Questions from './Topics and Queries/Questions';
import RelatedTopics from './Topics and Queries/ReletedTopics';
import TopicBox from './Topics and Queries/TopicBox';


const Participant = React.memo(props => {
    const [selected, setSelected] = useState('');

    const handleClickSelected = useCallback((id) => {
        setSelected(id);
    }, []);
    
    return (
        <section className='topic__container'>
            <h1 className='title-secondary'>Students and  Faculty list</h1>
            <AnalyticsCards />
            <div className='topic__topics'>
                <div className='topic__topics--list'>
                    <TopicBox />
                    <QueryBox />
                    <Questions />
                </div>
            </div>
            <div className='related__section'>
                <div className="topic__section">
                    <h2 className='title-tertiary margin-left'>Related Queries</h2>
                    <RelatedTopics 
                        handleClickSelected={handleClickSelected} 
                        selected={selected}
                    />
                </div>
            </div>
        </section>
    )
})

export default Participant;