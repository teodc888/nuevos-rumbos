import React,{useState} from "react";
import { Carousel } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Carrousel({ imagen, tamañoCard, tamañoImagen, velocidad }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel style={{ maxWidth: tamañoCard, margin: "auto" }} activeIndex={index} onSelect={handleSelect} interval={velocidad} >
        {imagen.map((picture) => (
          <Carousel.Item key={uuidv4()}>
            <img
              className="d-block w-100"
              height={tamañoImagen}
              src={picture}
              alt="Not fount"
              style={{objectFit: "contain"}}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
