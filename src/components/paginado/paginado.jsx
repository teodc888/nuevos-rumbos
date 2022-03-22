import React from "react";
import "./style.css";
import { Pagination } from "react-bootstrap";
export default function Paginado({ productoPorPagina, productos, paginado }) {
  const pageNumber = [];
  //el Math.ceil redondea para arriba
  for (let i = 1; i <= Math.ceil(productos / productoPorPagina); i++) {
    pageNumber.push( 

      <Pagination.Item style={{color:"red"}}  key={i} active={i === pageNumber} onClick={() => paginado(i)} >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="lg">{pageNumber}</Pagination>

    </div>
  );
}
