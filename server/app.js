const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000
dotenv.config({ path : './config.env'})
require("./db/conn")

require("./router/auth")
app.use(express.json())

app.use(require('./router/auth'))

app.use(cookieParser())

app.get("/", (req,res)=>{
    res.send("Hellow form other side")
})

app.get("/about", (req,res)=>{
    res.send("Hello form other side")
})

app.listen(port, () => {
    console.log(`connected to successfull to port ${port}`)
})