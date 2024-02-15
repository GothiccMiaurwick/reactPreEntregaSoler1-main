import React, { useContext, useState } from "react";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../../db/db";

const Checkot = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    coodigo_postal: "",
  });

  const { carrito, precioTotal } = useContext(CartContext);
  const [idOrden, setIdOrden] = useState(null);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (evento) => {
    evento.preventDefault();
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Date.now(),
      total: precioTotal(),
    };

    if(datosForm.email !== datosForm.repetirEmail) {
      alert("los campos en imail no son iguales, por favor ingrese la misma direccion de correo electronico") // cambiar esto
      return
    }
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden)
      .then((respuesta) => {
        setDatosForm({
          nombre: "",
          telefono: "",
          email: "",
          direccion: "",
          coodigo_postal: "",
          repetirEmail: "",
        });

        setIdOrden(respuesta.id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {idOrden ? (
        <div>
          <h2>Orden Generada</h2>
          <p>guarde el id de su orden: {idOrden}</p>
        </div>
      ) : (
        <FormularioCheckout
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};

export default Checkot;
