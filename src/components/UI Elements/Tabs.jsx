import React from "react";

const Tabs = React.memo(props => {
    const {activeIndex, handleChange} = props;

    return (
        <div className="tab__container">
            <button onClick={(e) => handleChange(e, 0)} 
                className={`tab__button ${activeIndex === 0 ? 'active' : ''}`}
            >
                By Topic
            </button>
            <button onClick={(e) => handleChange(e, 1)} 
                className={`tab__button ${activeIndex === 1 ? 'active' : ''}`}
            >
                By Participant
            </button>
            <button onClick={(e) => handleChange(e, 2)} 
                className={`tab__button ${activeIndex === 2 ? 'active' : ''}`}
            >
                Analytics
            </button>
        </div>
    )
})

export default Tabs;