import express from 'express';
import logger from 'morgan';
import Debug from 'debug';
import db from './db.js'
const PORT = 5000;
import mysql from 'mysql'



const app = express()


// logging all request to console using morgan
app.use(logger('dev'));

// middlewares - parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Create DB
app.get('/', (req, res)=>{
    res.send("Welcome Home")
})

// app.get('/createuserstable', (req,res) =>{
//     let sql = 'CREATE TABLE people(id int AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), pin VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Users table created');
//     })
// })

//const debug = Debug('http');

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)       
})

export default app;