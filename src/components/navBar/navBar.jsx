import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Buscador from '../buscador/buscador';
import { useNavigate } from 'react-router';

export default function NavBar() {
  const navigate = useNavigate();

  const handleClickFormulario = () => {
    navigate('/formulario');
  };

  const handleClickHome = () => {
    navigate('/');
  };
  const handleClickLogIn = () => {
    navigate('/log-in');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#4a148c"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer" }} onClick={handleClickHome}>
            Nuevos Rumbos
          </Typography>
          <Buscador />
          <Button color="inherit" onClick={handleClickLogIn}>Login</Button>
          <Button onClick={handleClickFormulario} color="inherit">Formulario</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}