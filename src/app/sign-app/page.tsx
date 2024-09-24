"use client";

import React, { useState, useEffect } from 'react';
import Title from '../ui/components/Title';

export default function EsignatureApp() {
    const [name, setName] = useState<string | undefined>('');
    const [date, setDate] = useState<string | undefined>('Your Date of Birth');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const inputStyle = {
        border: 'none',
        borderBottom: '1px solid #333',
        outline: 'none',
        padding: '.35rem 0',
    };

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.backgroundColor = '#eee';
        }
    }, []);

    return (
        <div className='container text-center'>
            <Title text={name} classes='title' />
            <Title text={date} classes='main-title mb-4' />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde, odio cumque assumenda quas
                praesentium quo adipisci reprehenderit. Explicabo reprehenderit sed repellat possimus molestiae minus
                consequatur dolorum rerum aliquam dolorem.
            </p>
            <footer
                className='d-flex'
                style={{
                    justifyContent: 'space-around',
                    position: 'relative',
                    top: '30vh',
                }}>
                <input type='date' value={date} style={inputStyle} onChange={handleDateChange} />
                <input type='text' value={name} style={inputStyle} onChange={handleNameChange} />
            </footer>
        </div>
    );
}
