import React, { useState } from "react";

function Atualizar(){

    const[nome, setNome] = useState();
    const[email, setEmail] = useState();
    const[idade, setIdade] = useState();

    const color = "blue";  

    async function AtualizarDados(){
        try{
            const AtualizarDados = await fetch("http://localhost:3000/atualizar",{
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(nome, email, idade),
                header: {
                    'Content-Type':'application/json',
                }
            })
        }catch{(err)=>{
            console.log("erro com a atualização " + err)
        }}
    }
    return(
        <>  
            <h2>ATUALIZAR</h2>
            <label htmlFor="nome" style={{color:color}}>nome:</label>
            <input type="text" onChange={(event)=>(setNome(event.target.value))}/>
            <label htmlFor="email" style={{color:color}}>email:</label>
            <input type="email" onChange={(event)=>(setEmail(event.target.value))}/>
            <label htmlFor="idade" style={{color:color}}>idade:</label>
            <input type="number" onChange={(event)=>(setIdade(event.target.value))}/>
            <button type="button" style={{color:color}} onClick={AtualizarDados}>Atualizar =</button>
        </>
    )
}

export default Atualizar;