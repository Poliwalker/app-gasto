import { getGasto, mostrarGastoTotal } from './methods.js';

import { promptGasto } from './promptSpent.js';

const runApp = async () => {
	const spent = await promptGasto();

	const spentUser = mostrarGastoTotal();

	const newSpent = [...spentUser, spent];

	getGasto('./gastos.json', newSpent);
};

runApp();
