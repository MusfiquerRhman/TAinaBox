import React, { useCallback, useState } from "react";
import Tabs from "../../components/UI Elements/Tabs";
import Filters from "./Filters";
import Table from "./Table";

const Users = () => {
    const [selectedComponent, setSelectedComponent] = useState(0);

    const handleChangeSelectComponent = useCallback((e, componentIndex) => {
        e.preventDefault();
        setSelectedComponent(componentIndex);
    }, []);

    const tabs = [
        { name: 'All', index: 0 },
        { name: 'Admin', index: 1 },
        { name: 'Faculty', index: 2 },
        { name: 'Students', index: 3 },
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
                    <button className="bordered__button">Crawl For new User</button>
                </div>
                <div className="user__table">
                    <Table />
                </div>
            </section>
        </div>
    )
}

export default Users;