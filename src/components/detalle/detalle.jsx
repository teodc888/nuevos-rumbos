import React, { useEffect } from "react";

//Route
import { useParams } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getProductosAuto,
  getProductosMoto,
  getProductosRepuesto,
} from "../../redux/actions/index";

//Component
import DetalleAuto from "../autos/detalleAuto/detalleAuto";
import DetalleMoto from "../motos/detalleMoto/detalleMoto";
import DetalleRepuesto from "../repuestos/detalleRepuesto/detalleRepuesto";

export default function Detalle() {
  const dispatch = useDispatch();
  // trae el id del producto
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductosAuto());
    dispatch(getProductosMoto());
    dispatch(getProductosRepuesto());
  }, [dispatch]);

  // Traer todos los productos
  let producto = [];
  const autos = useSelector((state) => state.autos);
  const motos = useSelector((state) => state.motos);
  const repuestos = useSelector((state) => state.repuestos);

  // pushear a la variable producto
  producto = [...producto, ...autos, ...motos, ...repuestos];

  //flat sirve para reducir arrays
  let productoFlat = producto.flat();

  // busca el producto segun el id
  const productoSeleccionado = productoFlat.find(
    (producto) => producto.id === id
  );

  useEffect(() => {
    document.title = productoSeleccionado.modelo;
  }, [productoSeleccionado.modelo]);


  return (
    <div>
      {productoSeleccionado.detalle === "auto" ? (
        <>
          <DetalleAuto
            marca={productoSeleccionado.marca}
            modelo={productoSeleccionado.modelo}
            imagen={productoSeleccionado.imagen}
            descripcion={productoSeleccionado.descripcion}
            año={productoSeleccionado.año}
            carroceria={productoSeleccionado.carroceria}
            motor={productoSeleccionado.motor}
            transmision={productoSeleccionado.transmision}
            precio={Number(productoSeleccionado.precio).toLocaleString("es-AR")}
            combustible={productoSeleccionado.combustible}
            kilometros={productoSeleccionado.kilometros}
            cv={productoSeleccionado.cv}
            puertas={productoSeleccionado.puertas}
            gnv={productoSeleccionado.gnv}
            id={productoSeleccionado.id}
          />
        </>
      ) : productoSeleccionado.detalle === "moto" ? (
        <>
          <DetalleMoto
            marca={productoSeleccionado.marca}
            modelo={productoSeleccionado.modelo}
            imagen={productoSeleccionado.imagen}
            descripcion={productoSeleccionado.descripcion}
            id={productoSeleccionado.id}
            año={productoSeleccionado.año}
            precio={Number(productoSeleccionado.precio).toLocaleString("es-AR")}
            cilindrada={productoSeleccionado.cilindrada}
            cv={productoSeleccionado.cv}
            kilometros={productoSeleccionado.kilometros}
          />
        </>
      ) : productoSeleccionado.detalle === "repuesto" ? (
        <>
          <DetalleRepuesto
            marca={productoSeleccionado.marca}
            modelo={productoSeleccionado.modelo}
            imagen={productoSeleccionado.imagen}
            descripcion={productoSeleccionado.descripcion}
            id={productoSeleccionado.id}
            precio={Number(productoSeleccionado.precio).toLocaleString("es-AR")}
          />
        </>
      ) : (
        <>
          <h1 className="App">ERROR</h1>
        </>
      )}
    </div>
  );
}
