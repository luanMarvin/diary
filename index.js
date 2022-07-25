const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// //
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }))

const data = JSON.parse(fs.readFileSync("./store/logs.json"));
/////

//Routes +-----------
app.get("/", (req, res) => {
    res.render("index", {
        title: "Diario Node - Registros",
        logs: data
    })
})

app.get("/register-post", (req, res) => {
    const { sucess } = req.query

    res.render("register-post", {
        title: "Diario Node - Novo Registro",
        post_register_status: sucess
    })
})

app.post("/save-post", (req, res) => {
    const { titulo, date, texto} = req.body
    const data = JSON.parse(fs.readFileSync("./store/logs.json"));

    data.push({
        titulo,
        date,
        texto
    })

    const postLog = JSON.stringify(data)
    fs.writeFileSync("./store/logs.json",postLog)
    res.redirect("/register-post?sucess=1")
})

//Errors +-----------
app.use((req,res) => {
    res.send("Pagina Não Encontrada")
})

//Port Set +----------
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server on Port: ${port}`));