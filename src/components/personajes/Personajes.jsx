import React from "react";
import "./../styles.scss";

export const Personajes = () => {

 

  return (
    <div className="container container_app">
      <div className="row base_container">
        <h3>Ingrese personaje</h3>
        <div className="col-sm-6">
            <hr/>
          <h5>Datos personaje</h5>
          <form>
              Nombre
              <input type="text" name="" className="inputForm" value=""/>
              Raza
              <select name="" id="" className="inputForm">
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
              </select>

              <div className="row">
                  <h5>Habilidades</h5>
                  <div className="col-sm-12">
                    Nombre
                    <input type="text" name="" className="inputForm" value=""/>
                  </div>

                  <div className="col-sm-12">
                  Descripcion
                    <textarea name="" id="" cols="30" rows="10"  className="inputForm"></textarea>
                  </div>
                  <div className="col-sm-12 listPoderes">
                      <hr/>
                      <h5>Lista habilidades</h5>
                      <hr/>

                      <ul className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">List group item heading</h6>
                          <small>x</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>

                      </ul>
                      <br/>
                    </div>
              </div>
              
          </form>
        </div>
        <div className="col-sm-6">
            <hr/>
          <h5>Imagen</h5>
          <br/>
          <input type="file" className="form-control" />
          <img src="https://www.alfabetajuega.com/wp-content/uploads/2019/08/dragon-ball-goku.jpg" className="img-fluid" alt="Responsive image"></img>
            <br/>
            <br/>
        </div>
      </div>
    </div>
  );
};
