import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";

const PasswordField = React.memo((props) => {
    const {value, onChange} = props;

    const [isVisible, setIsVisible] = useState(false);
    const [type, setType] = useState('password')

    const handleVisibilityChange = () => {
        setIsVisible(currentState => currentState === true ? false : true);
        setType(currentType => currentType === 'text' ? 'password' : 'text');
    }

    return (
        <div className="input__box">
            <div className="input__icon-container">
                <KeyIcon sx={{color: '#ffffff'}} className="input__icon"/>
            </div>
            <input className="input__field" 
                type={type} 
                placeholder='Password' 
                value={value} 
                onChange={onChange}
            />
            <button className="icon-button input__icon-container" 
                onClick={handleVisibilityChange}
            >
                {isVisible ? (
                    <VisibilityOffIcon 
                        sx={{color: '#ffffff', cursor: 'pointer'}} 
                    />
                ) : (
                    <VisibilityIcon 
                        sx={{color: '#ffffff', cursor: 'pointer'}} 
                    />
                )}
            </button>
        </div>    
    )
})

export default PasswordField;