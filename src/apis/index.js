export default async function() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}
