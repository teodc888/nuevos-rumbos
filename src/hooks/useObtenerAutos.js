import { useState, useEffect } from 'react';
// firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const useObtenerAuto =  (id) => {
	// estado donde se guardara el arreglo
	const [auto, cambiarAuto] = useState('');

	useEffect(() => {
		// ejecutamos la consulta
		const obtenerAuto = async () => {
			const documento = await getDoc(doc(db, 'auto', id));
			// establecemos el estado con el arreglo
			if(documento.exists()){
				cambiarAuto(documento.data());
			}
		};
		obtenerAuto();
	}, [id]);

	return [auto]
};
export default useObtenerAuto;
