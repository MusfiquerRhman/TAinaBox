import React from 'react';
import TopicRow from './TopicRow';

const data = [
    {info: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '1:30pm-05:30pm', read: true},
    {info: 'Why Duck Fly? They should run', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Why trees green', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
    {info: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '5:30pm-05:30pm', read: true},
    {info: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
    {info: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '3:30pm-05:30pm', read: true},
    {info: 'Why Duck Fly?', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Why trees green', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '3:30pm-05:30pm', read: false},
    {info: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '4:30pm-05:30pm', read: false},
    {info: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Why Duck Fly?', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Why trees green', details: {inquired: 100, positive: 0, negative: 100}, timeFrame: '12:30pm-05:30pm', read: false},
    {info: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '2:30pm-05:30pm', read: false},
    {info: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Why Duck Fly?', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Why trees green', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
    {info: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm', read: true},
    {info: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '2:30pm-05:30pm', read: false},
]

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(sortTopic, sortTime, orderBy) {
    if(orderBy === 'info') {
        return sortTopic === true
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    else {
        return sortTime === true
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
}

const TopicList = React.memo(props => {
    const { sortTopic, sortTime, orderBy, handleClickSelected, selected } = props;

    return (
        <div className='topic__column'>
            {
                data.slice().sort(getComparator(sortTopic, sortTime, orderBy)).map((item, index) => (
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

export default TopicList;