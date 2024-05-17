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

app.post("/atualizar", async (req, res) => {
    try {
        const previousValue = req.body.previousValue;
        const newValue = req.body.newValue;
        const option = req.body.option;

        async function AtualizarDados() {
            await MeuBanco.update(
                { [option]: newValue },
                { where: { [option]: previousValue } }
            );
        }
        await AtualizarDados();
    } catch (err) {
        console.log("Erro ao atualizar os dados no servidor: " + err);
    }
});

app.post("/remover", async(req, res)=>{
    try{
        const removerValor = req.body.valor;
        const opcao = req.body.opcao;

        async function RemoverValor(){
            const whereClause = {};
            whereClause[opcao] = removerValor;
            const RemoverValor = await MeuBanco.destroy(
                {where: whereClause}
            )
        }
        RemoverValor();
    }catch(err){
        console.log("não foi possível remover " + req.body.valor +" erro " + err);
    }
})


//buscando dados (DESENVOLVIMENTO)
app.post("/listarTudo", async(req, res)=>{
    try{
        const option = req.body.option;
        let list = req.body.list;
        const ListaDados = await MeuBanco.findAll()
        if(option === "nome"){
            list = list.concat(ListaDados.map((user)=>user.nome))
        }
        else if(option === "email"){
            list = list.concat(ListaDados.map((user)=>user.email))
        }
        else if(option === "idade"){
            list = list.concat(ListaDados.map((user)=>user.idade))
        }
        res.send(list);//envio dos dados ao front
    }catch(err){
        console.log("erro ao buscar dados " + err)
    }
})


.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})