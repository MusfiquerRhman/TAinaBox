import React from 'react';

const DropDown = React.memo(props => {
    return (
        <div className='analytics__input--container'>
            <label htmlFor={props.name}>{props.name}</label>
            <select {...props}
                className='analytics__input--dropdown'
                id={props.name}
            >
                <option value={0}>Per Day</option>
                <option value={1}>Per Month</option>
                <option value={2}>Per Year</option>
            </ select>
        </div>

    )
})

export default DropDown;