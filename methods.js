import fs from 'fs';

export const mostrarGastoTotal = (gasto) => {
	return new Promise((resolve, reject) => {
		fs.readFile(gasto, 'utf-8', (err, data) => {
			if (err) reject(err);
			else {
				resolve(JSON.parse(data));
				console.log(data);
			}
		});
	});
};

export const saveGastos = (gasto, newData) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(gasto, JSON.stringify(newData), (err) => {
			if (err) reject(err);
			else resolve(gasto);
		});
	});
};
