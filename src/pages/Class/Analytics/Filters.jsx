import React, { useContext } from "react";
import DatePicker from "../../../components/UI Elements/DatePicker";
import DropDown from "../../../components/UI Elements/DropDown";
import { AnalyticsContext } from "../../../contexts/AnalyticsContext";


const Filers = React.memo(() => {
    const {analyticsState, analyticsDispatch, analyticsActionType} = useContext(AnalyticsContext)

    const handleChange = (event) => {
        analyticsDispatch({
            type: analyticsActionType.SELECT_DATA_GROUP,
            payload: {
                value: event.target.value
            }
        })
    };

    const handleChangeStartDate = (event) => {
        analyticsDispatch({
            type: analyticsActionType.SET_START_DATE,
            payload: {
                value: event.target.value
            }
        })
    }

    const handleChangeEndDate = (event) => {
        analyticsDispatch({
            type: analyticsActionType.SET_END_DATE,
            payload: {
                value: event.target.value
            }
        })
    }

    const options = [
        {value: 0, text: 'Per Day'},
        {value: 1, text: 'Per Month'},
        {value: 2, text: 'Per Year'},
    ]

    return (
        <div className='analytics__control'>
            <DatePicker
                name={'Start Date'}
                min={'2000-01-01'}
                max={analyticsState.today}
                value={analyticsState.startDate}
                onChange={handleChangeStartDate}
            />
            <DatePicker
                name={'End Date'}
                min={'2000-01-01'}
                max={analyticsState.today}
                value={analyticsState.endDate}
                onChange={handleChangeEndDate}
            />
            <DropDown
                title={'Data Group'}
                value={analyticsState.selectMethod}
                onChange={handleChange}
                name={'Data Group'}
                options={options}
            />
        </div>
    )
});

export default Filers;