import inquirer from 'inquirer';
import { mostrarGastoTotal } from './methods.js';

const choices = [
	{
		type: 'list',
		name: 'opciones',
		message: 'elige una opcion',
		choices: ['Agregar gasto', 'Ver gastos', 'Salir'],
	},
];

const questions = [
	{
		type: 'input',
		name: 'gasto',
		message: 'ingresa gasto realizado',
	},
	{
		type: 'input',
		name: 'monto',
		message: 'ingresa monto gastado',
	},
];

export const promptGastos = async () => {
	return await inquirer.prompt(choices).then(async (answers) => {
		if (answers.opciones === 'Agregar gasto') {
			return await inquirer.prompt(questions).then((answers) => {
				return answers;
			});
		} else if (answers.opciones === 'Salir') {
			return process.exit();
		} else {
		}
	});
};
