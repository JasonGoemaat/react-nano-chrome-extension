import React, { useState } from 'react';
import Content from './Content';

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className="toggle">
            <button onClick={toggle}>Toggle</button>
        </div>
        <Content visible={isOpen}/>
        </>
    )
}