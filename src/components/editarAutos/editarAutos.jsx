import React from 'react';
// 
// material ui
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
	const autos = useSelector((state)=>state.autos);
	return (
		<TableContainer component={Paper} sx={{marginTop:'1%'}}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
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
								<ImageList sx={{ width: 250, height: 100 }}>
									<ImageListItem>
										<img
											src={auto.imagen}
											alt={auto.marca}
										/>
									</ImageListItem>
								</ImageList>
							</StyledTableCell>
							<StyledTableCell align="center">{auto.marca + ' - ' + auto.modelo}</StyledTableCell>
							<StyledTableCell align="center"><Button variant="outlined">EDITAR</Button></StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default EditarAutos;
