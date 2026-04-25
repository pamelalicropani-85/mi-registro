import { useState } from 'react'
import NavbarRB from "./components/NavbarRB"
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const fecha = "Viernes 24 de Abril"
  const saludo = "Buenos días Pamela!"

  return (
    <>
      
      <NavbarRB/>
      <ItemListContainer fecha={fecha} saludo={saludo}/>
      <ItemCount/>
    </>
  )
}

export default App
