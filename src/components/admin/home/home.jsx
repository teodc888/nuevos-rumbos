import React, { useEffect } from 'react';

//Mui
import { Stack, Typography, Box, Grid } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ConstructionIcon from '@mui/icons-material/Construction';

//Componentes
import CardAdmin from '../cardAdmin/cardAdmin';
import CardEstadisticas from '../cardEstadisticas/cardEstadisticas';

//Redux
import { useSelector } from 'react-redux';
const admin = [
	{
		id: '1',
		titulo: 'Cargar Autos',
		imagen: <DirectionsCarIcon />,

		boton: '/formularioAuto',
	},
	{
		id: '2',
		titulo: 'Editar Autos',
		imagen: <DirectionsCarIcon />,
		boton: '/editarAutos',
	},
	{
		id: '3',
		titulo: 'Cargar Motos',
		imagen: <TwoWheelerIcon />,
		boton: '/formularioMoto',
	},
	{
		id: '4',
		titulo: 'Editar Motos',
		imagen: <TwoWheelerIcon />,
		boton: '/editarMotos',
	},
	{
		id: '5',
		titulo: 'Cargar Repuestos',
		imagen: <ConstructionIcon />,
		boton: '/formularioRepuesto',
	},
	{
		id: '6',
		titulo: 'Editar Repuestos',
		imagen: <ConstructionIcon />,
		boton: '/editarRepuestos',
	},
];

export default function HomeAdmin() {
	useEffect(() => {
		document.title = 'Admin';
	}, []);

	const autos = useSelector((state) => state.autos);
	const motos = useSelector((state) => state.motos);
	const repuestos = useSelector((state) => state.repuestos);

	return (
		<div>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="center"
				spacing={2}
			>
				<Typography variant="h2" component="div" textAlign="center">
					BIENVENIDO ADMIN
				</Typography>
				<Box sx={{ width: '100%', marginTop: '3%' }}>
					<Grid
						container
						spacing={{ xs: 4, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{admin &&
							admin.map((producto) => (
								<Grid item xs={4} sm={4} md={2} key={producto.id}>
									<CardAdmin
										titulo={producto.titulo}
										imagen={producto.imagen}
										boton={producto.boton}
									/>
								</Grid>
							))}
					</Grid>
				</Box>
				<Box sx={{ width: '100%', marginTop: '3%' }}>
					<Typography variant="h2" component="div" sx={{ mt: '3%', mb: '3%' }}>
						Productos Cargados
					</Typography>
					<Grid
						container
						spacing={{ xs: 4, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						<Grid item xs={12} sm={12} md={12}>
							<CardEstadisticas titulo={'Auto'} numero={autos.length} />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<CardEstadisticas titulo={'Motos'} numero={motos.length} />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<CardEstadisticas
								titulo={'Repuestos'}
								numero={repuestos.length}
							/>
						</Grid>
					</Grid>
				</Box>
			</Stack>
		</div>
	);
}
