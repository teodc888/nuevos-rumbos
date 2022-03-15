import React, { useEffect } from 'react';
// packages
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getProductosMoto } from '../../../redux/actions/index';
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
import BtnEliminar from './components/btn-eliminar-moto';

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

const EditarMotos = () => {
	// navigate
	const navigate = useNavigate();

	// funcion para obtener los autos
	const motos = useSelector((state) => state.motos);

	// funcion OnCLick
	const editarMoto = (id) => {
		navigate(`/formEditarMoto/${id}`);
	};

	//Redux
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductosMoto());
	}, [dispatch]);
	
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
					{motos.map((moto) => (
						<StyledTableRow key={moto.id}>
							<StyledTableCell component="th" scope="row">
								<Avatar
									src={moto.imagen[0]}
									alt={moto.marca}
									sx={{ width: 150, height: 150 }}
									variant="rounded"
								/>
							</StyledTableCell>
							<StyledTableCell align="center">
								<h6>{moto.marca + ' - ' + moto.modelo}</h6>
							</StyledTableCell>
							<StyledTableCell align="center">
								<Button variant="outlined" onClick={() => editarMoto(moto.id)}>
									EDITAR
								</Button>
							</StyledTableCell>
							<StyledTableCell align="center">
								<BtnEliminar
									id={moto.id}
									modelo={moto.modelo}
									marca={moto.marca}
								/>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default EditarMotos;
