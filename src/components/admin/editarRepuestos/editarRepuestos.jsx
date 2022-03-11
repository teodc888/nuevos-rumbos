import React, { useEffect } from 'react';
// packages
// import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
// import { getProductosRepuesto } from '../../../redux/actions/index';
// material ui
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// components
// import BtnEliminar from './components/btn-eliminar-moto';
import BtnEliminar from './components/btn-eliminar-repuesto';

// estilos de tabla
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const EditarRepuestos = () => {
	// navigate
	// const navigate = useNavigate();

	// funcion para obtener los autos
	const repuestos = useSelector((state) => state.repuestos);
	console.log(repuestos);

	// funcion OnCLick
	// const editarMoto = (id) => {
	// 	navigate(`/formEditarMoto/${id}`);
	// };

	//Redux
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getProductosMoto());
	// }, [dispatch]);

	return (
		<TableContainer component={Paper} sx={{ marginTop: '1%' }}>
			<Table sx={{ minWidth: 'auto' }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>IMAGEN</StyledTableCell>
						<StyledTableCell align="center">NOMBRE DE LA MOTO</StyledTableCell>
						<StyledTableCell align="center">EDITAR</StyledTableCell>
						<StyledTableCell align="center">ELIMINAR</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{repuestos.map((repuesto) => (
						<StyledTableRow key={repuesto.id}>
							<StyledTableCell component="th" scope="row">
								<Avatar
									src={repuesto.imagen}
									alt={repuesto.marca}
									sx={{ width: 150, height: 150 }}
									variant="rounded"
								/>
							</StyledTableCell>
							<StyledTableCell align="center">
								<h6>{repuesto.marca + ' - ' + repuesto.modelo}</h6>
							</StyledTableCell>
							<StyledTableCell align="center">
								<Button variant="outlined">
									EDITAR
								</Button>
							</StyledTableCell>
							<StyledTableCell align="center">
								<BtnEliminar
									id={repuesto.id}
									marca={repuesto.marca}
									modelo={repuesto.modelo}
								/>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default EditarRepuestos;
