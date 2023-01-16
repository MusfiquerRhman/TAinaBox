import React from 'react';

const DatePicker = React.memo(props => {
    return (
        <div className='analytics__input--container'>
            <label htmlFor='date'>{props.name}</label>
            <input id='date' className='analytics__input--date'
                type="date" 
                {...props}
            />
        </div>
    )
})

export default DatePicker