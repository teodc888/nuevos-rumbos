import React,{useState} from "react";
import { Carousel } from "react-bootstrap";

export default function Carrousel({ imagen, tamañoCard, tamañoImagen, velocidad }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel fade style={{ maxWidth: tamañoCard, margin: "auto" }} activeIndex={index} onSelect={handleSelect} interval={velocidad}>
        {imagen.map((picture) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={tamañoImagen}
              src={picture}
              alt="Not fount"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
