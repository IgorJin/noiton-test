const Sendsay = require('sendsay-api');
let nextMessage = 0;

const sendsay = new Sendsay({ 
    auth: {
      login: 'i.zubenko2012@yandex.ru', 
      sublogin: 'x_1586096152941782', 
      password: 'ne4Beruch',  
    } 
});

sendsay.request({ 
    "action": "track.get",
    "id": 23     , 
    "session": "session" 
  }).then(function(res) {
      console.log(res)
  })

console.log(sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
    console.log(res.list);
  }))


export const changeField = ( name, text ) => (dispatch) => {
dispatch({
    type: 'CHANGE_FIELD',
    name,
    text
})
}

export const validateForm = (bool) =>  (dispatch) => {
dispatch({
    type: 'VALIDATE_FORM',
    bool
})
}


export const clearForm = () => (dispatch) => {
    dispatch({
        type: 'CLEAR_FORM',
    })
}

export const setError = (name, error) => (dispatch) => {
dispatch({
    type: 'SET_ERROR',
    name,
    error
})
}

export const sendMessage = (message) => (dispatch) => {
    sendsay.request({
        "action": "issue.send.test",
        "letter": {
            "subject": message.title.value ,//"Тема письма",
            "from.name": message.nameFrom.value,//"igor Z",
            "from.email": message.emailFrom.value,//"i.zubenko2012@yandex.ru",
            "to.name": message.nameTo.value,//"Имя получателя",
            "message": { "text": message.text.value }, //"текстовая версия письма" },
            "attaches": [
                {
                    "name": "имя файла",
                    "content": "содержимое файла закодированное base64",
                    "encoding": "base64",
                }
            ]           
        },
        "sendwhen": "test",
        "mca": [
            message.emailTo.value, //"i.zubenko2013@gmail.com",
        ]
    }).then(function (res) {
        sendsay.request({ 
            "action": "track.get",
            "id": res['track.id'] , 
            "session": "session" 
          }).then(function(res) {
              console.log(res)
            dispatch({
                type: 'SEND_MESSAGE',
                id: nextMessage++,
                subject: message.title.value,
                date: res.obj.dt,
                status: res.obj.status
            })
          })
    })
}

// sendsay.request({
//   "action" : "issue.emailsender.set" 

//   ,"obj" : {

//              "name" : "i.zubenko2012@yandex.ru" 

//             ,"label" : "igor Z" 

//            }

// }).then(function(res) {
//   console.log(res);
// })

// sendsay.request({

//   "action" : "issue.emailsender.list" 

// }).then(function(res) {
//   console.log(res);
// })

