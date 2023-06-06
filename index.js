import { saveGastos, mostrarGastoTotal } from './methods.js';
import { promptGastos } from './promptSpent.js';

const run = async () => {
	const gasto = await promptGastos();

	const gastoJson = await mostrarGastoTotal('./gastos.json');

	const nuevoGasto = [...gastoJson, gasto];

	saveGastos('./gastos.json', nuevoGasto);
};

run();
