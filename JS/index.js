
const express = require('express');

const app = express();

const {readFile} =  require('fs').promises;

app.get ('/', async (request, response) => {
response.send(await readFile('./index.html', 'utf8') );

})
app.listen(process.env.PORT || 3000, () => console.log('app available on port http://localhost:3000')) 
// app.use(express.static('/sass/main.css' + '/public/'));
// app.get('/', (request, response) => {
//     readFile('index.html', 'utf8', (err, html) => {
//        if(err){
//            response.status(500).send('sorry, out of order');
//        }

//         response.send(html);
//     }) 
// })

// app.listen(process.env.PORT || 3000, () => console.log('app available on port http://localhost:3000')) 


// const {readFile} =  require('fs')

// async function hello(){
// const file = await readFile('./JS/hello.txt', 'utf8');  

//  }

// const myModule = require('./my-module.js');
// console.log(myModule);

// const {readFile, readFileSync} = require('fs');

// readFile('./JS/hello.txt', 'utf8', (err,txt)=> {
//     console.log(txt);    
// });

// console.log('do this ASAP');

// const { EventEmitter } = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('yum');
// })

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');