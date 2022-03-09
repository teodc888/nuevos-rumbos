import { db } from './../../../../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarAuto = async ({
	id,
	marca,
	modelo,
	cilindrada,
	cv,
	km,
	year,
	precio,
	descripcion,
	imagen
}) => {
	const documento = doc(db, 'moto', id);

	return await updateDoc(documento, {
		marca: marca,
		modelo: modelo,
		cilindrada: cilindrada,
		cv: cv,
		kilometros: km,
		año: year,
		precio: precio,
		descripcion: descripcion,
		imagen: imagen,
	});
};

export default editarAuto;
