import React from 'react';

const DropDown = React.memo(props => {
    return (
        <div className='analytics__input--container'>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                value={props.value}
                className='analytics__input--dropdown'
                id={props.name}
                name={props.name}
                onChange={props.onChange}
            >
                {props.options.map((item, index) => (
                    <option key={index} value={item.value}>{item.text}</option>
                ))}
            </ select>
        </div>

    )
})

export default DropDown;