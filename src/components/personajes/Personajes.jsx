import React from "react";
import "./../styles.scss";
import { FormLista } from "./FormLista";

export const Personajes = () => {
  const formHabilidades = [
    {
      name: "name",
      container: "input",
      type: "text",
    },
    {
      name: "description",
      container: "textarea",
      type: "text",
    },
  ];

  return (
    <div className="container container_app">
      <div className="row base_container">
        <h3>Ingrese personaje</h3>
        <div className="col-sm-6">
          <hr />
          <h5>Datos personaje</h5>
          <form>
            Nombre
            <input type="text" name="" className="inputForm" value="" />
            Raza
            <select name="" id="" className="inputForm">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <div className="row newSkillsContainer">
              <FormLista
                title="Habilidades"
                Form={formHabilidades}
                items={[]}
              ></FormLista>
            </div>
            <button className="btnSave">Guardar</button>
          </form>
          <br />
        </div>
        <div className="col-sm-6">
          <hr />
          <h5>Imagen</h5>
          <br />
          <input type="file" className="form-control" />
          <img
            src="https://www.alfabetajuega.com/wp-content/uploads/2019/08/dragon-ball-goku.jpg"
            className="img-fluid"
          ></img>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
