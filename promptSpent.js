import inquirer from 'inquirer';

const choices = [
	{
		type: 'list',
		name: 'option',
		message: 'Selecciona una opcion',
		choices: ['agregar gasto', 'mostrar gasto total'],
	},
];

const addSpent = [
	{
		type: 'input',
		name: 'description',
		message: 'nombre de tu gasto',
	},
	{
		type: 'input',
		name: 'amount',
		message: 'cantidad de tu gasto',
	},
];

export const promptGasto = async () => {
	return await inquirer.prompt(choices).then((answers) => {
		if (answers.option === 'agregar gasto') {
			return inquirer.prompt(addSpent);
		}
	});
};
