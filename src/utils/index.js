export const validateFile = fileSize => {
	const fileLimit = 1024 ** 2;
	if (fileSize > fileLimit) {
		return false;
	}
	return true;
};

export const readFileURL = files => {
	return new Promise((resolve, reject) => {
		const isValidFile = validateFile(files[0].size);

		if (isValidFile) {
			const reader = new FileReader();
			reader.onload = () => {
				resolve(reader.result);
			};
			reader.onerror = e => {
				reject(e);
			};
			reader.readAsDataURL(files[0]);
		} else {
			reject(new Error('File size more than 1mb'));
		}
	});
};
