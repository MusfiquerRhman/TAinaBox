import React from "react";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AnalyticsCard = React.memo(props => {
    const {value, text, percent, ratio} = props;
    return (
        <div className="analytic__card">
            <p className="analytic__card-value">
                {ratio === true ? value :numberWithCommas(value) }
                {percent === true && '%'}
            </p>
            <p className="analytic__card-text">{text}</p>
        </div>
    )
})

export default AnalyticsCard;