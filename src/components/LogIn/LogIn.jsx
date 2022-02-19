import React, { useState } from 'react';
// package's
import { Grid, Paper, TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
// recursos de firebase
import { auth } from './../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
// logo svg
import { ReactComponent as InconLogIn } from './../../images/login.svg';

const LogIn = () => {
	// creamos estado a los inputs
	const [correo, establecerCorreo] = useState('');
	const [contraseña, establecerContraseña] = useState('');

	// cargamos los inputs en cada estado
	const handleChange = (e) => {
		if (e.target.name === 'email') {
			establecerCorreo(e.target.value);
		} else if (e.target.name === 'password') {
			establecerContraseña(e.target.value);
		}
	};
	//verificamos el usuario
	const handleSubmit = async (e) => {
		e.preventDefault();

		// expresion para verificar que se ingrese un mail
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		if (!expresionRegular.test(correo)) {
			console.log('ingrese un correo valido');
		}
		if (correo === '' || contraseña === '') {
			console.log('completa todos los campos');
		}
	};

	// estilos del paper
	const paperStyle = {
		padding: 20,
		height: 'auto',
		width: 280,
		margin: '20px auto',
	};
	// modificamos los estilos del svg
	const useStyle = makeStyles({
		root: {
			width: '100%',
			maxHeight: '8rem',
			marginBottom: '1.25rem',
		},
	});
	// variables con los estilos
	const btnstyle = { margin: '8px 0' };
	const svgStyle = useStyle();

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<InconLogIn className={svgStyle.root} />
					<h2>Iniciar Sesion</h2>
				</Grid>
				<form onSubmit={handleSubmit}>
					<TextField
						label="Correo"
						placeholder="nombre@correo.com"
						// type="email"
						name="email"
						value={correo}
						onChange={handleChange}
						fullWidth
						// required
						sx={{ marginBottom: '2%' }}
					/>
					<TextField
						label="Contraseña"
						placeholder="ingrese contraseña"
						type="password"
						name="password"
						value={contraseña}
						onChange={handleChange}
						fullWidth
						required
					/>
					<Button
						type="submit"
						color="primary"
						variant="contained"
						style={btnstyle}
						fullWidth
					>
						Ingresar
					</Button>
				</form>
			</Paper>
		</Grid>
	);
};

export default LogIn;
