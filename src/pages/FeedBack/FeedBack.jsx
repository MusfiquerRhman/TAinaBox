import React, { useCallback, useState } from "react";
import Tabs from "../../components/UI Elements/Tabs";
import Filters from "./Filters";
import Table from "./Table";

const FeedBack = () => {
    const [selectedComponent, setSelectedComponent] = useState(0);

    const handleChangeSelectComponent = useCallback((e, componentIndex) => {
        e.preventDefault();
        setSelectedComponent(componentIndex);
    }, []);

    const tabs = [
        { name: 'Current', index: 0 },
        { name: 'Historical', index: 1 },
    ]

    return (
        <div className="class__container">
            <Filters />
            <section className="user__container">
                <div className="user__table--filters">
                    <div className="user__tabs">
                        <Tabs activeIndex={selectedComponent}
                            handleChange={handleChangeSelectComponent}
                            tabs={tabs}
                        />
                    </div>
                </div>
                <div className="user__table">
                    <Table />
                </div>
            </section>
        </div>
    )
}

export default FeedBack;