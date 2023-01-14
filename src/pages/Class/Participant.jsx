import React from "react";
import AnalyticsCards from "./AnalyticsCards";

const Participant = React.memo(props => {
    return (
        <section className='topic__container'>
            <AnalyticsCards />
        </section>
    )
})

export default Participant;