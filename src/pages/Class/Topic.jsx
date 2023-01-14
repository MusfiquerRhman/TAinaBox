import React from 'react';
import AnalyticsCards from "./AnalyticsCards";

const Topic = React.memo(props => {
    return (
        <section className='topic__container'>
            <AnalyticsCards />
            <div className='topic__topics'>
                
            </div>
        </section>
    )
});

export default Topic;