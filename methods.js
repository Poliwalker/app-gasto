import fs from 'fs';

export const getGasto = (gasto) => {
	return new Promise((resolve, reject) => {
		fs.readFile(gasto, 'utf-8', (err, data) => {
			if (err) reject(err);
			else {
				resolve(JSON.parse(data));
			}
		});
	});
};

export const mostrarGastoTotal = () => {
	if (fs.existsSync('gastos.json')) {
		const data = fs.readFileSync('gastos.json', 'utf-8');
		const gastos = JSON.parse(data);

		let gastoTotal = 0;
		gastos.forEach((gasto) => {
			gastoTotal += gasto.amount;
		});

		console.log(`El gasto total es: ${gastoTotal}`);
	} else {
		console.log('No hay gastos registrados.');
	}
};
