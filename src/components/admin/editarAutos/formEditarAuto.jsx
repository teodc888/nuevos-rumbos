import { useState } from 'react';
// packages
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useObtenerAuto from '../../../hooks/useObtenerAutos';
// Mui
import {
	Grid,
	TextField,
	TextareaAutosize,
	MenuItem,
	Button,
	Input,
	InputLabel,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const FormEditarAuto = () => {
	// estilos
	const containerStyle = {
		padding: '5%',
		margin: '2.5% auto',
		borderRadius: '2px',
	};
	const useStyle = makeStyles({
		root: {
			width: '80%',
			margin: 'auto',
			backgroundColor: '#8c8c8c',
		},
	});
	const formStyle = useStyle();
	
	// funcion para obtener los autos
	const {id} = useParams();
	const [auto] = useObtenerAuto(id);
	console.log(auto.marca);
	// states
	const [marca, cambiarMarca] = useState(auto.marca);
	const [modelo, cambiarModelo] = useState();
	const [motor, cambiarMotos] = useState();
	const [cv, cambiarCv] = useState();
	const [km, cambiarKm] = useState();
	const [year, cambiarYear] = useState();
	const [puertas, cambiarPuertas] = useState();
	const [carroceria, cambiarCarroceria] = useState('sedan');
	const [combustible, cambiarCombustible] = useState('Nafta');
	const [gnv, cambiarGnv] = useState('no');
	const [transmision, cambiarTransmision] = useState();
	const [precio, cambiarPrecio] = useState();
	const [descripcion, cambiarDescripcion] = useState();

	// funciones
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form align="center" className={formStyle.root} onSubmit={handleSubmit}>
			<Grid container style={containerStyle}>
				<Grid
					item
					xl={6}
					lg={6}
					md={6}
					sm={6}
					// sx={12}
					style={{ padding: '1%' }}
				>
					<TextField
						variant="outlined"
						fullWidth
						type="text"
						label="Marca"
						value={marca}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="Motor"
						name="motor"
						type="text"
						value={motor}
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						variant="outlined"
						fullWidth
						label="Kilometros"
						type="number"
						value={km}
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						variant="outlined"
						fullWidth
						label="Puertas"
						name="puertas"
						type="number"
						value={puertas}
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						select
						fullWidth
						label="Combustible"
						name="combustible"
						value={combustible}
						sx={{ marginTop: '2%' }}
					>
						<MenuItem name="combustible" value={'Nafta'}>
							Nafta
						</MenuItem>
						<MenuItem name="combustible" value={'Diesel'}>
							Diesel
						</MenuItem>
					</TextField>
					<TextField
						variant="outlined"
						fullWidth
						label="Transmision"
						name="transmision"
						type="text"
						value={transmision}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="Precio"
						name="precio"
						type="number"
						value={precio}
						sx={{ marginTop: '2%' }}
					/>
				</Grid>
				<Grid
					item
					xl={6}
					lg={6}
					md={6}
					sm={6}
					// sx={12}
					style={{ padding: '1%' }}
				>
					<TextField
						variant="outlined"
						fullWidth
						label="Modelo"
						type="text"
						value={modelo}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="CV"
						name="cv"
						type="text"
						value={cv}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="Año"
						name="año"
						type="number"
						value={year}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						select
						fullWidth
						type="number"
						label="Carroceria"
						value={carroceria}
						sx={{ marginTop: '2%' }}
					>
						<MenuItem name="carroceria" value={'sedan'}>
							Sedán
						</MenuItem>
						<MenuItem name="carroceria" value={'compacto'}>
							Compacto
						</MenuItem>
						<MenuItem name="carroceria" value={'familiar'}>
							Familiar
						</MenuItem>
						<MenuItem name="carroceria" value={'Coupe'}>
							Coupé
						</MenuItem>
						<MenuItem name="carroceria" value={'todoterreno'}>
							Todoterreno
						</MenuItem>
						<MenuItem name="carroceria" value={'descapotable'}>
							Descapotable
						</MenuItem>
						<MenuItem name="carroceria" value={'suv'}>
							SUV
						</MenuItem>
					</TextField>
					<TextField
						select
						fullWidth
						label="GNV"
						name="gnv"
						value={gnv}
						sx={{ marginTop: '2%' }}
					>
						<MenuItem name="gnv" value={'si'}>
							Si
						</MenuItem>
						<MenuItem name="gnv" value={'no'}>
							No
						</MenuItem>
					</TextField>
					<InputLabel id="demo-simple-select-label" sx={{ marginTop: '2%' }}>
						Descripcion
					</InputLabel>
					<TextareaAutosize
						placeholder="Descripcion"
						id="demo-simple-select-label"
						name="descripcion"
						value={descripcion}
						style={{ width: '90%', maxHeight: 150 }}
					/>
					<Input type="file" name="imagen" />
				</Grid>
			</Grid>
			<Button
				type="submit"
				color="primary"
				variant="contained"
				sx={{
					bgcolor: 'green',
					color: 'white',
					marginBottom: '5%',
					width: '60%',
				}}
			>
				Guardar
			</Button>
		</form>
	);
};

export default FormEditarAuto;
