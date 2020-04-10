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
export default MessageInfo