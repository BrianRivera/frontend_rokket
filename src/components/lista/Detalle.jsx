import React from "react";
import { URL_BACKEND } from "../../utils/contants";

export const Detalle = ({ setvista, vista: { seleccion } }) => {
  const handleReturn = () => {
    setvista((e) => ({ vista: !e.vista, seleccion: {} }));
  };

  return (
    <div>
      <hr />
      <button onClick={handleReturn} className="btnDetalle">
        atras
      </button>
      <hr />

      <div className="row">
        <div className="col-sm-4">
          <h5>Personaje</h5>
          <p>Nombre: {seleccion.name}</p>
          <p>raza: {seleccion.race.name}</p>
          <p>habilidad raza: {seleccion.race.skills}</p>
          <img
            src={`${URL_BACKEND}/imagen/`+seleccion.image}
            className="img-fluid"
            alt="imgPersonaje"
          ></img>
        </div>
        <div className="col-sm-8">
          <h5>Habilidades</h5>
          <table>
            <thead>
              <tr>
                <th style={{width:'200px'}}>Habilidad</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {seleccion.skills.map((r, i) => (
                <tr key={r.name.toString() + i}>
                  <td>{r.name}</td>
                  <td>{r.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </div>
  );
};
