import React from 'react';
import QueryRow from './QueryRow';

const data = [
    { feedBack: 0, query: 'Topic Info', answer: "Answer of the query", timeFrame: '1:30pm-05:30pm', read: true },
    { feedBack: 0, query: 'Why Duck Fly? They should run', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 0, query: 'Why trees green', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
    { feedBack: 0, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '5:30pm-05:30pm', read: true },
    { feedBack: 1, query: 'Green Banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
    { feedBack: 1, query: 'Topic Info', answer: "Answer of the query", timeFrame: '3:30pm-05:30pm', read: true },
    { feedBack: 1, query: 'Why Duck Fly?', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 1, query: 'Why trees green', answer: "Answer of the query", timeFrame: '3:30pm-05:30pm', read: false },
    { feedBack: 1, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 0, query: 'Green Banana', answer: "Answer of the query", timeFrame: '4:30pm-05:30pm', read: false },
    { feedBack: 0, query: 'Topic Info', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 0, query: 'Why Duck Fly?', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 0, query: 'Why trees green', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
    { feedBack: 0, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 2, query: 'Green Banana', answer: "Answer of the query", timeFrame: '2:30pm-05:30pm', read: false },
    { feedBack: 2, query: 'Topic Info', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 2, query: 'Why Duck Fly?', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 0, query: 'Why trees green', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
    { feedBack: 0, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
    { feedBack: 0, query: 'Green Banana', answer: "Answer of the query", timeFrame: '2:30pm-05:30pm', read: false },
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

function getComparator(sortFeedBack, sortTime, sortQuery, orderBy) {
    if (orderBy === 'query') {
        return sortQuery === true
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    else if (orderBy === 'timeFrame') {
        return sortTime === true
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    else {
        return sortFeedBack === true
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
}

const QueryList = React.memo(props => {
    const { sortFeedBack, sortTime, sortQuery, orderBy } = props;

    return (
        <div className='topic__column'>
            {
                data.slice().sort(getComparator(sortFeedBack, sortTime, sortQuery, orderBy)).map((item, index) => (
                    <QueryRow
                        key={index}
                        query={item.query}
                        answer={item.answer}
                        timeFrame={item.timeFrame}
                        read={item.read}
                        feedBack={item.feedBack}
                    />
                ))
            }
        </div>
    )
});

export default QueryList;