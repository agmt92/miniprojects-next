"use client";

import { useState, useEffect, CSSProperties, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function HiddenSearch() {
    let body = document.body.style;

    const [uiProps, setUiProps] = useState({
        bgColor: 'purple',
        shadow: '',
        transition: 'all .3s ease',
        opacity: 0,
        showSearchIcon: true,
        showSearchBar: false,
        borderBottomColor: '#fff'
    });

    let bsSearchStyle: CSSProperties = {
        color: '#fff',
        fontSize: '50px',
        position: 'absolute',
        top: 120,
        right: 75
    };

    let inputStyle: CSSProperties = {
        margin: '10vh 25vw',
        width: '20vh',
        height: '30px',
        padding: '1rem .3rem',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        borderBottom: uiProps.borderBottomColor,
        fontSize: '1.5rem',
        color: '#eee',
        boxShadow: '0px 55px 60px -15px rgba(0, 0, 0, 0.75)',
        opacity: uiProps.opacity,
        transition: 'all .3s ease'
    };

    const inputElement = useRef<HTMLInputElement>(null);

    useEffect(() => {
        body.background = uiProps.bgColor;
        body.boxShadow = uiProps.shadow;
        body.transition = uiProps.transition;
        if (uiProps.showSearchBar && inputElement.current) {
            inputElement.current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uiProps]);

    const showSearch = () => {
        setUiProps(prevState => ({
            ...prevState,
            opacity: 1,
            showSearchIcon: false,
            showSearchBar: true
        }));
    };

    const handleSearchFocus = () => {
        setUiProps(prevState => ({
            ...prevState,
            shadow: 'inset 0 -60vh 30vh 200px rgba(0, 0, 0, 0.8)',
            borderBottomColor: 'green'
        }));
    };

    const handleSearchBlur = () => {
        setUiProps(prevState => ({
            ...prevState,
            shadow: 'none',
            opacity: 0,
            borderBottomColor: '#fff',
            showSearchIcon: true
        }));
    };

    return (
        <div className='container' style={{ height: '100vh' }}>
            {uiProps.showSearchIcon ? (
                <BsSearch style={bsSearchStyle} onClick={showSearch} />
            ) : (
                <input
                    type='text'
                    className='search'
                    placeholder='Search...'
                    style={inputStyle}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    ref={inputElement}
                />
            )}
        </div>
    );
}