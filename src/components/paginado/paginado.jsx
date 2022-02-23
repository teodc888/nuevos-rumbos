import React from "react";
import { Pagination } from "react-bootstrap";
export default function Paginado({ productoPorPagina, productos, paginado }) {
  const pageNumber = [];
  //el Math.ceil redondea para arriba
  for (let i = 1; i <= Math.ceil(productos / productoPorPagina); i++) {
    pageNumber.push(
      <Pagination.Item key={i} onClick={() => paginado(i)}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination >{pageNumber}</Pagination>
    </>
  );
}
