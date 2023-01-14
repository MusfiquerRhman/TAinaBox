import React from "react";
import TopicRow from "./TopicRow";

const data = [
    {info: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '1:30pm-05:30pm', read: true},
    {info: 'Why Duck Fly? They should run', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Why trees green', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
    {info: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '5:30pm-05:30pm', read: true},
    {info: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
    {info: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '3:30pm-05:30pm', read: true},
    {info: 'Why Duck Fly?', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true}
]

const RelatedTopics = React.memo(props => {
    const {handleClickSelected, selected} = props;

    return (
        <div className='topic__column'>
            {
                data.map((item, index) => (
                    <TopicRow 
                        key={index}
                        info={item.info} 
                        details={item.details} 
                        timeFrame={item.timeFrame}
                        read={item.read}
                        handleClickSelected={handleClickSelected}
                        selected={selected}
                    />
                ))
            }
        </div>
    )
})

export default RelatedTopics;