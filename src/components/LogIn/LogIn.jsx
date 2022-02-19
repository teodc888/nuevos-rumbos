import React from 'react';
// package's
import { Grid, Paper, TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
// logo svg
import { ReactComponent as InconLogIn } from './../../images/login.svg';

const LogIn = () => {
	const paperStyle = {
		padding: 20,
		height: 'auto',
		width: 280,
		margin: '20px auto',
	};

	const useStyle = makeStyles({
		root: {
			width: '100%',
			maxHeight: '8rem',
			marginBottom: '1.25rem',
		},
	});
	const btnstyle = { margin: '8px 0' };
	const svgStyle = useStyle();

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<InconLogIn className={svgStyle.root} />
					<h2>Iniciar Sesion</h2>
				</Grid>
				<TextField
					label="Correo"
					placeholder="nombre@correo.com"
					type="email"
					fullWidth
					required
                    sx={{marginBottom:"2%"}}
				/>
				<TextField
					label="Contraseña"
					placeholder="ingrese contraseña"
					type="password"
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
			</Paper>
		</Grid>
	);
};

export default LogIn;
