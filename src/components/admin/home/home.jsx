import React, { useEffect } from 'react';

//Mui
import { Button, Stack, Typography } from '@mui/material';

//Router
import { useNavigate } from 'react-router';

export default function HomeAdmin() {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Admin';
	}, []);

	const handleClickNavigateFormulario = () => {
		navigate('/formulario');
	};

	const handleClickNavigateEditarAutos = () => {
		navigate('/editarAutos');
	};

	const handleClickNavigateEditarMotos = () => {
		navigate('/editarMotos');
	};

	const handleClickNavigateEditarRepuestos = () => {
		navigate('/editarRepuestos');
	};

	return (
		<div>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="center"
				spacing={2}
			>
				<Typography variant="h2" component="div" textAlign="center">
					Bienvenido Admin
				</Typography>
				<Button onClick={handleClickNavigateFormulario}>FORMULARIO</Button>
				<Button onClick={handleClickNavigateEditarAutos}>Editar Autos</Button>
				<Button onClick={handleClickNavigateEditarMotos}>Editar Motos</Button>
				<Button onClick={handleClickNavigateEditarRepuestos}>
					Editar Repuestos
				</Button>
			</Stack>
		</div>
	);
}
