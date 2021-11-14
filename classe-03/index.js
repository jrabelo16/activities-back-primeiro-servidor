const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let contador = -1;

app.get("/", (req, res) => {
    console.log("Recebi um GET");
    contador++;
    let index = contador % (jogadores.length);
    res.send(`É a vez de ${jogadores[index]} jogar!`)
})


app.listen(8000);