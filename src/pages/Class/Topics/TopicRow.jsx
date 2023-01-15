import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import TopicIcon from '@mui/icons-material/Topic';
import React, { useEffect, useState } from "react";

const TopicRow = React.memo(props => {
    const {info, details, timeFrame, read, handleClickSelected, selected} = props;
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(currentState => !currentState);
        handleClickSelected(info);
    }

    useEffect(() => {
        if(selected !== info){
            setIsSelected(false);
        }
    }, [info, selected])

    return (
        <div className={`topic__row ${isSelected && 'selected'}`} onClick={handleClick}>
            <TopicIcon className='topic__icon'/>
            <div className='topic__detail'>
                <div className='topic__title'>
                    <h4 className='topic__title-text'>{info}</h4>
                    <p>{timeFrame}</p>
                </div>
                <div className='topic__title'>
                    <p> 
                        {details.inquired} Inquired
                        {details.positive > 0 && 
                            <span className='topic__title-green'>
                                , ${details.positive} Positive
                            </span>
                        } 
                        {details.negative > 0 && 
                            <span className='topic__title-red'>
                                , ${details.negative} Negative
                            </span>
                        }
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

export default TopicRow;