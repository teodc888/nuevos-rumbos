import React, { useState } from 'react';
// packages
import {
	Grid,
	TextField,
	MenuItem,
	TextareaAutosize,
	InputLabel,
	Input,
	IconButton,
	Popover,
	Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Swal from 'sweetalert2';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
// recursos de firebase
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
// components
import BtnGuardar from './btnFormularioAuto';
import DropZone from './dropZoneAuto';

export default function FormularioAuto() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		gnv: 'no',
		carroceria: 'Coupe',
		combustible: 'nafta',
		detalle: 'auto',
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSelectChangeGnv = function (e) {
		setInput({ ...input, gnv: e.target.value });
	};

	const handleSelectChangeCombustible = function (e) {
		setInput({ ...input, combustible: e.target.value });
	};

	const handleSelectChangeCarroceria = function (e) {
		setInput({ ...input, carroceria: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const docRef = await addDoc(collection(db, 'auto'), input);
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
		setInput({ ...input, imagen: file.secure_url  });
	};
	const [anchorEl, setAnchorEl] = React.useState(null);


	console.log(input)

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

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
				id="myform-formAuto"
				className={formStyle.root}
				onSubmit={handleSubmit}
			>
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
						<h1 className="App">Auto</h1>
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
							label="motor"
							variant="outlined"
							name="motor"
							onChange={handleChange}
							type="text"
							value={input.motor}
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
							inputProps={{ min: 0 }}
							min={0}
							value={input.kilometros}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<TextField
							label="puertas"
							variant="outlined"
							name="puertas"
							onChange={handleChange}
							type="number"
							inputProps={{ min: 0 }}
							min={0}
							value={input.puertas}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<TextField
							select
							label="combustible"
							name="combustible"
							value={input.combustible}
							onChange={handleSelectChangeCombustible}
							required
							fullWidth
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
							label="transmision"
							variant="outlined"
							name="transmision"
							onChange={handleChange}
							type="text"
							value={input.transmision}
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
							inputProps={{ min: 0 }}
							min={0}
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
							inputProps={{ min: 0 }}
							min={0}
							value={input.año}
							required
							fullWidth
							sx={{ marginTop: '2%' }}
						/>
						<Grid item xs={12}>
							<Grid item xs={12}>
								<TextField
									select
									label="carroceria"
									name="carroceria"
									value={input.carroceria}
									onChange={handleSelectChangeCarroceria}
									required
									fullWidth
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
							</Grid>
							<Grid item xs={12}>
								<IconButton
									onMouseEnter={handlePopoverOpen}
									onMouseLeave={handlePopoverClose}
								>
									<InfoIcon />
								</IconButton>
								<Popover
									id="mouse-over-popover"
									sx={{
										pointerEvents: 'none',
									}}
									open={open}
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									onClose={handlePopoverClose}
									disableRestoreFocus
								>
									<Typography sx={{ p: 1 }}>
										Sedán o berlina: carrocería de tres volúmenes.
									</Typography>
									<Typography sx={{ p: 1 }}>
										Compacto: carrocería de tres o cinco puertas en la que el
										portón trasero incluye la luneta, haciendo posible el acceso
										al habitáculo de los pasajeros.
									</Typography>
									<Typography sx={{ p: 1 }}>
										Familiar: Carrocería de techo elevado hasta el portón
										trasero que permite un amplio espacio de acceso y carga.
									</Typography>
									<Typography sx={{ p: 1 }}>
										Coupé: carrocería de dos o tres volúmenes con dos puertas
										acristaladas.
									</Typography>
									<Typography sx={{ p: 1 }}>
										Todoterreno: diseñado para ofrecer sus mejores prestaciones
										fuera de las carreteras asfaltadas y dotado de una mayor
										altura al suelo, así como interior en el habitáculo.
									</Typography>
									<Typography sx={{ p: 1 }}>
										Descapotable: techo plegable o capota, generalmente de tela
										o rígida articulada.
									</Typography>
									<Typography sx={{ p: 1 }}>
										SUV: la carrocería de moda actualmente, parte de la base de
										un turismo, pero gana altura con respecto al suelo e
										interior, aunque no permite un uso en campo equiparable al
										de los todoterreno.
									</Typography>
								</Popover>
							</Grid>
						</Grid>
						<TextField
							select
							label="GNV"
							name="gnv"
							value={input.gnv}
							onChange={handleSelectChangeGnv}
							required
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
						<InputLabel sx={{ marginTop: '2%' }}>Descripcion</InputLabel>
						<TextareaAutosize
							onChange={handleChange}
							name="descripcion"
							required
							maxRows={10}
							style={{ width: '90%', maxHeight: 150 }}
						/>
						<InputLabel sx={{ marginTop: '2%' }}>Imagen</InputLabel>
						{/* <Input type="file" name="imagen" onChange={handleFiles} required /> */}
						< DropZone />
					</Grid>
				</Grid>
				<BtnGuardar />
			</form>
		</>
	);
}
