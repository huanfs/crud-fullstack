import React, { useState, useEffect } from "react";

function Remover(){

    const[option, setOption] = useState("nome")

    const[value, setValue] = useState(null);

    const color = "red"; 

    async function RemoverValor(){
        const dados = {
            valor: value,
            opcao: option,
        };

        try{
            const removerValor = await fetch("http://localhost:8080/remover", {
                method: "Post",
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        }catch(err){
            console.log("não foi possível enviar valor ao banco de dados " + err)
        }
    }

    return(
        <>  
            <h2>REMOVER</h2>
            <label htmlFor="nome" style={{color:color}}>{option}:</label>
            {
                option === "nome" ? (
                    <input type="text" onChange={(event)=>{setValue(event.target.value)}}/>
                ) : null
            }
            {
                option === "email" ? (
                    <input type="email" onChange={(event)=>{setValue(event.target.value)}}/>
                ) : null
            }
            {
                option === "idade" ? (
                    <input type="number" onChange={(event)=>{setValue(event.target.value)}}/>
                ) : null
            }
            <button type="button" style={{color:color}} onClick={RemoverValor}>Remover -</button>
            <div className="controls">
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>nome</button>
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>email</button>
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>idade</button>
            </div>
        </>
    )
}

export default Remover;