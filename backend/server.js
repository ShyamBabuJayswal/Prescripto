import express from 'express'
import cors from 'cors'
import 'dotenv/config'


//app config
const app= express()
const port = process.env.PORT  || 4000


//middleware
app.use(express.json())
app.use(cors())

// api end points

app.get('/',(req,res)=>{
     res.send('API Working.....');
})

app.listen(port,() => console.log("Server started",port))

