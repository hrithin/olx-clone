const express = require('express')
const cookieParser = require('cookie-parser')
const DB = require('./utils/db')
const  userRouter = require("./Routes/userRouter")
const cors = require('cors');


require('dotenv').config()

const app = express()


app.use(cors())


app.use(cookieParser())
app.use(express.json())

app.use('/user',userRouter)

const port = process.env.PORT || 8980

const startApp=async()=>{
    try {
        await DB(process.env.MONGO_URI);
        console.log('Connected to database');
        app.listen(port,()=>{
            console.log('server running on port '+ port);
        })
        
    } catch (error) {
        console.log(error);
    } 
}


startApp()