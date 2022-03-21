import { db } from './../../../../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarRepuesto = async ({
	id,
	marca,
	modelo,
    precio,
	descripcion,
	imagen
}) => {
	const documento = doc(db, 'repuesto', id);

	return await updateDoc(documento, {
		marca: marca,
		modelo: modelo,
		precio: precio,
		descripcion: descripcion,
		imagen: imagen,
	});
};

export default editarRepuesto;
