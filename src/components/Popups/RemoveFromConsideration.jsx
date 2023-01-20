import React from "react";

const RemoveFromConsideration = React.memo(props => {
    const { handleSubmit } = props;
    return (
        <div className='popup__container remove__container'>
            <h1 className='title-secondary'>Are you sure you want to remove from consideration</h1>
            <p className="semibold__text margin__top">This Process is irreversible</p>

            <div className="header__actions">
                <button onClick={handleSubmit} className='bordered__button section__button warning__button'>Remove From Consideration</button>
            </div>
        </div>
    )
})

export default RemoveFromConsideration;