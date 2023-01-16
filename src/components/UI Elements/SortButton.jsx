import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SortIcon from '@mui/icons-material/Sort';
import React from 'react';

const SortButton = React.memo((props) => {
    const {name, state, handleClick} = props;

    let Icon;
    if(state === false) {
        Icon = <KeyboardArrowUpIcon />
    }
    else if(state === true) {
        Icon = <KeyboardArrowDownIcon />
    } 
    else {
        Icon = <SortIcon />
    }

    return (
        <button className='sort__button' onClick={handleClick}>
            <p className='sort__label'>{name}</p>
            <div className='sort__button-icons'>
                {Icon}
            </div>
        </button>
    )
});

export default SortButton;