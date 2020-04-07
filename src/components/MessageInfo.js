import React from 'react'
import './index.css'

const MessageInfo = () => {
    return (
        <div className='info'>
             <h1 >Отправленные сообщения</h1>
             <div className='not_send'>Сообщения ещё не отправлялись</div>
             <table>
                 <thead>
                     <tr>
                        <th colSpan='1' >Дата</th>
                        <th colSpan='5'>Тема</th>
                        <th colSpan='1'>Статус</th>
                     </tr>
                 </thead>
                 <tbody>
                    <tr>
                        <td colSpan='1'>30 сентября</td>
                        <td colSpan='5'><div>Тема письма, которая не поместится в эту строку, потому ч...</div></td>
                        <td colSpan='1'>Отправлено</td>
                    </tr>
                 </tbody>
             </table>

        </div>
    )
}
export default MessageInfo