<<<<<<< HEAD
const Sendsay = require('sendsay-api');

export default function() {
var sendsay = new Sendsay({ 
  auth: {
    login: 'i.zubenko2012@yandex.ru', 
    sublogin: 'x_1586096152941782', 
    password: 'ne4Beruch',  
  } 
});

console.log(sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
  console.log(res.list);
}))

let track = 0;

// console.log(sendsay.request({ 
//   "action" : "issue.send.test",
//     "letter" : {
//       "subject" : "Тема письма",
//       "from.name" : "igor Z" ,
//       "from.email" : "i.zubenko2012@yandex.ru",
//       "to.name" : "Имя получателя",
//       "message": { "text" : "текстовая версия письма" },
//       "attaches": [ 
//                     {
//                       "name" : "имя файла",
//                       "content": "содержимое файла закодированное base64",
//                       "encoding" : "base64",
//                     }
//                   ]
//     },
//     "sendwhen": "test",
//     "mca": [
//       "i.zubenko2013@gmail.com",
//     ]
// }).then(function(res) {
//   console.log(res);
//   console.log(res['track.id'] + ' track');
// }))

sendsay.request({ 
  "action": "track.get",
  "id": 8 , 
  "session": "session" 
}).then(function(res) {
  console.log(res.obj);
})

// sendsay.request({
//   "action" : "issue.emailsender.set" 

//   ,"obj" : {

//              "name" : "i.zubenko2012@yandex.ru" 

//             ,"label" : "igor Z" 

//            }

// }).then(function(res) {
//   console.log(res);
// })

sendsay.request({

  "action" : "issue.emailsender.list" 

}).then(function(res) {
  console.log(res);
})

=======
const Sendsay = require('sendsay-api');

export default function() {
var sendsay = new Sendsay({ 
  auth: {
    login: 'i.zubenko2012@yandex.ru', 
    sublogin: 'x_1586096152941782', 
    password: 'ne4Beruch',  
  } 
});

console.log(sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
  console.log(res.list);
}))

// console.log(sendsay.request({ 
//   "action" : "issue.send.test",
//     "letter" : {
//       "subject" : "Тема письма",
//       "from.name" : "Имя отправителя" ,
//       "from.email" : "i.zubenko2012@yandex.ru",
//       "to.name" : "Имя получателя",
//       "message": { "text" : "текстовая версия письма" },
//       "attaches": [ 
//                     {
//                       "name" : "имя файла",
//                       "content": "содержимое файла закодированное base64",
//                       "encoding" : "base64",
//                     }
//                   ]
//     },
//     "sendwhen": "test",
//     "mca": [
//       "i.zubenko2013@gmail.com",
//     ]
// }).then(function(res) {
//   console.log(res);
//   console.log(res['track.id'] + ' track');
// }))


console.log(sendsay.request({ 
  "action": "track.get",
  "id": "1", 
  "session": "session" 
}).then(function(res) {
  console.log(res.obj.status + ' status');
}))

console.log(sendsay.request({ 
  "action": "track.get",
  "id": "2", 
  "session": "session" 
}).then(function(res) {
  console.log(res.obj.status + ' status');
}))
console.log(sendsay.request({ 
  "action": "track.get",
  "id": "3", 
  "session": "session" 
}).then(function(res) {
  console.log(res.obj.status + ' status');
}))

>>>>>>> f3a1e5569b90113d508c1c272f914ac369fbc887
}