import express from "express";

import cors from "cors";

import bodyParser from "body-parser";

const port = 8080;

import {MeuBanco} from "./model.js";

const app = express();

/*middlewares*/
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:5173',
}));
/*middlewares*/

app.get("/", async(req, res)=>{
    res.send("olá esta é a porta '/'")
})
app.post("/adicionar", async(req, res)=>{
    res.send("olá")
    try{
        const nome = req.body.nome;
        const email = req.body.email;
        const idade = req.body.idade;

        async function AdicionarValores(){
            const NovosValores = await MeuBanco.create({
                nome: nome,
                email: email,
                idade: idade,
            })
            console.log("novos valores adicionados com sucesso")
        }
        AdicionarValores();
    }catch(err){
        console.log("erro ao adicionar novos valores " + err)
    }
})

.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})