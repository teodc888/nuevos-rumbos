import React from 'react';
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
		width: '90%',
	};
	const useStyle = makeStyles({
		root: {
			width: '80%',
			margin: 'auto',
			backgroundColor: '#e0e0e0',
		},
	});
	const formStyle = useStyle();

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
					sx={12}
					style={{ padding: '1%' }}
				>
					<TextField
						variant="outlined"
						fullWidth
						type="text"
						label="Marca"
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						label="Motor"
						variant="outlined"
						name="motor"
						type="text"
						fullWidth
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						fullWidth
						variant="outlined"
						type="number"
						label="Kilometros"
						min="1"
						pattern="^[0-9]+"
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						label="Puertas"
						variant="outlined"
						name="puertas"
						type="number"
						fullWidth
						sx={{ marginTop: '2%' }}
					/>

					<TextField
						select
						label="Combustible"
						name="combustible"
						fullWidth
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
						label="Transmision"
						variant="outlined"
						name="transmision"
						type="text"
						fullWidth
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						label="Precio"
						variant="outlined"
						name="precio"
						type="number"
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
					sx={12}
					style={{ padding: '1%' }}
				>
					<TextField
						variant="outlined"
						fullWidth
						type="text"
						label="Modelo"
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						label="CV"
						variant="outlined"
						name="cv"
						type="text"
						fullWidth
						sx={{ marginTop: '2%' }}
					/>
					<TextField
						label="Año"
						variant="outlined"
						name="año"
						type="number"
						fullWidth
						sx={{ marginTop: '2%' }}
						min="1"
					/>
					<TextField
						variant="outlined"
						fullWidth
						type="number"
						label="Carroceria"
						select
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
						label="GNV"
						name="gnv"
						fullWidth
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
						style={{ width: '90%', maxHeight: 150 }}
						name="descripcion"
					/>
					<Input type="file" name="imagen" />
				</Grid>
			</Grid>
			<Button
				type="submit"
				color="primary"
				variant="contained"
				// style={btnstyle}
				// fullWidth
				sx={{
					bgcolor: '#4a148c',
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
