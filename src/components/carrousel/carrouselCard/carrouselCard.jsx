import React from "react";

//Carrousel Eslatic
import Carouseal from "react-elastic-carousel";

//Componente
import CardNR from "../../card/card";

//Redux
import { useSelector } from "react-redux";

const breakPoints = [
  { width: 5, itemsToShow: 1 },
  { width: 5, itemsToShow: 2 },
  { width: 5, itemsToShow: 3 },
];

export default function CarrouselCard({ tipo }) {
  const autos = useSelector((state) => state.autos);
  const motos = useSelector((state) => state.motos);

  console.log(autos);
  return (
    <div style={{ marginTop: "3%", width:"100%" }}>
      {tipo === "auto" ? (
        <Carouseal breakPoints={breakPoints}>
          {autos.map((auto) => (
            <CardNR
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
          {motos.map((moto) => (
            <CardNR
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
      ) : null}
    </div>
  );
}
