const express = require ("express")
const app = express()
const path = require("path")

app.use(express.static("Public"))

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en puerto 3000") );

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})


app.get("/register", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.get("/ingresa", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/ingresa.html"))
})
app.get("/compras", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/compras.html"))
})
