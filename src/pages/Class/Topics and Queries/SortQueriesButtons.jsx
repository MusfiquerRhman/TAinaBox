import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SortIcon from '@mui/icons-material/Sort';
import React, { useState } from "react";

const SortQueriesButtons = React.memo(props => {
    const { sortFeedBack, sortTime, sortQuery, handleClickFeedBack, handleClickQuery, handleClickTime} = props;

    let feedBackIcon = <SortIcon />
    if(sortFeedBack === true) {
        feedBackIcon = <KeyboardArrowUpIcon />
    }
    else if(sortFeedBack === false) {
        feedBackIcon = <KeyboardArrowDownIcon />
    }

    let timeIcon = <SortIcon />
    if(sortTime === true) {
        timeIcon = <KeyboardArrowUpIcon />
    }
    else if(sortTime === false) {
        timeIcon = <KeyboardArrowDownIcon />
    }

    let queryIcon = <SortIcon />
    if(sortQuery === true) {
        queryIcon = <KeyboardArrowUpIcon />
    }
    else if(sortQuery === false) {
        queryIcon = <KeyboardArrowDownIcon />
    }

    return (
        <div className='sort__container'>
            <button className='sort__button' onClick={handleClickFeedBack}>
                <p className='sort__label'>Feedback</p>
                <div className='sort__button-icons'>
                    {feedBackIcon}
                </div>
            </button>
            <button className='sort__button' onClick={handleClickQuery}>
                <p className='sort__label'>Query</p>
                <div className='sort__button-icons'>
                    {queryIcon}
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

export default SortQueriesButtons;