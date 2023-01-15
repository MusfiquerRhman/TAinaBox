import React, { useContext } from 'react';
import { TopicContext } from '../../../contexts/TopicContext';
import { descendingComparator } from '../../helperFunctions';
import TopicRow from './TopicRow';

export function getComparator(sortTopic, sortTime, orderBy) {
    if (orderBy === 'name') {
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
    const { handleClickSelected, selected } = props;
    const { topicState } = useContext(TopicContext);

    return (
        <div className='topic__column'>
            {
                topicState.topicData
                    .sort(getComparator(topicState.sortTopic, topicState.sortTopicTime, topicState.orderByTopic))
                    .map((item, index) => (
                        <TopicRow
                            key={index}
                            info={item.name}
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