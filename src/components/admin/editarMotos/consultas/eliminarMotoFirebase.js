import { db } from './../../../../firebase/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
const eliminarMoto = async ( id ) => {
	return await deleteDoc(doc(db, 'moto', id));
};

export default eliminarMoto;
