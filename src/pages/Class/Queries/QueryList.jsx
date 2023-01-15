import React, { useContext } from 'react';
import { QueryContext } from '../../../contexts/QueryContext';
import { descendingComparator } from '../../helperFunctions';
import QueryRow from './QueryRow';

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
    const { handleClickSelected, selected } = props;
    const { queryState } = useContext(QueryContext);

    return (
        <div className='topic__column'>
            {
                queryState.queryData.slice()
                    .sort(getComparator(queryState.sortFeedBack, queryState.sortQueryTime, queryState.sortQuery, queryState.orderByQuery))
                    .map((item, index) => (
                        <QueryRow
                            key={index}
                            query={item.query}
                            answer={item.answer}
                            timeFrame={item.timeFrame}
                            read={item.read}
                            feedBack={item.feedBack}
                            handleClickSelected={handleClickSelected}
                            selected={selected}
                        />
                    ))
            }
        </div>
    )
});

export default QueryList;