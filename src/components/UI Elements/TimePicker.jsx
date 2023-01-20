import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from "react";

const TimePicker = React.memo(props => {
    const { time, handleChange, i } = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
                value={time}
                onChange={(newValue) => {
                    handleChange(newValue, i);
                }}
                fullWidth
                renderInput={(params) =>
                    <TextField {...params}
                        variant='standard'
                        fullWidth
                        required
                        sx={{ 
                            borderBottom: '2px solid var(--color-green--medium)',
                        }}
                    />
                }
            />
        </LocalizationProvider>
    )
})

export default TimePicker;