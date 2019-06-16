import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import './style.css';
import { readFileURL } from './utils';
import saveImage from './apis';

const cropperRef = React.createRef(null);

const App = () => {
	const [uploadedImage, setImage] = React.useState(null);
	const [croppedImage, setCroppedImage] = React.useState(null);
	const [saving, setSaving] = React.useState(false);

	const handleUpload = async e => {
		const { files } = e.target;
		if (files.length) {
			try {
				const imageURL = await readFileURL(files);
				setImage({ url: imageURL, name: files[0].name });
			} catch (error) {
				console.error(error.message);
			}
		} else {
			setImage({ name: 'No Image' });
		}
	};

	const handleCrop = () => {
		const url = cropperRef.current.cropper.getCroppedCanvas().toDataURL();
		setCroppedImage(url);
	};

	const saveCroppedImage = () => {
		setSaving(true);
		saveImage(croppedImage)
			.then(() => setSaving(false))
			.catch(e => {
				console.error(e.message);
				setSaving(false);
			});
	};

	const resetImage = () => {
		setImage(null);
		setCroppedImage(null);
	};

	return (
		<React.Fragment>
			<div className="header">
				<label htmlFor="upload">
					{uploadedImage && uploadedImage.name
						? `Uploaded ${uploadedImage.name}`
						: 'Upload Image'}
					<input
						type="file"
						accept="image/*"
						id="upload"
						className="upload-button"
						onChange={handleUpload}
						disabled={uploadedImage && uploadedImage.url}
					/>
				</label>
			</div>
			{uploadedImage && uploadedImage.url ? (
				<div className="cropper-container">
					<Cropper
						ref={cropperRef}
						src={uploadedImage.url}
						guides={false}
						style={{ width: 800, height: 100 }}
						crop={handleCrop}
					/>
				</div>
			) : null}
			{uploadedImage && (
				<div className="action-buttons">
					<button
						type="button"
						className="save-button"
						disabled={saving}
						onClick={saveCroppedImage}
					>
						{saving ? 'Saving Image' : 'Save Cropped Image'}
					</button>
					<button type="button" onClick={resetImage} className="reset-button">
						Reset Input
					</button>
				</div>
			)}
		</React.Fragment>
	);
};

export default App;
