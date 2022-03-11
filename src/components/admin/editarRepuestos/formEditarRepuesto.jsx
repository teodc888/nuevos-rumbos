import { useEffect, useState } from 'react';
// packages
import { useParams, useNavigate } from 'react-router';
import useObtenerRepuesto from '../../../hooks/useObtenerRepuesto';
import Swal from 'sweetalert2';
// consulta firebase
import editarRepuesto from './consultas/editarRepuestoFirebase';
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
import BtnGuardar from './components/btn-guardar-repuesto';

const FormEditarRepuesto = () => {
	const navigate = useNavigate();

	// funcion para obtener los repuestos
	const { id } = useParams();
	const [repuesto] = useObtenerRepuesto(id);

	// states
	useEffect(() => {
		if (repuesto) {
			cambiarMarca(repuesto.marca);
			cambiarModelo(repuesto.modelo);
			cambiarPrecio(repuesto.precio);
			cambiarDescripcion(repuesto.descripcion);
			cambiarImagen(repuesto.imagen);
		}
	}, [repuesto]);

	const [marca, cambiarMarca] = useState('');
	const [modelo, cambiarModelo] = useState('');
	const [precio, cambiarPrecio] = useState('');
	const [descripcion, cambiarDescripcion] = useState('');
	const [imagen, cambiarImagen] = useState('');

	// funciones
	const handleSubmit = (e) => {
		e.preventDefault();
		// comprobamos que los campos no esten vacios
		if (marca !== '' && modelo !== '' && precio !== '' && descripcion !== '') {
			editarRepuesto({
				id,
				marca,
				modelo,
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
			navigate('/editarRepuestos');
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
			case 'precio':
				return cambiarPrecio(e.target.value.replace(/[^0-9.]/g, ''));
			case 'descripcion':
				return cambiarDescripcion(e.target.value);
			default:
				break;
		}
	};

	// ejecutamos el cambio en el input de la imagen
	const handleFiles = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'Product_photo ');
		const res = await fetch(
			'https://api.cloudinary.com/v1_1/djtkn6o7r/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		const file = await res.json();
		cambiarImagen(file.secure_url);
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
			id="myform-repuesto"
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
						style={{ width: '90%', maxHeight: 150 }}
					/>
					<Input type="file" name="imagen" onChange={handleFiles} />
				</Grid>
			</Grid>
			<BtnGuardar />
		</form>
	);
};

export default FormEditarRepuesto;
