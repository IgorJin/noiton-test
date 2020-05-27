<<<<<<< HEAD
import React from 'react'
import './index.css'

const MessageInfo = ({data, isSend}) => {
    
    const error = (status) => {
        switch(true){
            case (status === -1):
                return 'успех';
            case (status < (-1)):
                return 'ошибка';
            case (status > (-1)):
                return 'в процессе';
            default:
                break; 
        }
    }
    
    return (
        <div className='info'>
            <h1 >Отправленные сообщения</h1>
            {isSend ?  
                (<table>
                    <thead>
                        <tr>
                           <th colSpan='1' >Дата</th>
                           <th colSpan='5'>Тема</th>
                           <th colSpan='1'>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                       {Object.keys(data).map((d, i) => (
                          <tr key={i}>
                           <td colSpan='1'>{data[d].date}</td>
                           <td colSpan='5'><div>{data[d].subject}</div></td>
                           <td colSpan='1'>{error(data[d].status)}</td>
                       </tr>
                       ))}
                    </tbody>
                </table>)
            :
            (<div className='not_send'>Сообщения ещё не отправлялись</div>)
            }
             

        </div>
    )
}
=======
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
>>>>>>> f3a1e5569b90113d508c1c272f914ac369fbc887
export default MessageInfo