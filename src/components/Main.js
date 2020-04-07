import React, {useState} from 'react'
import Input from './Input'
import './index.css'

// const validateEmail = (email) => {

// } 
// const names = [
//     'emailFrom',
//     'nameFrom',
//     'emailTo',
//     'nameTo',
//     'title',
//     'text',
// ]

const Main = () => {
    const [emailFrom, setEmailFrom] = useState('')
    const [nameFrom, setNameFrom] = useState('')
    const [emailTo, setEmailTo] = useState('')
    const [nameTo, setNameTo] = useState('')
    const [title, setTitle] = useState('')
    const [text, seText] = useState('')

    const [emailFromError, setEmailFromError] = useState('')
    const [nameFromError, setNameFromError] = useState('')
    const [emailToError, setEmailToError] = useState('')
    const [nameToError, setNameToError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [textError, seTextError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //validate()
        //const elem = e.target
        //const value = elem.value
        if (emailFrom === '')  setEmailFromError('имейл Не может быть пустым!')
        if (nameFrom === '')  setNameFromError('кому Не может быть пустым!')
        if (emailTo === '')  setEmailToError('имейл кому Не может быть пустым!')
        if (nameTo === '')  setNameToError('для кого Не может быть пустым!')
        if (title === '')  setTitleError('заголовок Не может быть пустым!')
        if (text === '')  seTextError('текст Не может быть пустым!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Отправлялка сообщений</h1>
            <div className='block'>
                <label htmlFor='name'>От кого</label>
                <Input name='nameFrom' value={nameFrom} onChangeValidate={(e)=>setNameFrom(e.target.value)} placeholder='Имя' error={nameFromError} half='1' />
                <Input name='emailFrom' value={emailFrom} onChangeValidate={(e)=>setEmailFrom(e.target.value)} placeholder='Email' error={emailFromError} half='2' />
            </div>
            <div className='block'>
                <label htmlFor='name'>Кому</label>
                <Input name='nameTo' value={nameTo} onChangeValidate={(e)=>setNameTo(e.target.value)} placeholder='Имя' error={nameToError} half='1' />
                <Input name='emailTo' value={emailTo} onChangeValidate={(e)=>setEmailTo(e.target.value)} placeholder='Email' error={emailToError} half='2' />
            </div>
            <div className='block'>
                <label htmlFor='title'>Тема письма</label>
                <Input name='title' value={title} onChangeValidate={(e)=>setTitle(e.target.value)} placeholder='Заголовок' error={titleError} />
            </div>
            <div className='block'>
                <label htmlFor='text'>Сообщение</label>
                <textarea name='text' value={text} onChange={(e)=>seText(e.target.value)}></textarea>
                {textError && (<p className='error'>{textError}</p>)} 
            </div>
            <div className='block'>
                <span className ='add-file' >Прикрепить файл</span>
            </div>
            <div className='block'>
                <button type='submit'>Отправить</button>
            </div>
            

        </form>
    )
}
export default Main