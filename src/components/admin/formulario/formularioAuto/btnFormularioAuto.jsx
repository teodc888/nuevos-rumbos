import React from 'react';
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

const BtnGuardar = () => {
	// funciones btn comprobar guardar
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				color="primary"
				variant="contained"
				sx={{
					bgcolor: 'green',
					color: 'white',
					marginBottom: '5%',
					width: '60%',
				}}
				onClick={handleClickOpen}
			>
				GUARDAR
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{'Estas seguro que deseas agregar un nuevo producto'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Si seleccionas "GUARDAR" el producto será agregado a tu pagina.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button type="submit" form="myform-formAuto">
						Guardar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default BtnGuardar;
