<<<<<<< HEAD
import React from 'react'
import Input from './Input'
import { connect } from 'react-redux'
import { changeField, validateForm, setError, sendMessage, clearForm } from '../actions'
import './index.css'

const Main = ({ setError, validateForm, changeField, stateForm, sendMessage, clearForm, onSelectFileClick, children, dragClass, fileName, item_drop, removeFile }) => {

    const validateInput = (name, value) => {
        return  (value === '') ? name+ ' не может быть пустым' : ''
    }
    const validateEmail = (name, value) => {
        return  (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
                 ? ' Некорректный ' + name :
                  ''
    }

    const validation = (name, value) =>{
        let err='';
        err = validateInput(name, value)
        if ((name.indexOf('email') !== -1) && err==='') err = validateEmail(name, value)
        setError(name, err)
        return err === ''? 1 : 0
    }

    const handleSubmit = (e) => {
        let valid_arr = []
        let isValidate = false
        e.preventDefault()
        Object.keys(stateForm.fields).map(field =>(
            valid_arr.push(validation(field, stateForm.fields[field].value))
        ))
        if (!valid_arr.includes(0)) isValidate = true
        validateForm(isValidate)
        if (isValidate) {
            sendMessage(stateForm.fields);
            clearForm()
        } 
    }

    const onChangeValidate = (name, value) => {
        changeField(name, value)
        setError(name, validateInput(name, value))
    } 

    return (
        <form onSubmit={handleSubmit}>
            <div className={dragClass}>
                <div className='file-upload_block'>
                    <div>
                        <h2>Бросайте файлы сюда, я ловлю</h2>
                        <p>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</p>
                    </div>
                </div>
            </div>
            <h1>Отправлялка сообщений</h1>
            <div className='block'>
                <label htmlFor='name'>От кого</label>
                <Input onBlur={validation} name='nameFrom' value={stateForm.fields['nameFrom'].value} onChangeValidate={onChangeValidate} placeholder='Имя' error={stateForm.fields['nameFrom'].error} half='1' />
                <Input onBlur={validation} name='emailFrom' value={stateForm.fields['emailFrom'].value} onChangeValidate={onChangeValidate} placeholder='Email' error={stateForm.fields['emailFrom'].error} half='2' />
            </div>
            <div className='block'>
                <label htmlFor='name'>Кому</label>
                <Input onBlur={validation} name='nameTo' value={stateForm.fields['nameTo'].value} onChangeValidate={onChangeValidate} placeholder='Имя' error={stateForm.fields['nameTo'].error} half='1' />
                <Input onBlur={validation} name='emailTo' value={stateForm.fields['emailTo'].value} onChangeValidate={onChangeValidate} placeholder='Email' error={stateForm.fields['emailTo'].error} half='2' />
            </div>
            <div className='block'>
                <label htmlFor='title'>Тема письма</label>
                <Input name='title' onBlur={validation} value={stateForm.fields['title'].value} onChangeValidate={onChangeValidate} placeholder='Заголовок' error={stateForm.fields['title'].error} />
            </div>
            <div className='block'>
                <label htmlFor='text'>Сообщение</label>
                <textarea name='text' value={stateForm.fields['text'].value} onChange={(e) => onChangeValidate('text', e.target.value)}></textarea>
                {stateForm.fields['text'].error && (<p className='error'>{stateForm.fields['text'].error}</p>)} 
            </div>
            <div className='block'>
                {item_drop && <div className ='file-card'> <div className='file-card-name'>{fileName}</div>  <div className='file-card-delete' onClick={removeFile}>Удалить</div></div>}
                <span onClick={onSelectFileClick} className ='add-file' >Прикрепить файл</span>
            </div>
            {children}
            <div className='block'>
                <button type='submit'>Отправить</button>
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    stateForm: state.formReducer,
    stateTable: state.tableReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        validateForm: (isValidate) => {
            dispatch(validateForm(isValidate))
        },
        changeField: (name, value) => {
            dispatch(changeField(name, value))
        },
        setError: (name, err) => {
            dispatch(setError(name, err))
        },
        sendMessage: (message) => {
            dispatch(sendMessage(message))
        },
        clearForm: () =>{
            dispatch(clearForm())
        }
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Main)
=======
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
>>>>>>> f3a1e5569b90113d508c1c272f914ac369fbc887
