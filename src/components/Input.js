import React from 'react'
import './index.css'

const Input =({name, value, onChangeValidate, placeholder, error, half, onBlur}) => {

    return(
        <div className={`${half ? half===1 ? 'half left' : 'half right' : '' } `}>
            <input 
            name={name} 
            value={value} 
            onChange={(e) => onChangeValidate(name, e.target.value)} 
            onBlur={e => onBlur(name, e.target.value)}
            id='' 
            type='text' 
            placeholder={placeholder}>     
            </input>

            {error && (<p className='error'>{error}</p>)} 
        </div>
    )
} 

export default Input
