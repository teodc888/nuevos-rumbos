import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
// packages
import { Grid } from '@mui/material';
// components
import { SingleFileUploadWithProgress } from './cargarArchivoIndividual';
import { UploadError } from './upLoadError';

const DropZone = ({ setInput, input, tipo }) => {
	// states
	const [files, setFiles] = useState([]);

	// url imagenes arreglo
	const [imageURL, setImageURL] = useState([]);
	console.log(imageURL);

	const onDrop = useCallback((accFiles, RejFiles) => {
		// Do something with the files
		const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
		setFiles((curr) => [...curr, ...mappedAcc, ...RejFiles]);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: 'image/*',
	});

	// funcion eliminar imagen
	const onDelete = (file) => {
		// eliminamos el header de la lista de carga
		setFiles((curr) => curr.filter((fw) => fw.url !== file));
		// eliminamos la url
		setImageURL((array) => array.filter((i) => i !== file));
	};
	const onUpload = async (file, url) => {
		setFiles((curr) =>
			curr.map((fw) => {
				if (fw.file === file) {
					return { ...fw, url };
				}
				return fw;
			})
		);
		await setImageURL((imageURL) => [...imageURL, url]);
	};

	// UseEffect pasar el arreglo a input
	useEffect(() => {
		if (tipo) {
			setInput(imageURL);
		} else if (!tipo) {
			setInput({ ...input, imagen: imageURL });
		}
	}, [imageURL]);

	return (
		<React.Fragment>
			<Grid item style={{ width: 'auto', height: 'auto' }}>
				<div {...getRootProps()}>
					<Grid
						item
						style={{
							minWidth: 200,
							minHeight: 100,
							padding: '5%',
							border: ' 2px solid',
							borderRadius: '4px',
						}}
					>
						<input {...getInputProps()} />
						<p>Insertá algunas imagenes aqui, o clickeá para elegir archivos</p>
					</Grid>
					{files.map((fileWrapper, index) => (
						<Grid item key={index} style={{ marginTop: '2%' }}>
							{fileWrapper.errors.length ? (
								<UploadError
									key={index}
									file={fileWrapper.file}
									fileURL={fileWrapper.url}
									errors={fileWrapper.errors}
									onDelete={onDelete}
								/>
							) : (
								<SingleFileUploadWithProgress
									key={index}
									onDelete={onDelete}
									onUpload={onUpload}
									file={fileWrapper.file}
									fileURL={fileWrapper.url}
								/>
							)}
						</Grid>
					))}
				</div>
			</Grid>
		</React.Fragment>
	);
};

export default DropZone;
