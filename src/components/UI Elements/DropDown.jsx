import React from 'react';

const DropDown = React.memo(props => {
    const { title, selectMethod, handleChange } = props;
    return (
        < select name={title} id="cars" onChange={handleChange} value={selectMethod}>
            <option value={0}>Per Day</option>
            <option value={1}>Per Month</option>
            <option value={2}>Per Year</option>
        </ select>
    )
})

export default DropDown;