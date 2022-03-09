import useObtenerMoto from "../../../hooks/useObtenerMotos";
import { useParams } from "react-router";

const FormEditarMoto = () => {
    const { id } = useParams();
    const [moto] = useObtenerMoto(id);
    console.log(moto);

    return ( <h1>hola mundo</h1> );
}
 
export default FormEditarMoto;