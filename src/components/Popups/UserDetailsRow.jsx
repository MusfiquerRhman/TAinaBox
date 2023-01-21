import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TopicIcon from '@mui/icons-material/Topic';
import React, { useEffect, useState } from "react";

const UserDetailsRow = React.memo(props => {
    const { name, type, role, id, handleClickSelected, selected } = props;
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(currentState => !currentState);
        handleClickSelected(name);
    }

    useEffect(() => {
        if (selected !== name) {
            setIsSelected(false);
        }
    }, [name, selected])

    return (
        <div className={`topic__row ${isSelected && 'selected'}`} onClick={handleClick}>
            <TopicIcon className='topic__icon' />
            <div className='topic__detail'>
                <div className='topic__title'>
                    <h4 className='topic__title-text'>{name}</h4>
                </div>
                <div className='topic__title'>
                    <p>
                        {type}, {role}, {id}
                    </p>
                    <div className='topic__title'>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default UserDetailsRow;