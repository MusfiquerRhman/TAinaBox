import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import TopicIcon from '@mui/icons-material/Topic';
import React, { useEffect, useState } from "react";

const QueryRow = React.memo(props => {
    const {query, answer, timeFrame, read, handleClickSelected, selected} = props;
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(currentState => !currentState);
        handleClickSelected(query);
    }

    useEffect(() => {
        if(selected !== query){
            setIsSelected(false);
        }
    }, [query, selected])

    return (
        <div className={`topic__row ${isSelected && 'selected'}`} onClick={handleClick}>
            <TopicIcon className='topic__icon'/>
            <div className='topic__detail'>
                <div className='topic__title'>
                    <h4 className='topic__title-text'>{query}</h4>
                    <p>{timeFrame}</p>
                </div>
                <div className='topic__title'>
                    <p> 
                        {answer}
                    </p>
                    <div className='topic__title'>
                        {read && 
                            <MarkUnreadChatAltIcon className='unread__dot'/>
                        }
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </div>
    )
})


export default QueryRow;