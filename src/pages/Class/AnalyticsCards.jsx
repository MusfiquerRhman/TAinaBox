import React from "react";
import AnalyticsCard from "../../components/UI Elements/AnalyticsCard";

const AnalyticsCards = React.memo(props => {
    return (
        <div className="analytics__cards">
            <AnalyticsCard value={12356} text={'inquiries today'}/>
            <AnalyticsCard value={12476} text={'inquiries this month'}/>
            <AnalyticsCard value={14376} text={'inquiries this year'}/>
            <AnalyticsCard value={24753} text={'inquiries overall'}/>
        </div>
    )
})

export default AnalyticsCards;