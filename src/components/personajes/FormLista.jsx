import React from "react";
import { ItemFormLista } from "./ItemFormLista";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";

export const FormLista = ({
  title = "",
  Form = [],
  itemsState,
  setitemsState,
}) => {
  //funcion que maneja parte del formulario de ingreso,
  //controla la actualizacion del valor de los datos name y description de habilidades
  const [values, handleInputChange, reset] = useForm();

  //ingreso de habilidades/verificacion de habilidad unica
  const handleAddHabilitie = (e) => {
    e.preventDefault();
    if (!values.name || !values.description)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          "Por favor lleve el campo nombre y descripcion para agregar una habilidad",
      });
    if (itemsState.find((e) => e.name === values.name)) {
      reset();
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Habilidad repetida",
      });
    }
    reset();
    return setitemsState((i) => [values, ...i]);
  };

  //quita la habilidad elegida
  const handleDeleteItem = (name) => {
    return setitemsState((i) => i.filter((e) => e.name !== name));
  };

  return (
    <>
      <h5>{title}</h5>

      {Form &&
        Form.map((r, index) => {
          switch (r.container) {
            case "input":
              return (
                <div key={index.toString() + "i"} className="col-sm-12">
                  {r.name}
                  <input
                    type="text"
                    name={r.name}
                    className="inputForm"
                    onChange={handleInputChange}
                    value={values[r.name] ? values[r.name] : ""}
                  />
                </div>
              );
            case "textarea":
              return (
                <div key={index.toString() + "t"} className="col-sm-12">
                  {r.name}
                  <textarea
                    name={r.name}
                    cols="30"
                    rows="10"
                    className="inputForm"
                    onChange={handleInputChange}
                    value={values[r.name] ? values[r.name] : ""}
                  ></textarea>
                </div>
              );
            case "select":
              return (
                <div className="col-sm-12">
                  <select
                    name={r.name}
                    className="inputForm"
                    onChange={handleInputChange}
                  >
                    {r.options.map((op, i) => (
                      <option
                        value={values[op.name] ? values[op.name] : ""}
                      ></option>
                    ))}
                  </select>
                </div>
              );
            default:
              return (
                <div className="col-sm-12">
                  <h3>No conocida</h3>
                </div>
              );
          }
        })}
      <div className="col-sm-12">
        <button onClick={handleAddHabilitie} className="btnAddSkill">
          Agregar habilidad
        </button>
      </div>
      <div className="col-sm-12">
        <hr />
        <h5>Lista {title}</h5>
        <hr />

        <div className="listPoderes">
          {itemsState.length > 0 ? (
            itemsState.map((r, i) => (
              <ItemFormLista
                key={i + "hab"}
                name={r.name}
                description={r.description}
                handleDeleteItem={handleDeleteItem}
              ></ItemFormLista>
            ))
          ) : (
            <p>sin habilidades</p>
          )}
        </div>
        <br />
      </div>
    </>
  );
};
