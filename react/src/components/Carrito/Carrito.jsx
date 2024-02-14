import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { carrito, precioTotal} = useContext(CartContext);
  
  return (
    <div>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} alt="" />
            <p>{producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio Unitario: {producto.precio}</p>
            
          </li>
        ))}
      </ul>
      <div>
        <p> precio total: {precioTotal()}</p>
      </div>
    </div>
  );
};

export default Carrito;