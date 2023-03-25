import React from 'react';
import FilePreview from './FilePreview';
import styles from './DropZone.module.css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const DropZone = ({ data, dispatch }) => {
	// onDragEnter sets inDropZone to true
	const handleDragEnter = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
	};

	// onDragLeave sets inDropZone to false
	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();

		dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
	};

	// onDragOver sets inDropZone to true
	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();

		// set dropEffect to copy i.e copy of the source item
		e.dataTransfer.dropEffect = 'copy';
		dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
	};

	// onDrop sets inDropZone to false and adds files to fileList
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		// get files from event on the dataTransfer object as an array
		let files = [...e.dataTransfer.files];

		// ensure a file or files are dropped
		if (files && files.length > 0) {
			// loop over existing files
			const existingFiles = data.fileList.map((f) => f.name);
			// check if file already exists, if so, don't add to fileList
			// this is to prevent duplicates
			files = files.filter((f) => !existingFiles.includes(f.name));

			// dispatch action to add droped file or files to fileList
			dispatch({ type: 'ADD_FILE_TO_LIST', files });
			// reset inDropZone to false
			dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
		}
	};

	// handle file selection via input element
	const handleFileSelect = (e) => {
		// get files from event on the input element as an array
		let files = [...e.target.files];

		// ensure a file or files are selected
		if (files && files.length > 0) {
			// loop over existing files
			const existingFiles = data.fileList.map((f) => f.name);
			// check if file already exists, if so, don't add to fileList
			// this is to prevent duplicates
			files = files.filter((f) => !existingFiles.includes(f.name));

			// dispatch action to add selected file or files to fileList
			dispatch({ type: 'ADD_FILE_TO_LIST', files });
		}
	};

	// to handle file uploads
	const uploadFiles = async () => {
		// get the files from the fileList as an array
		let files = data.fileList;
		// initialize formData object
		const formData = new FormData();
		// loop over files and add to formData
		files.forEach((file) => formData.append('files', file));

		// Upload the files as a POST request to the server using fetch
		// Note: /api/fileupload is not a real endpoint, it is just an example
		const response = await fetch('/api/fileupload', {
			method: 'POST',
			body: formData,
		});

		//successful file upload
		if (response.ok) {
			alert('Files uploaded successfully');
		} else {
			// unsuccessful file upload
			alert('Error uploading files');
		}
	};

	return (
		<>
			<div
				className={styles.dropzone}
				onDragEnter={(e) => handleDragEnter(e)}
				onDragOver={(e) => handleDragOver(e)}
				onDragLeave={(e) => handleDragLeave(e)}
				onDrop={(e) => handleDrop(e)}>
				<AddPhotoAlternateIcon fontSize='large' style={{ color: 'azure' }} />

				<input
					id='fileSelect'
					type='file'
					multiple
					className={styles.files}
					onChange={(e) => handleFileSelect(e)}
				/>
				<label htmlFor='fileSelect'>Puedes seleccionar varios archivos</label>

				<h3 className={styles.uploadMessage}>o arrastrarlos hacia aquí</h3>
				{data.fileList.length > 0 && (
					<button className={styles.uploadBtn} onClick={uploadFiles}>
						Subir Imágenes
					</button>
				)}
			</div>
			{/* Pass the selectect or dropped files as props */}
			<FilePreview fileData={data} />
		</>
	);
};

export default DropZone;
