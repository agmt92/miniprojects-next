"use client";

import React from 'react';

interface ButtonProps {
  text: string;
  btnClass: string;
  icon?: React.ReactElement;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties; 
}

export default function Button({ text = "Click Me", btnClass, icon, onClick, style }: ButtonProps) {

  return (
    <button className={`btn ${btnClass}`} onClick={onClick} style={style}>
        {icon}
        {text}
    </button>
  );
}