import { useState, useEffect } from 'react';
// firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const useObtenerAuto = (id) => {
	const [auto, cambiarAuto] = useState('');
	useEffect(() => {
		const obtenerAuto = async () => {
			const documento = await getDoc(doc(db, 'auto', id));
			// establecemos el estado con el arreglo
			 cambiarAuto(documento.data());
		};
		obtenerAuto();
	}, [id]);

	return [auto];
};
export default useObtenerAuto;
