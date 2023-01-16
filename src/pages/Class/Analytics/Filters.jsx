import React, { useState } from "react";
import DatePicker from "../../../components/UI Elements/DatePicker";
import DropDown from "../../../components/UI Elements/DropDown";

const Filers = React.memo(props => {
    let date = new Date();
    let today = date.toISOString().split("T")[0];
    let yesterDay = new Date(date.setDate(date.getDate() - 1)).toISOString().split("T")[0]

    const [selectMethod, setSelectMethod] = useState(1);
    const [startDate, setStartDate] = useState(yesterDay);
    const [endDate, setEndDate] = useState(today);

    const handleChange = (event) => {
        setSelectMethod(event.target.value);
    };

    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const handleChangeEndDate = (event) => {
        setEndDate(event.target.value);
    }

    return (
        <div className='analytics__control'>
            <DropDown
                title={'Data Group'}
                selectMethod={selectMethod}
                handleChange={handleChange}
                name={'Data Group'}
            />
            <DatePicker
                name={'Start Date'}
                min={'2000-01-01'}
                max={yesterDay}
                value={startDate}
                onChange={handleChangeStartDate}
            />
            <DatePicker
                name={'End Date'}
                min={'2000-01-01'}
                max={today}
                value={endDate}
                onChange={handleChangeEndDate}
            />
        </div>
    )
});

export default Filers;