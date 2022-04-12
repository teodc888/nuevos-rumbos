import { db } from './../../../../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarRepuesto = async ({
	id,
	nombre,
    precio,
	descripcion,
	imagen
}) => {
	const documento = doc(db, 'repuesto', id);

	return await updateDoc(documento, {
		nombre: nombre,
		precio: precio,
		descripcion: descripcion,
		imagen: imagen,
	});
};

export default editarRepuesto;
