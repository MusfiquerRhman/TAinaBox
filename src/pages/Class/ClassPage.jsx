import React, { useCallback, useState } from 'react';
import Header from '../../components/Header/Header';
import Tabs from '../../components/UI Elements/Tabs';
import Analytics from './Analytics/Analytics';
import Participant from './Participants/Participant';
import Topic from './Topics/Topic';

const ClassPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(0);

    const handleChangeSelectComponent = useCallback((e, componentIndex) => {
        e.preventDefault();
        setSelectedComponent(componentIndex);
    }, []);

    const tabs = [
        {name: 'By Topic', index: 0},
        {name: 'By Participant', index: 1},
        {name: 'Analytics', index: 2},
    ]

    return (
        <>
            <Header />
            <section className='class__container'>
                <Tabs activeIndex={selectedComponent} 
                    handleChange={handleChangeSelectComponent}
                    tabs={tabs}
                />
                {selectedComponent === 0 && (
                    <Topic />
                )}
                {selectedComponent === 1 && (
                    <Participant />
                )}
                {selectedComponent === 2 && (
                    <Analytics />
                )}
            </section>
        </>
    )
}

export default ClassPage