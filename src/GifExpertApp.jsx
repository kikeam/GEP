import React, { useState } from 'react'
import { AddCategorie } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorie setCategories={setCategories}/>
            <hr />
            <ul>
                {categories.map(category=>(<GifGrid key={category} category={category} />))}
            </ul>
         
        </>
    )
}
