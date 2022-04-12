import { db } from './../../../../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarAuto = async ({
	id,
	marca,
	modelo,
	motor,
	cv,
	km,
	year,
	puertas,
	carroceria,
	combustible,
	gnv,
	transmision,
	precio,
	destacado,
	descripcion,
	imagen,
}) => {
	const documento = doc(db, 'auto', id);

	return await updateDoc(documento, {
		marca: marca,
		modelo: modelo,
		motor: motor,
		cv: cv,
		kilometros: km,
		año: year,
		puertas: puertas,
		carroceria: carroceria,
		combustible: combustible,
		gnv: gnv,
		transmision: transmision,
		precio: precio,
		destacado: destacado,
		descripcion: descripcion,
		imagen: imagen,
	});
};

export default editarAuto;
