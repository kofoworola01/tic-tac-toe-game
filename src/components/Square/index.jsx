import React, { useState } from 'react'
import './index.css'

function Square(props) {
    const [ value, setValue ] = useState(null);
    const handleChange = () => {
        setValue('X')
    }
    return (
        <>
            <button className='square' onClick={handleChange}>
                {value}
            </button> 
        </>
    )
}

export default Square
