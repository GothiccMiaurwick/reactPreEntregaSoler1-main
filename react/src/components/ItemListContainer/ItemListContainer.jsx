import React, { useState,useEffect } from "react";
import "./ItemListContainer.css";
import obtenerProductos from "../Data/Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams()

  useEffect(() => {
    obtenerProductos
    .then((respuesta) =>  {
      if(categoria){
        const productosFiltrados = respuesta.filter((producto) => producto.categoria === categoria)
        setProductos(productosFiltrados)
      }else {
        setProductos(respuesta)
      }
    })
  }, [categoria])
  
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;