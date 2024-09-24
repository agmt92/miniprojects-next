"use client";

import { useEffect, useState } from 'react';
import Blog from './Blog';
import { ThemeContext, Themes } from './context/theme-context';

export default function DarkMode() {
    const [theme, setTheme] = useState(Themes.light);

    const toggleTheme = () => {
        theme === Themes.light ? setTheme(Themes.dark) : setTheme(Themes.light);
    };

    useEffect(() => {
        let docBody = document.body;
        switch (theme) {
            case Themes.light:
                docBody.classList.remove('bg-dark');
                docBody.classList.remove('text-light');
                docBody.classList.add('bg-light');
                docBody.classList.add('text-dark');
                break;
            case Themes.dark:
                docBody.classList.remove('bg-light');
                docBody.classList.remove('text-dark');
                docBody.classList.add('bg-dark');
                docBody.classList.add('text-light');
                break;
            default:
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Blog />
        </ThemeContext.Provider>
    );
}