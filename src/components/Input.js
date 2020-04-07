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