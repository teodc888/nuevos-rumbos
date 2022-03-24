import React from "react";

//Carrousel Eslatic
import Carouseal from "react-elastic-carousel";

//Componente
import CardCarrousel from "../../card/cardCarrousel/cardCarrousel";

//Redux
import { useSelector } from "react-redux";

const breakPoints = [
  { width: 1000, itemsToShow: 1 },
  { width: 1000, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

export default function CarrouselCard({ tipo }) {
  const autos = useSelector((state) => state.autos);
  const motos = useSelector((state) => state.motos);
  const repuestos = useSelector((state) => state.repuestos);

  const autosDestacados = autos.filter((auto) => auto.destacado === "si");
  const motosDestacados = motos.filter((moto) => moto.destacado === "si");
  const repuestosDestacados = repuestos.filter(
    (repuesto) => repuesto.destacado === "si"
  );


  return (
    <div style={{ marginTop: "3%" }}>
      {tipo === "auto" ? (
        <Carouseal  breakPoints={breakPoints}>
          {autosDestacados.map((auto) => (
            <CardCarrousel
              marca={auto.marca}
              modelo={auto.modelo}
              imagen={auto.imagen}
              precio={auto.precio}
              id={auto.id}
              descripcion={auto.descripcion}
              año={auto.año}
              kilometros={auto.kilometros}
              tipo={"auto"}
              setOpen={"false"}
              favorito={"true"}
            />
          ))}
        </Carouseal>
      ) : tipo === "moto" ? (
        <Carouseal breakPoints={breakPoints}>
          {motosDestacados.map((moto) => (
            <CardCarrousel
              marca={moto.marca}
              modelo={moto.modelo}
              imagen={moto.imagen}
              precio={moto.precio}
              id={moto.id}
              año={moto.año}
              kilometros={moto.kilometros}
              tipo={"moto"}
              descripcion={moto.descripcion}
              favorito={"true"}
            />
          ))}
        </Carouseal>
      ) : tipo === "repuesto" ? (
        <Carouseal  breakPoints={breakPoints}>
          {repuestosDestacados.map((repuesto) => (
            <CardCarrousel
              nombre={repuesto.nombre}
              imagen={repuesto.imagen}
              precio={repuesto.precio}
              id={repuesto.id}
              tipo={"repuesto"}
              descripcion={repuesto.descripcion}
              favorito={"true"}
              descuento={repuesto.descuento}
              precioDescuento={repuesto.precioDescuento}
            />
          ))}
        </Carouseal>
      ) : null}
    </div>
  );
}
