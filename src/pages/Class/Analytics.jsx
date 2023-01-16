import React, { useEffect, useState } from 'react';
import DatePicker from '../../components/UI Elements/DatePicker';
import DropDown from '../../components/UI Elements/DropDown';
import Filers from './Analytics/Filters';
import LineChart from './Analytics/LineChart';

const Analytics = () => {
    let date = new Date();
    let today = date.toISOString().split("T")[0];
    let yesterDay = new Date(date.setDate(date.getDate() - 1)).toISOString().split("T")[0]

    const [selectMethod, setSelectMethod] = useState(1);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(yesterDay);
    
    const handleChange = (event) => {
        setSelectMethod(event.target.value);
    };

    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const handleChangeEndDate = (event) => {
        setEndDate(event.target.value);
    }

    useEffect(() => {
        console.log(startDate)
    }, [startDate])

    return (
        <section className='topic__container'>
            <Filers />
            {/* <LineChart /> */}
        </section>
    )
}

export default Analytics;