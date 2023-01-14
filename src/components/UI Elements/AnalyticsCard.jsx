import React from "react";

const AnalyticsCard = React.memo(props => {
    const {value, text} = props;
    return (
        <div className="analytic__card">
            <p className="analytic__card-value">{value}</p>
            <p className="analytic__card-text">{text}</p>
        </div>
    )
})

export default AnalyticsCard;