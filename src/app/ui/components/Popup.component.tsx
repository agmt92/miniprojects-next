"use client";

import { CSSProperties } from "react"
import Button from "./Button"


export default function Popup({title, text, type, handleClose, trigger}: {title: string, text: string, type: string, handleClose: any, trigger: boolean}) {
    const popupContainer: CSSProperties = {
        position: 'absolute',
        top: '0',
        height: '100vh',
        width: '100vw',
        background: 'rgba(0, 0, 0, 0.1)',
        zIndex: '-1',
    }

    const popupStyle: CSSProperties = {
        position: 'relative',
        margin: '40vh  auto',
        zIndex  : '1',
    }



  return (
    trigger && (
        <div style={popupContainer}>
          <div className={`${type} text-left`} style={popupStyle}>
            <div className="alert-close ">
              <div className="d-flex flex-column ">
                <h4 className="mb-1 ">{title && title}</h4>
                <p>{text && text}</p>
              </div>
              <Button
                btnClass={"btn-close"}
                text={"x"}
                onClick={() => handleClose(false)}
              />
            </div>
          </div>
        </div>
      )
  )
}
