import React, {useContext, useState } from "react";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext} from "../context/CartContext"

const Checkot = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    coodigo_postal: "",
  });

  const {carrito, precioTotal} = useContext(CartContext)

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (evento) => {
    evento.preventDefault();
    const orden = {
      comprador : {...datosForm},
      productos : [...carrito],
      total : precioTotal()
    }
    console.log(orden)
  };

  return (
    <div>
      <FormularioCheckout
        datosForm={datosForm}
        guardarDatosInput={guardarDatosInput}
        enviarOrden={enviarOrden}
      />
    </div>
  );
};

export default Checkot;
