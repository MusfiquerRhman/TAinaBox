import React from "react";

const Tabs = React.memo(props => {
    const { activeIndex, handleChange, tabs } = props;

    return (
        <div className="tab__container">
            {tabs.map((item) => (
                <button onClick={(e) => handleChange(e, item.index)}
                    className={`tab__button ${activeIndex === item.index ? 'active' : ''}`}
                    key={item.index}
                >
                    {item.name}
                </button>
            ))}
        </div>
    )
})

export default Tabs;