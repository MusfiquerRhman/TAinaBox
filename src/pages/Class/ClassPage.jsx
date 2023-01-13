import React, { useCallback, useState } from 'react';
import Header from '../../components/Header/Header';
import Tabs from '../../components/UI Elements/Tabs';

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
                <Tabs activeIndex={selectedComponent} handleChange={handleChangeSelectComponent}/>
            </section>
        </>
    )
}

export default ClassPage