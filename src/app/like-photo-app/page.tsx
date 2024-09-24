"use client";

import React, { useState } from 'react'
import Title from '../ui/components/Title';
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import Image from 'next/image';

export default function LikePhoto() {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if (!like) {
            setLike(true); 
            setCount(count + 1);
        } else {
            setLike(false);
        }
    }

    return (
        <div className='container text-center'>
            <Title text='Like Photo App' />
            <Title classes='subsitite' text={`Likes: ${count}`} />
            <div 
                className='card card-dark m-auto'
                style={{ width: 300}}
            >
                <div className="card-header fs-xl">
                    <AiFillSmile className='mr-2' />
                    <small>Dog</small>
                </div>
                <Image
                    src='/image/scooby.jpeg'
                    width={300}
                    height={300}
                    alt='img'
                    style={{ height: "fit-content" }}
                />
                <div className="card-footer fs-xl d-flex"
                    style={{
                        justifyContent: 'space-between'
                    }}
                >
                    <AiOutlineComment />
                    {like ? <AiFillHeart onClick={handleClick} className='text-danger' style={{cursor: 'pointer' }} /> : <AiOutlineHeart onClick={handleClick} style={{cursor: 'pointer' }}  />}
                </div>
            </div>
        </div>
    )
}