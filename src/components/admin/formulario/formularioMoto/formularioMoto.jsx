import React, { useState } from 'react';
import {
	Grid,
	TextField,
	TextareaAutosize,
	Input,
	InputLabel,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';

// components
import BtnGuardar from './btnFormularioMoto';

export default function FormularioMoto() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		detalle: 'moto',
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const docRef = await addDoc(collection(db, 'moto'), input);
			setInput('');
			Swal.fire({
				text: 'se Cargo con exito',
				confirmButtonText: 'Ok',
				icon: 'success',
				width: '30%',
				timer: 2500,
			});
			console.log('Document written with ID: ', docRef.id);
			navigate('/');
		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: 'completa todos los campos',
				icon: 'error',
				confirmButtonText: 'Ok',
				width: '30%',
			});
			console.error('Error adding document: ', error);
		}
	};

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
		setInput({ ...input, imagen: file.secure_url });
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
		<>
			<form
				align="center"
				id="myform-formMoto"
				className={formStyle.root}
				onSubmit={handleSubmit}
			>
				{/* <h1 className="App">Moto</h1> */}
				<Grid container style={containerStyle}>
					<Grid
						item
						xl={12}
						lg={12}
						md={12}
						sm={12}
						// sx={12}
						style={{ padding: '1%' }}
					>
						<h1 className="App">Moto</h1>
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
							label="marca"
							variant="outlined"
							name="marca"
							onChange={handleChange}
							type="text"
							value={input.marca}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<TextField
							label="cilindrada"
							variant="outlined"
							name="cilindrada"
							onChange={handleChange}
							type="text"
							value={input.cilindrada}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<TextField
							label="kilometros"
							variant="outlined"
							name="kilometros"
							onChange={handleChange}
							type="number"
							value={input.kilometros}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<TextField
							label="precio"
							variant="outlined"
							name="precio"
							onChange={handleChange}
							type="number"
							value={input.precio}
							required
							fullWidth
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
							label="modelo"
							variant="outlined"
							name="modelo"
							onChange={handleChange}
							type="text"
							value={input.modelo}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<TextField
							label="cv"
							variant="outlined"
							name="cv"
							onChange={handleChange}
							type="text"
							value={input.cv}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<TextField
							label="año"
							variant="outlined"
							name="año"
							onChange={handleChange}
							type="number"
							value={input.año}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<InputLabel sx={{ marginTop: '2%' }}>Descripcion</InputLabel>
						<TextareaAutosize
							onChange={handleChange}
							name="descripcion"
							required
							maxRows={10}
							style={{ width: '90%', maxHeight: 150 }}
						/>
						<InputLabel sx={{ marginTop: '2%' }}>Imagen</InputLabel>
						<Input type="file" name="imagen" onChange={handleFiles} required />
					</Grid>

					{/* <Grid item xs={16}>
						<button variant="text">Guardar</button>
					</Grid> */}
				</Grid>
					<BtnGuardar />
			</form>
		</>
	);
}
