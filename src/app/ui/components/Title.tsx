import React from 'react'

export default function Title({ classes, text }: { text: string | undefined
    classes?: string | undefined
 }) {
  return (
    <h1 className={!classes? 'title text-center' : classes}>{!text ? "Your Name" : text}</h1>
  )
}
