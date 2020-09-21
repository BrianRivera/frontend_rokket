import React from "react";

export const ItemFormLista = ({name='',description='',handleDeleteItem}) => {

//item de la lista de habilidades
  return (
    <div className="col-sm-12 itemPoder">
      <div className="row">
        <h6 className="col-sm-11">{name}</h6>
        <svg
          onClick={()=>handleDeleteItem(name)}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="col-sm-1 bi bi-trash-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          />
        </svg>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};
