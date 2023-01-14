import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SortIcon from '@mui/icons-material/Sort';
import React, { useState } from "react";

const SortTopicsButtons = React.memo(props => {
    const { sortTopic, sortTime, handleClickTopic, handleClickTime} = props;

    let topicIcon = <SortIcon />
    if(sortTopic === true) {
        topicIcon = <KeyboardArrowUpIcon />
    }
    else if(sortTopic === false) {
        topicIcon = <KeyboardArrowDownIcon />
    }

    let timeIcon = <SortIcon />
    if(sortTime === true) {
        timeIcon = <KeyboardArrowUpIcon />
    }
    else if(sortTime === false) {
        timeIcon = <KeyboardArrowDownIcon />
    }

    return (
        <div className='sort__container'>
            <button className='sort__button' onClick={handleClickTopic}>
                <p className='sort__label'>Topic</p>
                <div className='sort__button-icons'>
                    {topicIcon}
                </div>
            </button>
            <button className='sort__button' onClick={handleClickTime}>
                <p className='sort__label'>Time</p>
                <div className='sort__button-icons'>
                    {timeIcon}
                </div>
            </button>
        </div>
    )
})

export default SortTopicsButtons;