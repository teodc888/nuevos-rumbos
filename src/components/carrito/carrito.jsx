import React from "react";

//Mui
import { Stack, Typography, Grid, Box, Button, Container } from "@mui/material";

//Componentes
import Footer from "../footer/footer";
import CardCarrito from "../card/cardCarrito/cardCarrito";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { borrarCarritoTotal } from "../../redux/actions/index";

//router
import { useNavigate } from "react-router";

//toastify
import { toast } from "react-toastify";

export default function Carrito() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/repuestos");
  };

  const carrito = useSelector((state) => state.carrito);

  const errorSubmit = () => {
    toast.error("Productos eliminados con éxito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClickBorrar = () => {
    dispatch(borrarCarritoTotal());
    errorSubmit();
  };

  const total = carrito.reduce((total, item) => {
    return total + Number(item.precioDescuento);
  }, 0);

  const total1 = carrito.reduce((total1, item) => {
    return total1 + Number(item.precio);
  }, 0);

  const total2 = total1 - total;

  const botonWhatsapp = () => {
    window.open(
      `https://wa.me/543512550311?text=${
        encodeURIComponent("Hola! le mando mi presupuesto:") +
        "%0D%0A" +
        carrito.map((item) =>
          encodeURI(
            "\n" +
              "Modelo:  " +
              item.modelo +
              "\n" +
              "Marca: " +
              item.marca +
              "\n" +
              "Precio sin descuento:  " +
              "$" +
              item.precio +
              "\n" +
              "Precio Con Descuento: " +
              "$" +
              item.precioDescuento +
              "\n"
          )
        ) +
        "%0D%0A" +
        encodeURIComponent("Total: $" + total1) +
        "%0D%0A" +
        encodeURIComponent("Descuento: $" + total2) +
        "%0D%0A" +
        encodeURIComponent("Total a pagar: $" + total) +
        "%0D%0A" +
        encodeURIComponent("Gracias!")
      }`
    );
    // setTimeout(() => {
    //   dispatch(borrarCarritoTotal());
    // }, 3000);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography variant="h3" component="div" textAlign="center">
            Carrito
          </Typography>
          {carrito.length > 0 ? (
            <>
              <Button
                color="error"
                variant="contained"
                sx={{
                  bgcolor: "red",
                  color: "white",
                  width: "20%",
                  display: { xs: "none", md: "block" },
                }}
                onClick={handleClickBorrar}
              >
                Eliminar todo
              </Button>
              <Button
                color="error"
                variant="contained"
                sx={{
                  bgcolor: "red",
                  color: "white",
                  width: "100%",
                  display: { xs: "block", md: "none" },
                }}
                onClick={handleClickBorrar}
              >
                Eliminar todo
              </Button>
            </>
          ) : null}
          <Box sx={{ width: "100%", marginTop: "3%" }}>
            <Grid
              container
              spacing={{ xs: 4, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {/* mapeo de los productos para mostrarlos en la pantalla */}
              {carrito.length === 0 ? (
                <>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h4" component="div" textAlign="center">
                      No hay ningun producto en carrito
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                      mb: "40%",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Button
                      onClick={handleClick}
                      color="success"
                      variant="contained"
                      sx={{ bgcolor: "green", color: "white" }}
                    >
                      Agregar Productos
                    </Button>
                  </Grid>
                </>
              ) : (
                carrito.map((producto) => (
                  <Grid item xs={4} sm={12} md={12} key={producto.id}>
                    <CardCarrito
                      marca={producto.marca}
                      modelo={producto.modelo}
                      imagen={producto.imagen}
                      precio={Number(producto.precio)}
                      id={producto.id}
                      descripcion={producto.descripcion}
                      tipo="carrito"
                      precioDescuento={producto.precioDescuento}
                    />
                  </Grid>
                ))
              )}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {carrito.length > 0 ? (
                  <>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        width: "30%",
                        bgcolor: "green",
                        color: "white",
                        display: { xs: "none", md: "block" },
                      }}
                      onClick={botonWhatsapp}
                    >
                      Solicitar presupuesto a Whatsapp
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        width: "100%",
                        bgcolor: "green",
                        color: "white",
                        display: { xs: "block", md: "none" },
                      }}
                      onClick={botonWhatsapp}
                    >
                      Solicitar presupuesto a Whatsapp
                    </Button>
                  </>
                ) : null}
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
