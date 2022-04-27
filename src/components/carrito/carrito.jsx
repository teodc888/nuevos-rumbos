import React, { useEffect } from "react";

//Mui
import { Stack, Typography, Grid, Box, Button, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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

//animaciones
import { gsap } from "gsap";

//iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
    return (
      total +
      Number(
        item.descuento === "0"
          ? item.precio * item.cantidad
          : item.precioDescuento * item.cantidad
      )
    );
  }, 0);

  const total1 = carrito.reduce((total1, item) => {
    return total1 + Number(item.precio * item.cantidad);
  }, 0);

  const total2 = total1 - total;

  const cantidad0 =
    carrito.length > 0 ? carrito.filter((el) => el.descuento === "0") : null;
  const cantidadTotal =
    carrito.length > 0
      ? cantidad0.length === carrito.length
        ? true
        : false
      : null;

  const botonWhatsapp = () => {
    window.open(
      `https://wa.me/3512550311?text=${
        encodeURIComponent("Hola! le mando mi presupuesto:") +
        "%0D%0A" +
        carrito.map((item) =>
          item.descuento > 0
            ? encodeURI(
                "\n" +
                  "Nombre:  " +
                  item.nombre +
                  "\n" +
                  "Precio sin descuento c/u:  " +
                  "$" +
                  item.precio +
                  "\n" +
                  "Precio Con Descuento c/u: " +
                  "$" +
                  item.precioDescuento +
                  "\n" +
                  `Precio sin descuento por ${item.cantidad}:  ` +
                  "$" +
                  item.precio * item.cantidad +
                  "\n" +
                  `Precio con descuento por ${item.cantidad}:  ` +
                  "$" +
                  item.precioDescuento * item.cantidad +
                  "\n" +
                  "Cantidad: " +
                  item.cantidad +
                  "\n"
              )
            : encodeURI(
                "\n" +
                  "Nombre:  " +
                  item.nombre +
                  "\n" +
                  "Precio c/u:  " +
                  "$" +
                  item.precio +
                  "\n" +
                  `Precio por ${item.cantidad}:  ` +
                  "$" +
                  item.precio * item.cantidad +
                  "\n" +
                  "Cantidad: " +
                  item.cantidad +
                  "\n"
              )
        ) +
        "%0D%0A" +
        encodeURIComponent(
          cantidadTotal === true ? "Total: $" + total1 : "Total: $" + total1
        ) +
        "%0D%0A" +
        encodeURIComponent(
          cantidadTotal === true ? "" : "Descuento: $" + total2
        ) +
        "%0D%0A" +
        encodeURIComponent(
          cantidadTotal === true ? "" : "Total a pagar: $" + total
        ) +
        "%0D%0A" +
        encodeURIComponent("Gracias!")
      }`
    );
    // setTimeout(() => {
    //   dispatch(borrarCarritoTotal());
    // }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `(${carrito.length}) Carrito`;
  }, [carrito.length]);

  useEffect(() => {
    const carr = document.querySelector(".carr");

    gsap.from(carr, { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <>
      <Container maxWidth="lg" className="carr">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography variant="h4" component="div" textAlign="center">
            <ShoppingCartIcon /> CARRITO
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
                <RemoveShoppingCartIcon sx={{ mr: "10px" }} /> Eliminar todo
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
                <RemoveShoppingCartIcon sx={{ mr: "10px" }} /> Eliminar todo
              </Button>
            </>
          ) : null}
          <Typography variant="h5" component="div" textAlign="center">
            {carrito.length > 0
              ? cantidadTotal === true
                ? "Total: $ " + total1
                : "Total: $ " + total
              : null}
          </Typography>

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
                    <Typography
                      variant="h5"
                      component="div"
                      textAlign="center"
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      No hay ningun producto en carrito
                    </Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      textAlign="center"
                      sx={{ display: { xs: "block", md: "none" } }}
                    >
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
                      <AddShoppingCartIcon sx={{ mr: "10px" }} /> Agregar
                      Productos
                    </Button>
                  </Grid>
                </>
              ) : (
                carrito.map((producto) => (
                  <Grid item xs={4} sm={12} md={12} key={producto.id}>
                    <CardCarrito
                      nombre={producto.nombre}
                      imagen={producto.imagen}
                      precio={Number(producto.precio)}
                      id={producto.id}
                      descripcion={producto.descripcion}
                      tipo="carrito"
                      precioDescuento={producto.precioDescuento}
                      cantidad={producto.cantidad}
                      descuento={producto.descuento}
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
                      Solicitar presupuesto a Whatsapp{" "}
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ marginLeft: "2%" }}
                      />
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
                      Solicitar presupuesto a Whatsapp{" "}
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ marginLeft: "2%" }}
                      />
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
