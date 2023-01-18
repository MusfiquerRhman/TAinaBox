import React, { useContext, useState } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

const ClassAndHours = React.memo(props => {
    const { profileState } = useContext(ProfileContext);
    const [numberOfSets, setNumberOfSets] = useState(1);
    const [selectedDays, setSelectedDays] = useState([]);
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    return (
        <div className='schedule__container'>
            <h1 className='title-secondary'>Class and Hours</h1>
            <p>Please input class location and hours</p>
            <div>
                <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
            </div>
        </div>
    )
}) 

export default ClassAndHours;