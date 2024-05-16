import React,{ useState, useEffect } from "react";

function ListarTodos(){

    const[list, setList] = useState([]);

    const[option, setOption] = useState("nome");

    async function BuscarDados(event){
        const dados = {
            list: list,
            option: option,
        }
            try{
                const buscarDados = await fetch("http://localhost:8080/listarTudo",{
                    method: 'POST',
                    body: JSON.stringify(dados),
                    headers: {
                        'Content-Type' : 'application/json',
                    }
                });
                //preciso retornar um dados da requisição
            }catch(err){
                console.log("não foi possível enviar a requisição ao servidor " + err)
            }
    }

    useEffect(()=>{
        console.log(list)
    },[list])

    return(
        <>
        <h2>lista de {option}s</h2>

        <div className="list">
            {list.map((item, index) => {
                return(<p>{item}</p>)
            })}
        </div>
        <button onClick={BuscarDados}>listar {option}s</button>
        <div className="controls">
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>nome</button>
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>email</button>
                <button type="button" onClick={(event)=>{setOption(event.target.innerText)}}>idade</button>
            </div>
        </>
    )
}
export default ListarTodos;