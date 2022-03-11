import { useState, useEffect } from 'react';
// firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const useObtenerRepuesto = (id) => {
	// estado donde se guardara el arreglo
	const [repuesto, cambiarRepuesto] = useState('');

	useEffect(() => {
		// ejecutamos la consulta
		const obtenerRepuesto = async () => {
			const documento = await getDoc(doc(db, 'repuesto', id));
			// establecemos el estado con el arreglo
			if (documento.exists()) {
				cambiarRepuesto(documento.data());
			}
		};
		obtenerRepuesto();
	}, [id]);

	return [repuesto];
};
export default useObtenerRepuesto;
