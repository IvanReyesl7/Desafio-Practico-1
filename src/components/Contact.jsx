import { React } from "react";

const Contact = ({nombre,apellido,numero,index}) =>{


    
    return(
        <>
         <div className=" text-white rounded-lg border-2 p-4 bg-gray-500 m-2">
            <div className=" m-2">
            <p className="uppercase font-bold">Nombre:</p>
            <h3>{nombre}</h3>
            <p className="uppercase font-bold">Apellido:</p>
            <h3>{apellido}</h3>
            <p className="uppercase font-bold">Numero:</p>
            <h3 >{numero}</h3>
            </div>
            <div className=" bg-red-600 px-15 pr-15">
                <button className="text-white uppercase font-bold" onClick={() =>dropContacto(index)}>Eliminar</button>
            </div>
         </div>
         
        
        </>
    )
}

export default Contact