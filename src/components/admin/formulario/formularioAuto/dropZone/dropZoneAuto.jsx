import React, { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
// packages
import { Grid } from '@mui/material';
// components
import { SingleFileUploadWithProgress } from './cargarArchivoIndividual';

export interface UploadableFile {
	file: File;
	errors: FileError[];
	url?: String;
}

const DropZone = () => {
	// states
	const [files, setFiles] = useState([]);

	const onDrop = useCallback((accFiles: File[], RejFiles: FileRejection[]) => {
		// Do something with the files
		const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
		setFiles((curr) => [...curr, ...mappedAcc, ...RejFiles]);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	// funcion eliminar imagen
	const onDelete = (file: File) => {
		setFiles((curr) => curr.filter((fw) => fw.file !== file));
	};
	const onUpload = (file: File, url: string) => {
		setFiles((curr) =>
			curr.map((fw) => {
				if (fw.file === file) {
					return { ...fw, url };
				}
				return fw;
			})
		);
	};

	return (
		<React.Fragment>
			<Grid item>
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					<p>Drag 'n' drop some files here, or click to select files</p>
					{files.map((fileWrapper, index) => (
						<SingleFileUploadWithProgress
							key={index}
							onDelete={onDelete}
							onUpload={onUpload}
							file={fileWrapper.file}
						/>
					))}
				</div>
			</Grid>
		</React.Fragment>
	);
};

export default DropZone;
