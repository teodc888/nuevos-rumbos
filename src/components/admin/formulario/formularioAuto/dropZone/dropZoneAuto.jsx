import React, { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';

export interface UploadableFile{
    file: File;
    errors: FileError[];
}

const DropZone = () => {
    // states 
    const [files, setFiles] = useState([]);

	const onDrop = useCallback((accFiles: File[], RejFiles: FileRejection[]) => {
		// Do something with the files
        const mappedAcc = accFiles.map((file)=>({file, errors: []}));
        setFiles((curr)=>[...curr, ...mappedAcc, ...RejFiles]);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<p>Drag 'n' drop some files here, or click to select files</p>
            {JSON.stringify(files)}
		</div>
	);
};

export default DropZone;
