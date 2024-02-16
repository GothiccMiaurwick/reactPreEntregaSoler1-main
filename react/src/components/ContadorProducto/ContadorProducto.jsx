import { useState } from "react";

const ContadorProducto = ({ stock, añadirProducto }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <button onClick={sumar}>+</button>
      <p>{contador}</p>
      <button onClick={restar}>-</button>
      <button
        onClick={() => {
          añadirProducto(contador);
        }}
      >
        Añádir al carrito
      </button>
    </div>
  );
};

export default ContadorProducto;
