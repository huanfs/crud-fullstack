import React, { useState } from "react";

function Remover(){

    const[remove, setRemove] = useState("nome")

    const color = "red";  

    return(
        <>  
            <h2>REMOVER</h2>
            <label htmlFor="nome" style={{color:color}}>{remove}:</label>
            {
                remove === "nome" ? (
                    <input type="text"/>
                ) : null
            }
            {
                remove === "email" ? (
                    <input type="email"/>
                ) : null
            }
            {
                remove === "idade" ? (
                    <input type="number"/>
                ) : null
            }
            <button type="button" style={{color:color}}>Remover -</button>
            <div className="controls">
                <button type="button" onClick={(event)=>{setRemove(event.target.innerText)}}>nome</button>
                <button type="button" onClick={(event)=>{setRemove(event.target.innerText)}}>email</button>
                <button type="button" onClick={(event)=>{setRemove(event.target.innerText)}}>idade</button>
            </div>
        </>
    )
}

export default Remover;