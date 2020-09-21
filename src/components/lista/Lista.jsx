import React, { memo, useState } from "react";
import { deletePersonaje } from "../../functions/personaje";
import { Detalle } from "./Detalle";
import { Fila } from "./Fila";

export const Lista = memo(({loading,data,error,setPersonajeState}) => {
  
  //lista personajes
  //estado vista de tabla con personajes o detalle de uno
  const [vista, setvista] = useState({vista:true,seleccion:{}});

    //elimina un personaje
   const handleDeletePersonaje = (id) => {
     deletePersonaje(id,setPersonajeState);
    };
    //actualiza el estado para cambiar de vista
    const handleDetalle = (id) =>{
      const seleccion = data.personajes.find((r)=>r._id === id);
      setvista({vista:false,seleccion:seleccion});
    };
    


  return (
    <div>
      {(vista.vista)?(
      <>
      <table>
        <thead>
          <tr>
            <th className="tr-img">Imagen</th>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Numero skills</th>
            <th>Eliminar</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
            {
                (!loading && !error)
                ?
                (data.personajes.length===0)?(<tr><td colSpan="6">Sin personajes</td></tr>):
                data.personajes.map(p=>(
                    <Fila
                    {...p}
                    key={p._id.toString()}
                    handleDeletePersonaje={handleDeletePersonaje}
                    handleDetalle={handleDetalle}
                    ></Fila>
                )):(<tr><td colSpan="6">Cargando...</td></tr>)
            }

        </tbody>
      </table>
      <br />
      </>
      ):(<Detalle setvista={setvista} vista={vista}></Detalle>)}
    </div>
  );
});
