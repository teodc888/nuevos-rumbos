import * as React from "react";

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

export default function BasicTable({
  carroceria,
  motor,
  transmision,
  combustible,
  cv,
  puertas,
  gnv,
  tipo,
  cilindrada,
  kilometros,
  modelo,
  año,
  marca,
}) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "5%" }}>
      <Table>
        {tipo === "auto" ? (
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Marca</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{marca}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Modelo</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{modelo}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">año</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{año}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Kilometros</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{kilometros} km</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Carroceria</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" textTransform="capitalize">
                  {carroceria}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Transmision</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{transmision}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Combustible</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{combustible}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">GNV</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{gnv}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6"  textTransform="capitalize">Puertas</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{puertas}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6"  textTransform="capitalize">Motor</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{motor} L</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6" >CV</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{cv} cv</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Marca</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{marca}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Modelo</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{modelo}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Año</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" textTransform="capitalize">{año}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Kilometros</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{kilometros} km</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">Cilindrada</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{cilindrada}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h6">CV</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6"  textTransform="capitalize">{cv} cv</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
