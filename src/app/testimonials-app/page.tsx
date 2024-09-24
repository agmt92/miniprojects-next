"use client";

import React, { useState, useEffect } from 'react'
import Title from '../ui/components/Title'
import Button from '../ui/components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<string | undefined>(undefined)
    const [items, setItems] = useState<any[]>([])
    useEffect(() => {
        if (testimonials) {
            fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
                .then((response) => response.json())
                .then((json) => setItems(json));
        }
    }, [testimonials]);
    return (
        <div className='container text-center'>
            <Title text={'Testimonials App'} />
            <Button 
                text={"Posts"} 
                btnClass={"btn-info "}
                icon={<BsFillFileEarmarkPostFill className='mr-1'/>}
                onClick={() => setTestimonials('Posts')}
            />
            <Button 
                text={"User"} 
                btnClass={"btn-info"}
                icon={<FaUserAlt className='mr-1'/>}
                onClick={() => setTestimonials('Users')}
            />
            <Button 
                text={"Comments"} 
                btnClass={"btn-info"}
                icon={<BiCommentDetail className='mr-1' />}
                onClick={() => setTestimonials('Comments')}
            />
            <Title 
                classes='subtitle text-primary'
                text={!testimonials ? 'Select from Above' : testimonials} 
            />
            {items.length === 0 ? null : items.map((item: any) => {
                return (
                    <div className="card card-primary mb-2" key={item.id}>{item.name && <h2 className='card-header'>{item.name}</h2>}
                        <div className="card-body">
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                        { item.email && (
                            <small className='card-footer'>
                                {item.email}
                            </small>
                        )}
                    </div>
                )
            })}
        </div>
    )
}