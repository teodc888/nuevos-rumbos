import React, { useEffect } from 'react';
// packages
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getProductosAuto } from '../../../redux/actions/index';
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
import BtnEliminar from './components/btn-eliminar';

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

const EditarAutos = () => {
	//Redux
	const dispatch = useDispatch();

	// funcion Navigate
	const navigate = useNavigate();
	
	// funcion para obtener los autos
	const autos = useSelector((state) => state.autos);

	// funcion OnCLick
	const editarAuto = (id) => {
		navigate(`/formEditarAuto/${id}`);
	};

	useEffect(() => {
		dispatch(getProductosAuto());
	}, [dispatch]);

	return (
		<TableContainer component={Paper} sx={{ marginTop: '1%' }}>
			<Table sx={{ minWidth: 'auto' }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>IMAGEN</StyledTableCell>
						<StyledTableCell align="center">NOMBRE DEL AUTO</StyledTableCell>
						<StyledTableCell align="center">EDITAR</StyledTableCell>
						<StyledTableCell align="center">ELIMINAR</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{autos.map((auto) => (
						<StyledTableRow key={auto.id}>
							<StyledTableCell component="th" scope="row">
								<Avatar
									src={auto.imagen[0]}
									alt={auto.marca}
									sx={{ width: 150, height: 150 }}
									variant="rounded"
								/>
							</StyledTableCell>
							<StyledTableCell align="center">
								<h6>{auto.marca + ' - ' + auto.modelo}</h6>
							</StyledTableCell>
							<StyledTableCell align="center">
								<Button variant="outlined" onClick={() => editarAuto(auto.id)}>
									EDITAR
								</Button>
							</StyledTableCell>
							<StyledTableCell align="center">
								<BtnEliminar
									id={auto.id}
									modelo={auto.modelo}
									marca={auto.marca}
								/>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default EditarAutos;
