import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategorie = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Add a categorie');
    const handleChange=(e) => {
      setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (inputValue){
            setCategories((cats)=>[inputValue,...cats])
            setInputValue('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange}/>
            
        </form>
    )
    
}

AddCategorie.propTypes={
    setCategories: PropTypes.func.isRequired
}
