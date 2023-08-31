import { useState } from "react";
import Contact from "./Contact";

const ContactList = () => {
    const [todo,setTodo] = useState({});
    const [todos,setTodos] = useState([
      {
        nombre:"Juan Carlos",
        apellido:"Marroquin",
        numero:"78874994",
        
    },
    {
        "nombre": "Edwin Ivan",
        "apellido": "Reyes Figueroa",
        "numero": "22886545",
       
    },
    {
        "nombre": "Josue Eduardo",
        "apellido": "Fuentes",
        "numero": "45568734",
        
    }
    ])
  
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
      if(Object.keys(todo).length === 0){
        alert("No se aceptan espacios en blanco");
        return
      }
      setTodos([...todos,todo])
      
    }
  
    const deleteTodo = (indice) =>{
      const newTodos = [...todos]
      newTodos.splice(indice,1)
      setTodos(newTodos)
    }
  
    return(
      <>
        <form className=" gap-3 py-3 pb-3" onSubmit={e=>e.preventDefault()}>
          <label className=" text-white">Nombre:</label>
          <input className="m-2" type="text" name='nombre' onChange={handleChange} /><br />
          <label className=" text-white">Apellido:</label>
          <input className="m-2" type="text" name='apellido' onChange={handleChange} /><br />
          <label className=" text-white">Numero:</label>
          <input className="m-2" type="text" name='numero' onChange={handleChange} /><br />
          <button className="text-white uppercase font-bold" onClick={handleClick}>Agregar Contacto</button>
        </form>
		<div className=" py-5 grid grid-cols-3 rounded-lg border-2 p-4">
        {
          todos.map((value,index)=>(
            <Contact nombre={value.nombre} apellido={value.apellido} numero={value.numero}></Contact>
          ))
        }
        </div>
        
      </>
    )
      
  };

export default ContactList