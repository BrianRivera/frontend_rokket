import Swal from "sweetalert2";
import { URL_BACKEND } from "../utils/contants";

export const insertPersonaje = async(body, formdata, setPersonajeState) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: body,
        redirect: "follow",
    };

    fetch(`${URL_BACKEND}/personaje`, requestOptions)
        .then((response) => response.json())
        .then(async(result) => {
            if (result.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Listo",
                    text: `Personaje '${result.personajes.name}' ingresado exitosamente `,
                    showConfirmButton: false,
                    timer: 2000,
                });
                const dataImg = await insertImage(result.personajes._id, formdata);
                result.personajes.image = dataImg.nombreArchivoFinal;
                refreshStatePersonaje(setPersonajeState, result.personajes, "insert");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Error al ingresar el personaje: ${result.err.message}`,
                });
            }
        })
        .catch((error) =>
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Error al ingresar el personaje: ${error}`,
            })
        );
};

export const deletePersonaje = async(id, setPersonajeState) => {
    Swal.fire({
        title: "Seguro desea eliminar este personaje?",
        text: "El personaje se eliminara de forma permanente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${URL_BACKEND}/personaje/${id}`, { method: "DELETE" })
                .then((response) => response.json())
                .then((result) => {
                    if (result.ok) {
                        Swal.fire({
                            icon: "success",
                            title: "Listo",
                            text: `Personaje eliminado`,
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        refreshStatePersonaje(setPersonajeState, id, "delete");
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `Error al eliminar el personaje: ${result.err.message}`,
                        });
                    }
                })
                .catch((error) =>
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Error al eliminar el personaje: ${error}`,
                    })
                );
        }
    });
};

const refreshStatePersonaje = (setPersonajeState, personaje, type) => {
    setPersonajeState((e) => {
        let newPersonaje;
        switch (type) {
            case "insert":
                newPersonaje = [personaje, ...e.data.personajes];
                return {...e, data: {...e.data, personajes: newPersonaje } };
            case "delete":
                newPersonaje = [
                    ...e.data.personajes.filter((r) => r._id !== personaje),
                ];
                return {...e, data: {...e.data, personajes: newPersonaje } };

            default:
                break;
        }
    });
};

const insertImage = async(id, image) => {
    var requestOptions = {
        method: "PUT",
        body: image,
        redirect: "follow",
    };

    const response = await fetch(`${URL_BACKEND}/upload/${id}`, requestOptions);
    return await response.json();
};