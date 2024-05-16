import React, {useState, useRef, useEffect} from "react";

import Adicionar from "./components/adicionar.jsx";
import Remover from "./components/remover.jsx";
import Atualizar from "./components/atualizar.jsx";
import ListarTodos from "./components/listarTodos.jsx";

import './App.css'

function App() {

  const[option, setOption] = useState("adicionar");

  const buttons = useRef(null);

  function ChangeOption(event){
    setOption(event.target.innerText);
  }

  useEffect(()=>{
    if(buttons.current){
      const btns = [...buttons.current.children];
      btns.forEach((btn)=>{
        btn.addEventListener("click", ChangeOption);
      })
    }
  },[])


  return (
    <main>
      <div className="inputField">
        {
          option === "adicionar" ? (
            <Adicionar/>
          ) : null
        }

        {
          option === "remover" ? (
            <Remover/>
          ) : null
        }

        {
          option === "atualizar" ? (
            <Atualizar/>
          ) : null
        }
        {
          option === "listar" ? (
            <ListarTodos/>
          ) : null
        }
      </div>
      <div className="controls" ref={buttons}>
        <button>adicionar</button>
        <button>atualizar</button>
        <button>remover</button>
        <button>listar</button>
      </div>
    </main>
  )
}

export default App
