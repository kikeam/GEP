import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category)
    
    return (
        <>
            <h3>{category}</h3>
            {loading&&<p>loading...</p>}
            <div className='card-container'>
                {data.map(({id, url, title})=>(
                    <GifGridItem key={id} url={url} title={title} />
                ))}
            </div>

        </>
    )
}
