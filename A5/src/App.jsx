import { useState, useEffect } from 'react'
import './App.css'

// hooks: funções especiais
// hook de estado: função especial que gerencia estado


export default function App(){
  const [contador, setContador] = useState(0)
  
  async function fetchCharacters(){
    // get(pegar), post(create), put(update), delete(método dos http)
    // crud
    // try & catch => fazem parte de uma operação assíncrona
    try{
      let response = fetch("https://rickandmortyapi.com/api/character");
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchCharacters()
  }, [])

  return(
    <div>
      <p>{contador}</p>
      <button onClick={()=> setContador(contador + 1)}></button>
    </div>
  )
}

