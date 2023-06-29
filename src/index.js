const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/index.html"))
})

router.get("/signup", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/cadastro.html")
})

app.use(router)

app.listen(process.env.PORT || 3333, ()=>{
    console.log("--Server ON--")
})
