import React from "react";

//Mui
import { Stack, Typography, Grid, Box, Button, Container } from "@mui/material";

//Componentes
import Footer from "../footer/footer";
import CardCarrito from "../card/cardCarrito/cardCarrito";

//Redux
import { useSelector } from "react-redux";

//router
import { useNavigate } from "react-router";

export default function Carrito() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/repuestos");
  };

  const carrito = useSelector((state) => state.carrito);

  const botonWhatsapp = () => {
    window.open(
      "https://wa.me/543512550311?text=%C2%A1Hola%21+Te+paso+el+resumen+de+mi+pedido%3A%0D%0APedido%3A+PLCW-BDOF-PX39%0D%0ANombre%3A+Mateo+DellAcqua%0D%0ATel%C3%A9fono%3A+3512550311%0D%0AForma+de+pago%3A+Efectivo%0D%0ATotal%3A+%24+1.280%0D%0APaga+con%3A+1300%0D%0AEntrega%3A+Delivery%0D%0ADirecci%C3%B3n%3A+Almirante+Guillermo+Brown+67%0D%0AReferencia%3A+Entre+la+calle+27+de+abril+y+Dean+Funes%2C+es+una+casa+color+marr%C3%B3n+port%C3%B3n+de+rejas+negro%0D%0AMi+pedido+es%3A%0D%0ABURGERS%0D%0A1x+ARMALA+COMO+VOS+QUIERAS+%28SIMPLE%29%3A+%24+550%0D%0A++++PAN%3A%0D%0A++++-+1x+Pan+de+papa%0D%0A++++TOPPINGS%3A%0D%0A++++-+1x+Lechuga%0D%0A++++-+1x+Tomate%0D%0A++++ADEREZOS%3A%0D%0A++++-+1x+Mayo+casera%0D%0A++++-+1x+Ketchup%0D%0A1x+ARMALA+COMO+VOS+QUIERAS+%28DOBLE%29%3A+%24+630%0D%0A++++PAN%3A%0D%0A++++-+1x+Pan+de+papa%0D%0A++++TOPPINGS%3A%0D%0A++++-+1x+Lechuga%0D%0A++++-+1x+Bacon%0D%0A++++-+1x+Cebolla+Caramelizada%0D%0A++++ADEREZOS%3A%0D%0A++++-+1x+Mayo+casera%0D%0A++++-+1x+Ketchup%0D%0A++++-+1x+Mostaza%0D%0ASubtotal%3A+%24+1.180%0D%0ACosto+de+env%C3%ADo%3A+%24+100%0D%0ATOTAL%3A+%24+1.280%0D%0AEspero+tu+respuesta+para+confirmar+mi+pedido"
    );
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
        </Stack>
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
                <Grid item xs={12} sm={12} md={12} sx={{ mb: "40%", display:"flex", justifyContent:"center", textAlign:"center" }}>
                  <Button onClick={handleClick} color="success" variant="contained" sx={{bgcolor:"green", color:"white"}}>Agregar Productos</Button>
                </Grid>
              </>
            ) : (
              carrito.map((producto) => (
                <Grid item xs={4} sm={4} md={12} key={producto.id}>
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
            <Grid item xs={12} sm={12} md={12}>
              {carrito.length > 0 ? (
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "100%", bgcolor: "green" }}
                  onClick={botonWhatsapp}
                >
                  Solicitar presupuesto a Whatsapp
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
