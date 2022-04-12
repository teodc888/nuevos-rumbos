import { db } from './../../../../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarMoto = async ({
	id,
	marca,
	modelo,
	cilindrada,
	cv,
	km,
	year,
	precio,
	destacado,
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
		destacado: destacado,
		descripcion: descripcion,
		imagen: imagen,
	});
};

export default editarMoto;
