import React from 'react';

const DropDown = React.memo(props => {
    return (
        <div className='analytics__input--container'>
            <label htmlFor={props.name}>{props.title}</label>
            <select {...props}
                className='analytics__input--dropdown'
                id={props.name}
            >
                {props.options.map((item, index) => (
                    <option key={index} value={item.value}>{item.text}</option>
                ))}
            </ select>
        </div>

    )
})

export default DropDown;