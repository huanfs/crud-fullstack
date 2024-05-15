import React, { useState } from "react";

function Adicionar(){

    const[nome, setNome] = useState();
    const[email, setEmail] = useState();
    const[idade, setIdade] = useState();

    const color = "green"; 
    
    //função fetch para adicionar usuario
    async function AdicionarDados(){
      const novosDados = {
        nome: nome,
        email: email,
        idade: idade,
      }
        try{
          const AdicionarDados = await fetch('http://localhost:8080/adicionar',{
          method: 'post',
          body: JSON.stringify(novosDados),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        }catch(err){
          console.log("não foi possível adicionar  " + err)
        }
      }

    return(
        <>  
            <h2>ADICIONAR</h2>
            <label htmlFor="nome" style={{color:color}}>nome:</label>
            <input type="text" onChange={(event)=>{setNome(event.target.value)}}/>
            <label htmlFor="email" style={{color:color}}>email:</label>
            <input type="email" onChange={(event)=>{setEmail(event.target.value)}}/>
            <label htmlFor="idade" style={{color:color}}>idade:</label>
            <input type="number" onChange={(event)=>{setIdade(event.target.value)}}/>
            <button type="button" style={{color:color}} onClick={AdicionarDados}>Adicionar +</button>
        </>
    )
}

export default Adicionar;