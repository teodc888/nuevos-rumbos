import { db } from './../../../../firebase/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
const eliminarAuto = async ( id ) => {
	return await deleteDoc(doc(db, 'auto', id));
};

export default eliminarAuto;
