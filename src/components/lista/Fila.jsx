import React from "react";

export const Fila = ({_id,name,skills,race,handleDeletePersonaje, handleDetalle}) => {
  return (
    <tr>
      <td>
        <img
          src="https://www.alfabetajuega.com/wp-content/uploads/2019/08/dragon-ball-goku.jpg"
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
