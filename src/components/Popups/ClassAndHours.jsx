import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';

const initialState = {
    days: new Array(7).fill(false),
    startTime: '2018-01-01T00:00:00.000Z',
    endTime: '2018-01-01T00:00:00.000Z',
    name: ''
}

const ClassAndHours = React.memo(() => {
    const { enqueueSnackbar } = useSnackbar();
    const [numberOfSets, setNumberOfSets] = useState(1);
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const [schedules, setSchedules] = useState([JSON.parse(JSON.stringify(initialState))])

    const handleChangeDayClick = (e, index, i) => {
        e.preventDefault();
        setSchedules(currentSchedule => {
            let newSchedule = currentSchedule.slice();
            newSchedule[i].days[index] = !newSchedule[i].days[index];
            return newSchedule;
        })
    }

    const addMoreSection = () => {
        if (schedules[numberOfSets - 1].days.indexOf(true) === -1) {
            enqueueSnackbar("You must select at least 1 day of the week", { variant: 'error' });
        } else {
            setNumberOfSets(currentCount => {
                if (currentCount + 1 > 10) {
                    enqueueSnackbar("You can add at most 10 Schedules at a time, please confirm current schedules first", { variant: 'error' });
                    return currentCount;
                }
                else {
                    return currentCount + 1;
                }
            });
            setSchedules(currentSchedule => {
                let newSchedules = currentSchedule.slice();
                newSchedules.push(JSON.parse(JSON.stringify(initialState)));
                return newSchedules;
            })
        }
    }

    const changeStartTime = (value, index) => {
        setSchedules(currentSchedule => {
            let newSchedule = currentSchedule.slice();
            newSchedule[index].startTime = value;
            return newSchedule;
        })
    }

    const changeEndTime = (value, index) => {
        setSchedules(currentSchedule => {
            let newSchedule = currentSchedule.slice();
            newSchedule[index].endTime = value;
            return newSchedule;
        })
    }

    const changeName = (e, index) => {
        e.preventDefault();
        setSchedules(currentSchedule => {
            let newSchedule = currentSchedule.slice();
            newSchedule[index].name = e.target.value;
            return newSchedule;
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        console.log(schedules)
    }, [schedules])

    return (
        <div className='popup__container'>
            <h1 className='title-secondary'>Class and Hours</h1>
            <p className='popup__helper'>Please input class location and hours</p>

            <form onSubmit={handleSubmit}>
                {[...Array(numberOfSets)].map((_, i) => (
                    <div className='schedule__container' key={i}>
                        <p className='popup__helper'>Schedule: {i + 1}</p>
                        <div className='popup__days'>
                            {days.map((item, index) => (
                                <button className={`popup__days-button ${schedules[i].days[index] === true ? 'active__button' : ''}`}
                                    key={index}
                                    onClick={(e) => handleChangeDayClick(e, index, i)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <div className='popup__input-container'>
                            <p>Start Time</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopTimePicker
                                    value={schedules[i].startTime}
                                    onChange={(newValue) => {
                                        changeStartTime(newValue, i);
                                    }}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            variant='standard'
                                            fullWidth
                                            required
                                            sx={{ borderBottom: '2px solid var(--color-green--medium)' }}
                                        />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='popup__input-container'>
                            <p>End Time</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopTimePicker
                                    value={schedules[i].endTime}
                                    onChange={(newValue) => {
                                        changeEndTime(newValue, i);
                                    }}
                                    fullWidth
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            variant='standard'
                                            fullWidth
                                            required
                                            sx={{ borderBottom: '2px solid var(--color-green--medium)' }}
                                        />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='popup__input-container'>
                            <label htmlFor='class'>Class</label>
                            <input required className='popup__input' type='text' placeholder='Class' id='class' value={schedules[i].name} onChange={(e) => changeName(e, i)} />
                        </div>
                    </div>
                ))}

                <div className='popup__button-container'>
                    <button className='round__button' onClick={addMoreSection}><AddIcon className='round__button-icon' /></button>
                    <button type='submit' className='popup__button bordered__button'>Confirm Schedule</button>
                    <button className='popup__button bordered__button warning__button'>Nevermind</button>
                </div>
            </form>
        </div>
    )
})

export default ClassAndHours;