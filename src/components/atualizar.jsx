import React, { useState } from "react";

function Atualizar(){

    const[option, setOption] = useState("nome");

    const[dadoAntigo, setDadoAntigo] = useState("nome")
    const[dadoNovo, setDadoNovo] = useState(null);

    const color = "blue";  

    async function AtualizarDados(){
        const dados = {
            previousValue: dadoAntigo,
            newValue: dadoNovo,
            option: option,
        }

        try{
            const atualizarDados = await fetch("http://localhost:8080/atualizar",{
                method: 'POST',
                body: JSON.stringify(dados),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
        }catch(err){
            console.log("não foi possível enviar os novos dados ao banco de dados " + err);
        }
    }
    return(
        <>  
            <h2>ATUALIZAR</h2>
            <label htmlFor={`${option} antigo`} style={{marginLeft:"-5em", color:color}}>{`${option} antigo`}</label>
            <input type="text" onChange={(event)=>{setDadoAntigo(event.target.value)}}/>
            <label htmlFor={`novo ${option}`} style={{marginLeft:"-6em",color:color}}>{`novo ${option}`}</label>
            <input type="text" onChange={(event)=>{setDadoNovo(event.target.value)}}/>
            <button type="button" style={{color:color}} onClick={AtualizarDados}>Atualizar =</button>
            <div className="controls">
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>nome</button>
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>email</button>
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>idade</button>
            </div>
        </>
    )
}

export default Atualizar;