import { useState, useEffect } from 'react';
// firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const useObtenerMoto = (id) => {
	// estado donde se guardara el arreglo
	const [moto, cambiarMoto] = useState('');

	useEffect(() => {
		// ejecutamos la consulta
		const obtenerMoto = async () => {
			const documento = await getDoc(doc(db, 'moto', id));
			// establecemos el estado con el arreglo
			if (documento.exists()) {
				cambiarMoto(documento.data());
			}
		};
		obtenerMoto();
	}, [id]);

	return [moto];
};
export default useObtenerMoto;
