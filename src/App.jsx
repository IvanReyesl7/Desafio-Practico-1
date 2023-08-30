import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

function App() {


  return (
    <>
     <h1 className=' text-5xl uppercase text-cyan-400 font-mono'>Contactos</h1>
     <ContactList></ContactList>
    </>
  )
}

export default App
