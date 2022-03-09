import React from 'react';
// packages
import { getProductosMoto } from '../../../../redux/actions/index';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
// consultas firebase
import eliminarMoto from '../consultas/eliminarMotoFirebase';
// material iu
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


// funcion transition btn comprobar eliminar
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const BtnEliminar = ({ id, marca, modelo }) => {
	// funcion Navigate
	const navigate = useNavigate();

	//Redux
	const dispatch = useDispatch();

	// funciones btn comprobar eliminar
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// funcion eliminar moto
	const eliminar = () => {
		if (eliminarMoto(id)) {
			setTimeout(() => {
				dispatch(getProductosMoto());
			}, 1000);
		} else {
			Swal.fire({
				title: 'Error!',
				text: 'No se pudo eliminar la publicaion',
				icon: 'error',
				confirmButtonText: 'Ok',
				width: 'auto',
			});
			navigate('/editarAutos');
		}
		setOpen(false);
		console.log(id);
	};

	return (
		<>
			<Button variant="outlined" onClick={handleClickOpen}>
				ELIMINAR
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>
					{'Estas seguro que deseas eliminar' +
						' " ' +
						marca +
						' - ' +
						modelo +
						' " '}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Si seleccionas "ELIMINAR" el producto se elimara de forma permanente
						de la base de datos.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={() => eliminar(id)}>ELIMINAR</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default BtnEliminar;
