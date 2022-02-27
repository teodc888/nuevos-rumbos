import React from 'react';
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
import { useSelector } from 'react-redux';

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
	// funcion para obtener los autos
	const autos = useSelector((state) => state.autos);

	// creamos tabla responsive
	// const tableResponsive = () => ({
	// 	root: { width: '100%', overflowX: 'auto' },
	// table: { width: '95%', display: 'block', overflowX: 'none' },
	// });
	return (
		<TableContainer component={Paper} sx={{ marginTop: '1%' }} maxWidth="sm">
			<Table sx={{ minWidth: 'auto' }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>IMAGEN</StyledTableCell>
						<StyledTableCell align="center">NOMBRE DEL AUTO</StyledTableCell>
						<StyledTableCell align="center">EDITAR</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{autos.map((auto) => (
						<StyledTableRow key={auto.id}>
							<StyledTableCell component="th" scope="row">
								<Avatar
									src={auto.imagen}
									alt={auto.marca}
									sx={{ width: 150, height: 150 }}
									variant="rounded"
								/>
							</StyledTableCell>
							<StyledTableCell align="center">
								<h6>{auto.marca + ' - ' + auto.modelo}</h6>
							</StyledTableCell>
							<StyledTableCell align="center">
								<Button variant="outlined">EDITAR</Button>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default EditarAutos;
