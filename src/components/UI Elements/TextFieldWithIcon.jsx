import React from "react";

const TextFieldWithIcon = React.memo((props) => {
    const {text, Icon, type, value, onChange} = props;
    return (
        <div className="input__box">
            <div className="input__icon-container">
                <Icon className="input__icon"
                    sx={{color: '#ffffff'}} 
                />
            </div>
            <input className="input__field" 
                type={type} 
                placeholder={text} 
                value={value} 
                onChange={onChange}
            />
        </div>    
    )
})

export default TextFieldWithIcon;