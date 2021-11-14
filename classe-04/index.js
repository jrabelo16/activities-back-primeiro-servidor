const express = require("express");

const app = express();

app.get("/somar", (req, res) => {
    let primeiroNumero = Number(req.query.num1);
    let segundoNumero = Number(req.query.num2);

    res.send(`${primeiroNumero + segundoNumero}`)
});

app.get("/subtrair", (req, res) => {
    let primeiroNumero = req.query.num1;
    let segundoNumero = req.query.num2;

    res.send(`${primeiroNumero - segundoNumero}`)
});

app.get("/multiplicar", (req, res) => {
    let primeiroNumero = req.query.num1;
    let segundoNumero = req.query.num2;

    res.send(`${primeiroNumero * segundoNumero}`)
});

app.get("/dividir", (req, res) => {
    let primeiroNumero = req.query.num1;
    let segundoNumero = req.query.num2;

    res.send(`${primeiroNumero / segundoNumero}`)
});

app.listen(8000);