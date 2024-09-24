"use client";

import Button from '../ui/components/Button';
import Popup from '../ui/components/Popup.component';
import Title from '../ui/components/Title';
import { useState, useEffect } from 'react'

export default function PopUp() {
    const [trigger, setTrigger] = useState(false);
    const [timeTrigger, setTimeTrigger] = useState(false);
    const [timeTriggerWarning, setTimeTriggerWarning] = useState(false);

    const triggerPopup = () => {
        setTrigger(true);
    }

    useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true);
    }, 3000);
    setTimeout(() => {
      setTimeTriggerWarning(true);
    }, 8000);
  }, []);

    return (
        <div className='text-center'>
            <Title text={"Click for popup, or wait 3 seconds"} />
            <Button btnClass={"btn-primary"} text={'Click Me!'} onClick={triggerPopup} />
            <Popup
                type={"alert-info"}
                title={"Triggered Popup"}
                text={"This popup was triggered by a button"}
                handleClose={setTrigger}
                trigger={trigger}
            />{" "}
            <Popup
                type={"alert-danger"}
                title={"Time triggered Popup"}
                text={"This popup was triggered by a delay"}
                handleClose={setTimeTrigger}
                trigger={timeTrigger}
            />{" "}
            <Popup
                type={"alert-warning"}
                title={"Time triggered Popup"}
                text={"This popup was triggered by a delay"}
                handleClose={setTimeTriggerWarning}
                trigger={timeTriggerWarning}
            />
        </div>
    )
}