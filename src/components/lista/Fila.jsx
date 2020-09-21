import React from "react";
import { URL_BACKEND } from "../../utils/contants";

export const Fila = ({_id,name,skills,image,race,handleDeletePersonaje, handleDetalle}) => {
  //crea las filas de la tabla
  return (
    <tr>
      <td>
        <img
          src={`${URL_BACKEND}/imagen/${image}`}
          className="img-fluid"
          alt="imgPersonaje"
        ></img>
      </td>
      <td>{name}</td>
      <td>{race.name}</td>
      <td>{skills.length}</td>
      <td>
        <button  onClick={()=>handleDeletePersonaje(_id)} className="btnDelete">
          x
        </button>
      </td>
      <td>
        <button onClick={()=>handleDetalle(_id)} className="btnAddSkill">
          Ver
        </button>
      </td>
    </tr>
  );
};
