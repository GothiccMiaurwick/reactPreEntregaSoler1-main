import React, { useEffect, useState } from "react";
import obtenerProductos from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProducto } = useParams()

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        const filtro = respuesta.find((producto) => producto.id === Number(idProducto));
        setProducto(filtro);
      })
  }, [idProducto])

  return <div>
    <ItemDetail producto={producto}/>
  </div>;
};

export default ItemDetailContainer;
