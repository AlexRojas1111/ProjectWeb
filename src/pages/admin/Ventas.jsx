import React, {useEffect} from "react";

const Ventas = () => {
  useEffect(()=>{
    console.log("Hello")
  },[]);
  
  return (
    <form className="flex flex-col">
      <h2>Registro de ventas</h2>
      <input type="text" placeholder="Nombre del producto"/>
      <input type="text" placeholder="Referencia del producto"/>
      <input type="text" placeholder="Informacion de ventas"/>
      <button className="bg-indigo-500 text-white">Enviar datos</button>
    </form>
  )
};

export default Ventas;
