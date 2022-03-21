import { db } from '../../../../firebase/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
const eliminarRepuesto = async ( id ) => {
	return await deleteDoc(doc(db, 'repuesto', id));
};

export default eliminarRepuesto;