import React from "react";

export const Detalle = ({ setvista, vista: { seleccion } }) => {
  console.log(seleccion);
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
            src="https://www.alfabetajuega.com/wp-content/uploads/2019/08/dragon-ball-goku.jpg"
            className="img-fluid"
            alt="imgPersonaje"
          ></img>
        </div>
        <div className="col-sm-8">
          <h5>Habilidades</h5>
          
        </div>
      </div>
      <br />
    </div>
  );
};
