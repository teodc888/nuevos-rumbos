import { useEffect, useState } from 'react';
// packages
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
// consulta firebase
import editarAuto from './editarAutoFirebase';

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
	const { id } = useParams();
	const [auto] = useObtenerAuto(id);

	// states
	useEffect(() => {
		if (auto) {
			cambiarMarca(auto.marca);
			cambiarModelo(auto.modelo);
			cambiarMotor(auto.motor);
			cambiarCv(auto.cv);
			cambiarKm(auto.kilometros);
			cambiarYear(auto.año);
			cambiarPuertas(auto.puertas);
			cambiarCarroceria(auto.carroceria);
			cambiarCombustible(auto.combustible);
			cambiarGnv(auto.gnv);
			cambiarPrecio(auto.precio);
			cambiarTransmision(auto.transmision);
			cambiarDescripcion(auto.descripcion);
		}
	}, [auto]);

	const [marca, cambiarMarca] = useState('');
	const [modelo, cambiarModelo] = useState('');
	const [motor, cambiarMotor] = useState('');
	const [cv, cambiarCv] = useState('');
	const [km, cambiarKm] = useState('');
	const [year, cambiarYear] = useState('');
	const [puertas, cambiarPuertas] = useState('');
	const [carroceria, cambiarCarroceria] = useState('');
	const [combustible, cambiarCombustible] = useState('');
	const [gnv, cambiarGnv] = useState('');
	const [transmision, cambiarTransmision] = useState('');
	const [precio, cambiarPrecio] = useState('');
	const [descripcion, cambiarDescripcion] = useState('');

	// funciones
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			marca !== '' &&
			modelo !== '' &&
			motor !== '' &&
			cv !== '' &&
			km !== '' &&
			year !== '' &&
			puertas !== '' &&
			carroceria !== '' &&
			combustible !== '' &&
			gnv !== '' &&
			transmision !== '' &&
			precio !== '' &&
			descripcion !== ''
		) {
			console.log(id);
			editarAuto({
				id,
				marca,
				modelo,
				motor,
				cv,
				km,
				year,
				puertas,
				carroceria,
				combustible,
				gnv,
				transmision,
				precio,
				descripcion
			});
		} else {
			console.log('Hay campos incompletos');
		}
	};

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'marca':
				return cambiarMarca(e.target.value);
			case 'modelo':
				return cambiarModelo(e.target.value);
			case 'motor':
				return cambiarMotor(e.target.value);
			case 'cv':
				return cambiarCv(e.target.value);
			case 'km':
				return cambiarKm(e.target.value.replace(/[^0-9.]/g, ''));
			case 'year':
				return cambiarYear(e.target.value.replace(/[^0-9.]/g, ''));
			case 'puertas':
				return cambiarPuertas(e.target.value.replace(/[^0-9.]/g, ''));
			case 'carroceria':
				return cambiarCarroceria(e.target.value);
			case 'combustible':
				return cambiarCombustible(e.target.value);
			case 'gnv':
				return cambiarGnv(e.target.value);
			case 'transmision':
				return cambiarTransmision(e.target.value);
			case 'precio':
				return cambiarPrecio(e.target.value.replace(/[^0-9.]/g, ''));
			case 'descripcion':
				return cambiarDescripcion(e.target.value);
			default:
				break;
		}
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
						label="Marca"
						type="text"
						value={marca}
						name="marca"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="Motor"
						type="text"
						value={motor}
						name="motor"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						variant="outlined"
						fullWidth
						label="Kilometros"
						type="number"
						value={km}
						name="km"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						variant="outlined"
						fullWidth
						label="Puertas"
						type="number"
						value={puertas}
						name="puertas"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						select
						variant="outlined"
						fullWidth
						label="Combustible"
						value={combustible}
						name="combustible"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					>
						<MenuItem name="combustible" value={'nafta'}>
							Nafta
						</MenuItem>
						<MenuItem name="combustible" value={'diesel'}>
							Diesel
						</MenuItem>
					</TextField>
					<TextField
						variant="outlined"
						fullWidth
						label="Transmision"
						type="text"
						value={transmision}
						name="transmision"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="Precio"
						type="number"
						value={precio}
						name="precio"
						onChange={handleChange}
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
						name="modelo"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="CV"
						type="text"
						value={cv}
						name="cv"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						fullWidth
						label="Año"
						type="number"
						value={year}
						name="year"
						onChange={handleChange}
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						variant="outlined"
						select
						fullWidth
						type="number"
						label="Carroceria"
						value={carroceria}
						name="carroceria"
						onChange={handleChange}
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
						variant="outlined"
						fullWidth
						label="GNV"
						value={gnv}
						name="gnv"
						onChange={handleChange}
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
						variant="outlined"
						id="demo-simple-select-label"
						value={descripcion}
						name="descripcion"
						onChange={handleChange}
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
