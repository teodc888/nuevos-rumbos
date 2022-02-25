import React from "react";
import { Carousel } from "react-bootstrap";
import Supra from "../../images/supra.jpg"

export default function Carrousel({tamaño}) {
  return (
    <>
      <Carousel style={{width:tamaño, margin:"auto"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Supra}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>IMAGEN DE PRUEBA</h3>
            <p>texto de prueba</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Supra}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3>IMAGEN DE PRUEBA</h3>
            <p>texto de prueba</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Supra}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3>IMAGEN DE PRUEBA</h3>
            <p>texto de prueba</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
