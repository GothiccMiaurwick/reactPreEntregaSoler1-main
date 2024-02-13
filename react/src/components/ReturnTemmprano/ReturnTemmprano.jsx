import React from "react";

const ReturnTemmprano = ({ datos }) => {

    if(datos.length === 0) {
        return(
            <div>
                <h2>No hay datos que mostrar</h2>
            </div>
        )
    }

  return <div>
    <h2>Practicando Return temprano</h2>
    {
        datos.map((item) => (
            <p key={item.nombre}> {item.nombre} </p>
        ))
    }
  </div>;
};

export default ReturnTemmprano;
