// function add (a,b) {
// return a+ b ;
// }



// var add = function (a,b){
//     return a+b;
// }


// var add  = (a,b) => {return a+b};

// var add = (a,b)  =>a+b;


// var result = add(2,2);
// console.log(result);

// (function (){
//     console.log('Rushikesh');
    
// }());





// const add = function ( a , b , callback) {
//      var result = a +  b ;
//      console.log(result);
     
//     callback() ;
// }

// // add(2,3 , function(){
// //     console.log('operation completed');
    
// // });


// // add (2,3, () => console.log('add completed'));


// add(2,5, ()=> console.log('operation was completed'));



// var fs = require ('fs')
// var os = require ('os')

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('greeting.txt', " Hii " + user.username + '!\n', ()=>{console.log('file is created');
// })


// console.log(os);
// console.log(fs);

// const notes = require('./note');
// console.log('server file is available');


// var age = notes.age;
// console.log(age);


// var result = notes.addNumber (age,29);
// console.log(result);

// var _ = require('lodash');


// var data = ["Rushikesh", 2 , 3 , 2 , "Rushikesh"] ;

// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString('rushikesh'));


// const jsonString ='{"name":"rushikesh" , "age": 21 , "city": "kolhapur" }'
// const jsonObject = JSON.parse(jsonString) ;

// console.log(jsonObject.name);

// console.log(typeof(jsonString));


const express = require('express');
const app = express();
const db = require ('./db');

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const MenuItem = require('./models/MenuItem');

app.get('/', (req, res) => {
  res.send('Hey I am rushikesh')
})


// app.get('/Guns', (req, res) => {

//     var newGuns = {
//         varient : 'Automatic Rifles' ,
//         name : 'Ak-47 , m416',
//         is_army: true ,



//     }

//     res.send(newGuns)
//   })

//   app.post( '/maqsad', (req,res)=>{
    
//    res.send('Maqsad mat bhulna')
//   })



// import the personRouter file 
const personRoutes = require ('./routes/personRoutes');
app.use('/person', personRoutes);


// import the menuItems
const menuRoutes = require ('./routes/menuRoutes');
app.use('/menuItem', menuRoutes)

app.listen(3000, () => {
  console.log(`app listening on port ${3000}`)
} )
