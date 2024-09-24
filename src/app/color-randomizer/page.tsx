"use client";

import React from 'react'
import Title from '../ui/components/Title';

export default function ColorRandomizer() {
    const handleClick = () => {
        console.log('clicked')
        let body = document.querySelector('body');
        if (body) {
            body.style.backgroundColor = getRandomColor();
        } else {
            console.error('Body element not found');
        }
    };
    const getRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor;
    };
    return (
        <div className='container m-auto text-center'>
            <Title text='Color Randomizer' classes='title text-center' />
            <button onClick={handleClick} className='btn btn-primary'>Randomize</button>
            <button onClick={handleClick} className='btn btn-secondary'>Reset?</button>
            <button onClick={handleClick} className='btn btn-danger'>change</button>
            <button onClick={handleClick} className='btn btn-warning'>danger</button>
            <button onClick={handleClick} className='btn btn-success'>maybe</button>
        </div>
    )
}