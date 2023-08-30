import { useState } from "react";
import Contact from "./Contact";

const ContactList = () =>{


    const [contacto, setContacto] = useState({});
    const [contactos,setContactos] = useState([
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

    const handleChange = e => setContacto({[e.target.name] : e.target.value});
    const handleClick = e => {

        if(Object.keys(contacto).length === 0) {
            alert("los campos no pueden estar vacios");
            return;
        }
        setContactos(...contactos,contacto)
    }

    const dropContacto = index =>{

        const newContacto = {...contactos}
        newContacto.splice(index,1)
        setContactos(newContacto)
    }
    return(
        <>
            <form className=" gap-3 py-3 pb-3" onSubmit={e => e.preventDefault()}>
                <label className=" text-white">Nombre:</label>
                <input className="m-2" type="text" name="nombre" onChange={handleChange}></input><br />
                <label className=" text-white">Apellido:</label>
                <input className="m-2" type="text" name="apellido" onChange={handleChange}></input><br />
                <label className=" text-white">Numero:</label>
                <input className="m-2" type="text" name="numero" onChange={handleChange}></input><br />
                <div className=""><button className="text-white uppercase font-bold" onClick={handleClick}>Agregar contacto</button></div>
            </form>
          <div className=" py-5 grid grid-cols-3 rounded-lg border-2 p-4">
          {
            contactos.map((value,index) => (<Contact nombre={value.nombre} apellido={value.apellido} numero={value.numero} />))
          }
          </div>
        </>
    )
}

export default ContactList