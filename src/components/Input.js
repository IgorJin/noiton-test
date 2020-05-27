<<<<<<< HEAD
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
=======
import React, {useState, Fragment} from 'react'
import './index.css'

const Input =({name, value, onChangeValidate, placeholder, error, half}) => {

    return(
        <div className={`${half ? half==1 ? 'half left' : 'half right' : '' } `}>
            <input 
            name={name} 
            value={value} 
            onChange={onChangeValidate} 
            id='' 
            type='text' 
            placeholder={placeholder}>     
            </input>

            {error && (<p className='error'>{error}</p>)} 
        </div>
    )
} 

export default Input
>>>>>>> f3a1e5569b90113d508c1c272f914ac369fbc887
