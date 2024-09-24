"use client";   

import Title from "../ui/components/Title";
import { useRef, useEffect, CSSProperties, useState } from "react";
import { ProgressBar } from "../ui/components/ProgressBar.component";

export default function ProgressBars() {
    const [completed, setCompleted] = useState(0);
    const [status, setStatus] = useState({
        ui: 55,
        ux: 75,
        data: 90,
    });

    const inputStyle: CSSProperties = {
        width: '50px',
        border: 'none',
        outline: 'none',
        textAlign: 'center',
        borderBottom: '1px solid lightgray',
    };

    const uiInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        uiInput.current?.focus();
        const intervalId = setInterval(() => {
            setCompleted(Math.floor(Math.random() * 100 + 1));
        }, 1500);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const projectData = [
        { bgColor: '#7633f9', completed: status.ui },
        { bgColor: '#28a745', completed: status.ux },
        { bgColor: '#dc3545', completed: status.data },
    ];

    return (
        <div className="container container-sm m-auto text-center">
            <Title text={"Progress Bars"} />
            <h2>Project Status:</h2>
            <ul>
                <li>
                    UI Status: <input type='number' ref={uiInput} style={inputStyle} value={status.ui} onChange={(e) => setStatus({ ...status, ui: Number(e.target.value) })} />
                </li>
                <li>
                    UX Status: <input type='number' style={inputStyle} value={status.ux} onChange={(e) => setStatus({ ...status, ux: Number(e.target.value) })} />
                </li>
                <li>
                    Data Status: <input type='number' style={inputStyle} value={status.data} onChange={(e) => setStatus({ ...status, data: Number(e.target.value) })} />
                </li>
            </ul>
            {/* Bars */}
            {projectData.map((project, index) => (
                <ProgressBar key={index} bgColor={project.bgColor} completed={project.completed} />
            ))}
            {/* Randomized Bar */}
            <ProgressBar bgColor={completed > 50 ? '#dc3545' : '#7633f9' } completed={completed} />
        </div>
    );
}