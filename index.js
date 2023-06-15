const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

function readData(){function readData() {
    let data = [];

    try {
        const fileContent = fs.readFileSync("./store/logs.json", "utf8");
        data = JSON.parse(fileContent);
    } catch (error) {
        console.error("Erro ao ler o arquivo logs.json:", error);
    }

    return data;
}

}

//Rotas
app.get("/", (req, res) => {
    let data = readData();

    if (!data) { data = []; }

    res.render("index", {
        title: "Diario Node - Registros",
        logs: data
    });
});


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

//Rota de Erro
app.use((req,res) => {
    res.send("Pagina Não Encontrada")
})

const port = 8080;
app.listen(port, () => console.log(`Server on Port: ${port}`));
