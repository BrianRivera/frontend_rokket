import React, { useState } from "react";
import { insertPersonaje } from "../../functions/personaje";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { FormLista } from "./FormLista";
import { URL_BACKEND } from "./../../utils/contants";
import "./../styles.scss";
import { Lista } from "../lista/Lista";
import Swal from "sweetalert2";

export const Personajes = () => {
  //carga inicial de razas para las opciones del select
  const [dataRace] = useFetch(`${URL_BACKEND}/raza`);

  //carga inicial de personajes
  const [dataPersonaje, setPersonajeState] = useFetch(
    `${URL_BACKEND}/personaje`
  );
  //estado que maneja las habilidades de el nuevo personaje
  const [itemsState, setitemsState] = useState([]);

  //estado qe maneja las imagenes
  const [imageState, setImageState] = useState({
    default:
      "https://vignette.wikia.nocookie.net/dragonball/images/3/35/Esfera_del_dragon_4_estrellas.png/revision/latest?cb=20140105064853&path-prefix=es",
  });

  //funcion que maneja parte del formulario de ingreso,
  //controla la actualizacion del valor de los datos nombre y raza
  const [values, handleInputChange, reset] = useForm({
    name: "",
    race: "",
  });
  const { name, race } = values;

  //array con parametros para la creacion de formulario de habilidades
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

  //ingreso de nuevo personaje junto con su imagen
  const handleSubmitPersonaje = (e) => {
    e.preventDefault();
    if (!imageState.file || imageState.file === "")
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Debe de seleccionar una imagen`,
      });

    const body = new URLSearchParams();
    body.append("name", name);
    body.append("race", race);
    body.append("skills", JSON.stringify(itemsState));
    body.append("image", "I1");

    const formdata = new FormData();
    formdata.append("archivo", imageState.file, imageState.nameFile);
    insertPersonaje(body, formdata, setPersonajeState);

    //limpia los campos
    setImageState({ default: imageState.default });
    reset();
    setitemsState([]);
    document.querySelector("#fileInput").value = "";
  };

  //maneja los cambios el el boton de imagen
  const handleFile = (e) => {
    const file = e.target.files[0];
    const nameFile = e.target.value;
    file
      ? setImageState((e) => ({ ...e, file, nameFile }))
      : setImageState({ default: imageState.default });
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
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleFile}
            id="fileInput"
            accept="image/*"
          />
          <img
            src={
              !imageState.file || imageState.file === ""
                ? imageState.default
                : URL.createObjectURL(imageState.file)
            }
            className="img-fluid"
            alt="imgPersonaje"
          ></img>
          <br />
          <br />
        </div>
        <div className="col-sm-12 listaYDetalle">
          <Lista
            {...dataPersonaje}
            setPersonajeState={setPersonajeState}
          ></Lista>
        </div>
      </div>
    </div>
  );
};
