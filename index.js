const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
//require('.dotenv').config(); should be install dot env

const port=3000    //const port=process.env.USER_PORT;

const UserRoute=require('./routes/UserRoute');
const TransRoute=require('./routes/TransactionRoute');

/* app.get('/', function (req, res) {
    res.send('hello world')
  }) */


mongoose.connect(                       //if(then) database start app will start ornot show error
  "mongodb://localhost:27017/richcash",
  { useNewUrlParser:true}).then(() => {
    const bodyPaser = require('body-parser')
    const app = express()

    app.use(bodyPaser.json())
    app.use(bodyPaser.urlencoded({extends:true}))

    app.use('/user', UserRoute)
    app.use('/trans',TransRoute)

    app.use(cors())

    app.listen(port, () => {
      console.log(` Server Started..`)
    }) 

      });

     




  


  

  

