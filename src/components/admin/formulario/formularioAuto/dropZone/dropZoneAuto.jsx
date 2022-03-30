import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// packages
import { Grid } from '@mui/material';
// components
import { SingleFileUploadWithProgress } from './cargarArchivoIndividual';
import { UploadError } from './upLoadError';

const DropZone = ({ handleFiles }) => {
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
		setFiles((curr) => curr.filter((fw) => fw.file !== file));
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
									errors={fileWrapper.errors}
									onDelete={onDelete}
								/>
							) : (
								<SingleFileUploadWithProgress
									key={index}
									onDelete={onDelete}
									onUpload={onUpload}
									file={fileWrapper.file}
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
