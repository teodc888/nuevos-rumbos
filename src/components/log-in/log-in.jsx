import React, { useState, useEffect } from 'react';
// package's
import { Grid, Paper, TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
// recursos de firebase
import { auth } from './../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
// logo svg
import { ReactComponent as InconLogIn } from './../../images/login.svg';

const LogIn = () => {

	useEffect(() => {
		document.title = 'Iniciar Sesion';
	}, []);

	// creamos estado a los inputs
	const [correo, establecerCorreo] = useState('');
	const [contraseña, establecerContraseña] = useState('');
	// creamos el estado para el navigate
	const navigate = useNavigate();

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
			Swal.fire({
				title: 'Error!',
				text: 'ingrese un correo valido',
				icon: 'error',
				confirmButtonText: 'Ok',
				width: '30%',
			});
			return; //el return es para que deje de ejecutar codigo en caso que se cumpla la condicion
		}
		if (correo === '' || contraseña === '') {
			Swal.fire({
				title: 'Error!',
				text: 'completa todos los campos',
				icon: 'error',
				confirmButtonText: 'Ok',
				width: '30%',
			});
			return; //el return es para que deje de ejecutar codigo en caso que se cumpla la condicion
		}
		try {
			// enviamos los datos a firebase
			await signInWithEmailAndPassword(auth, correo, contraseña);
			Swal.fire({
				text: 'se inicio sesion',
				confirmButtonText: 'Ok',
				icon: 'success',
				width: '30%',
				timer: 2500,
			});
			// redireccionamos la pagina a inicio
			navigate('/');
		} catch (error) {
			let mensaje;
			// creamos switch para cada tipo de error
			switch (error.code) {
				case 'auth/wrong-password':
					mensaje = 'Contraseña incorrecta.';
					break;
				case 'auth/user-not-found':
					mensaje = 'El correo que ingreso no esta registrado.';
					break;
				default:
					mensaje = 'Hubo un error al intentar ingresar a la cuenta.';
					break;
			}
			Swal.fire({
				title: 'Error!',
				text: mensaje,
				icon: 'error',
				confirmButtonText: 'Ok',
				width: '30%',
			});
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
						type="email"
						name="email"
						value={correo}
						onChange={handleChange}
						fullWidth
						required
						sx={{ marginBottom: '1%' }}
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
						sx={{ marginTop: '1%' }}
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