import React from 'react';
// packages
// import { useParams } from 'react-router';
// hooks
import useObtenerAuto from '../../../hooks/useObtenerAutos';

const FormEditarAuto = () => {
  
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<h1>formulario</h1>
			<form onSubmit={handleSubmit}>
                {/* {
                    autos.map((auto)=>{

                    })
                } */}
				<ul>
					<li>
						<input
							type="text"
							name="nombre"
							id=""
							placeholder="nombre producto"
						/>
					</li>
					<li>
						<input
							type="text"
							name="descripcion"
							id=""
							placeholder="descripcion"
						/>
					</li>
					<li>
						<input type="number" name="precio" id="" placeholder="precio" />
					</li>
					<li>
						<input type="submit" value="Actualizar" />
					</li>
				</ul>
			</form>
		</>
	);
};

export default FormEditarAuto;
