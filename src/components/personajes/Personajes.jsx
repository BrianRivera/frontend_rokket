import React, { useState } from "react";
import { insertPersonaje } from "../../functions/personaje";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { FormLista } from "./FormLista";
import { URL_BACKEND } from "./../../utils/contants";
import "./../styles.scss";
import { Lista } from "../lista/Lista";

export const Personajes = () => {
  const [dataRace] = useFetch(`${URL_BACKEND}/raza`);

  const [dataPersonaje, setPersonajeState] = useFetch(`${URL_BACKEND}/personaje`);
 
  const [itemsState, setitemsState] = useState([]);


  const [values, handleInputChange, reset] = useForm({ name: "", race: "" });
  const { name, race } = values;

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

  const handleSubmitPersonaje = (e) => {
    e.preventDefault();
    const body = new URLSearchParams();
    body.append("name", name);
    body.append("race", race);
    body.append("skills", JSON.stringify(itemsState));
    body.append("image", "I1");
    insertPersonaje(body,setPersonajeState);
    reset();
    setitemsState([]);
  };

  return (
    <div className="container container_app">
      <div className="row base_container">
        <h3>Ingrese personaje</h3>
        <div className="col-sm-6">
          <hr />
          <h5>Datos personaje</h5>
          <form onSubmit={handleSubmitPersonaje}>
            Nombre
            <input
              type="text"
              name="name"
              className="inputForm"
              onChange={handleInputChange}
              value={name}
              required
            />
            Raza
            <select
              name="race"
              className="inputForm"
              onChange={handleInputChange}
              value={race}
              required
            >
              <option value="" disabled></option>
              {!dataRace.loading && !dataRace.error ? (
                dataRace.data.ok &&
                dataRace.data.race.map((r) => (
                  <option key={r._id.toString()} value={r._id}>
                    {r.name}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Cargando..
                </option>
              )}
            </select>
            <div className="row newSkillsContainer">
              <FormLista
                title="Habilidades"
                Form={formHabilidades}
                items={[]}
                itemsState={itemsState}
                setitemsState={setitemsState}
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
            alt="imgPersonaje"
          ></img>
          <br />
          <br />
        </div>
        <div className="col-sm-12">
          <Lista {...dataPersonaje} setPersonajeState={setPersonajeState}></Lista>
        </div>
      </div>
    </div>
  );
};
