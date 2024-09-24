"use client";

import React, { useState, useEffect} from 'react'
import Button from './Button'

interface AlertProps {
    type: string;
    message: string;
    delay: boolean;
}

export default function Alert({type, message, delay}: AlertProps) {

    const [showAlert, setShowAlert] = useState<boolean>(true)
    const closeAlert = (e : React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        const alertElement = button.parentElement?.parentElement;
        if (alertElement) {
            alertElement.classList.add("fadeAlert");
            setTimeout(() => {
                setShowAlert(false);
            }, 400);
        }
    }
    useEffect(() => {
        delay &&
        setTimeout(() => {
           setShowAlert(false);
       }, 5000);})

  return (
    showAlert && <div className={`alert alert-${type}`}>
        <div className="alert-close">
            <span className="mr-1">{message}</span>
            <Button btnClass='btn-close' text='X' onClick={closeAlert} />
        </div>
    </div>
  )
}
