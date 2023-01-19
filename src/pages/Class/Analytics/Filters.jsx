import React, { useContext } from "react";
import DatePicker from "../../../components/UI Elements/DatePicker";
import DropDown from "../../../components/UI Elements/DropDown";
import { AnalyticsContext } from "../../../contexts/AnalyticsContext";


const Filers = React.memo(() => {
    const {analyticsState, analyticsDispatch, analyticsActionType} = useContext(AnalyticsContext)

    const handleChange = (event) => {
        analyticsDispatch({
            type: analyticsActionType.CHANGE_VALUE,
            payload: {
                value: event.target.value,
                name: event.target.name
            }
        })
    };

    const options = [
        {value: 0, text: 'Per Day'},
        {value: 1, text: 'Per Month'},
        {value: 2, text: 'Per Year'},
    ]

    return (
        <div className='analytics__control'>
            <DatePicker
                name={'startDate'}
                min={'2000-01-01'}
                max={analyticsState.today}
                value={analyticsState.startDate}
                onChange={handleChange}
            />
            <DatePicker
                name={'endDate'}
                min={'2000-01-01'}
                max={analyticsState.today}
                value={analyticsState.endDate}
                onChange={handleChange}
            />
            <DropDown
                title={'Data Group'}
                value={analyticsState.selectMethod}
                onChange={handleChange}
                name={'selectMethod'}
                options={options}
            />
        </div>
    )
});

export default Filers;