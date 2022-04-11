import { useEffect, useState } from 'react';
// packages
import { useParams, useNavigate } from 'react-router';
import useObtenerMoto from './../../../hooks/useObtenerMotos';
import Swal from 'sweetalert2';
// consulta firebase
import editarMoto from './consultas/editarMotoFirebase';
// Mui
import {
	Grid,
	TextField,
	TextareaAutosize,
	Input,
	InputLabel,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
// components
import BtnGuardar from './components/btn-guardar-motos';
import DropZone from '../formulario/dropZone/dropZone';

const FormEditarMoto = () => {
	const navigate = useNavigate();
    
	// funcion para obtener las motos
	const { id } = useParams();
	const [moto] = useObtenerMoto(id);

	// states
	useEffect(() => {
		if (moto) {
			cambiarMarca(moto.marca);
			cambiarModelo(moto.modelo);
			cambiarCilindrada(moto.cilindrada);
			cambiarCv(moto.cv);
			cambiarKm(moto.kilometros);
			cambiarYear(moto.año);
			cambiarPrecio(moto.precio);
			cambiarDescripcion(moto.descripcion);
			cambiarImagen(moto.imagen);
		}
	}, [moto]);

	const [marca, cambiarMarca] = useState('');
	const [modelo, cambiarModelo] = useState('');
	const [cilindrada, cambiarCilindrada] = useState('');
	const [cv, cambiarCv] = useState('');
	const [km, cambiarKm] = useState('');
	const [year, cambiarYear] = useState('');
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
			cilindrada !== '' &&
			cv !== '' &&
			km !== '' &&
			year !== '' &&
			precio !== '' &&
			descripcion !== ''
		) {
			editarMoto({
				id,
				marca,
				modelo,
				cilindrada,
				cv,
				km,
				year,
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
			navigate('/editarMotos');
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
			case 'cilindrada':
				return cambiarCilindrada(e.target.value.replace(/[^0-9.]/g, ''));
			case 'cv':
				return cambiarCv(e.target.value);
			case 'km':
				return cambiarKm(e.target.value.replace(/[^0-9.]/g, ''));
			case 'year':
				return cambiarYear(e.target.value.replace(/[^0-9.]/g, ''));
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
			id="myform-moto"
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
						label="cilindrada"
						type="number"
						value={cilindrada}
						name="cilindrada"
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

export default FormEditarMoto;
