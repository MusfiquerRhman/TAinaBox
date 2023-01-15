import React from 'react';

const DatePicker = React.memo(props => {
    const {name, min, max, value, onChange} = props;
    return (
        <input type="date" 
            name={name}
            value={value}
            min={min} 
            max={max} 
            onChange={onChange}
        />
    )
})

export default DatePicker