import "./style.css";
import React from "react";

//Bootstrap
import { Pagination } from "react-bootstrap";

//Mui
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//toast
import { toast } from "react-toastify";

export default function Paginado({
  productoPorPagina,
  productos,
  paginado,
  setCurrentPage,
  currentPage,
}) {
  const pageNumber = [];
  //el Math.ceil redondea para arriba
  for (let i = 1; i <= Math.ceil(productos / productoPorPagina); i++) {
    pageNumber.push(
      <Pagination.Item
        style={{ color: "red" }}
        key={i}
        active={i === pageNumber || i === currentPage}
        onClick={() => paginado(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  function nextPage() {
    if (currentPage === pageNumber.length) {
      setCurrentPage(pageNumber.length);
      toast.error("No hay mas productos", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  }

  function previousPage() {
    if (currentPage === 1) {
      setCurrentPage(1);
      toast.error("No se puede regresar", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <IconButton onClick={previousPage} sx={{ mb: "5%", color: "#4caf50" }}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Pagination size="lg">{pageNumber}</Pagination>
      <IconButton onClick={nextPage} sx={{ mb: "5%", color: "#4caf50" }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}
