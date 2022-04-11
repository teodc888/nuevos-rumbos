import { useEffect, useState } from 'react';
// packages
import { useParams, useNavigate } from 'react-router';
import useObtenerAuto from '../../../hooks/useObtenerAutos';
import Swal from 'sweetalert2';
// consulta firebase
import editarAuto from './consultas/editarAutoFirebase';
// Mui
import {
	Grid,
	TextField,
	TextareaAutosize,
	MenuItem,
	InputLabel,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
// components
import BtnGuardar from './components/btn-guardar';
import DropZone from '../formulario/dropZone/dropZone';

const FormEditarAuto = () => {
	const navigate = useNavigate();
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
			cambiarImagen(auto.imagen);
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
	const [imagen, cambiarImagen] = useState('');


	// funciones
	const handleSubmit = (e) => {
		e.preventDefault();
		// comprobamos que los campos no esten vacios
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
				descripcion,
				imagen,
			});
			Swal.fire({
				text: 'Datos actualizados',
				confirmButtonText: 'Ok',
				icon: 'success',
				width: 'auto',
			});
			navigate('/editarAutos');
		} else {
			Swal.fire({
				title: 'Error!',
				text: 'Hay campos incompletos',
				icon: 'error',
				confirmButtonText: 'Ok',
				width: 'auto',
			});
		}
	};
	// bloqueamos el submit por enter
	const preventEnter = (e) => {
		e.key === 'Enter' && e.preventDefault();
	};
	// permitioms modificar el input
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
			case 'imagen':
				return cambiarImagen(e.target.files);
			default:
				break;
		}
	};

	// estilos
	const containerStyle = {
		padding: '5%',
		margin: '2.5% auto',
		borderRadius: '2px',
		width: '90%',
	};
	const useStyle = makeStyles({
		root: {
			width: '80%',
			margin: 'auto',
			backgroundColor: '#8c8c8c',
		},
	});
	const formStyle = useStyle();

	return (
		<form
			align="center"
			id="myform-auto"
			className={formStyle.root}
			onSubmit={handleSubmit}
		>
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
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
						onKeyPress={preventEnter}
						onChange={handleChange}
						maxRows={10}
						style={{ width: '100%', maxHeight: 150 }}
					/>
					<InputLabel sx={{ marginTop: '2%' }}>Imagen</InputLabel>
					<DropZone name="imagen" onChange={handleChange} setInput={cambiarImagen} input={imagen} tipo={true}/>
				</Grid>
			</Grid>
			<BtnGuardar />
		</form>
	);
};

export default FormEditarAuto;
