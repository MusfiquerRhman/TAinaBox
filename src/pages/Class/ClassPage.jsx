import React, { useCallback, useState } from 'react';
import Header from '../../components/Header/Header';
import Tabs from '../../components/UI Elements/Tabs';
import Analytics from './Analytics';
import Participant from './Participant';
import Topic from './Topic';

const ClassPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(0);

    const handleChangeSelectComponent = useCallback((e, componentIndex) => {
        e.preventDefault();
        setSelectedComponent(componentIndex);
    }, []);

    return (
        <>
            <Header />
            <section className='class__container'>
                <Tabs activeIndex={selectedComponent} 
                    handleChange={handleChangeSelectComponent}
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