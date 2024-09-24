import { CSSProperties } from "react";

interface ProgressBarProps {
    bgColor: string;
    completed: number;
}

export const ProgressBar = ({ bgColor, completed }: ProgressBarProps) => {
    const containerStyle: CSSProperties = {
        height: '25px',
        backgroundColor: '#e0e0e0',
        borderRadius: '50px',
        margin: '50px',
    };
    const fillerStyle: CSSProperties = {
        backgroundColor: bgColor,
        height: '100%',
        width: `${completed}%`,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    };
    const labelStyle: CSSProperties = {
        padding: '15px',
        margin: '10px',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}>
                <span style={labelStyle}>{`${completed}%`}</span>
            </div>
        </div>
    );
};