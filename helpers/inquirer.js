require('colors');
const inquirer = require('inquirer');

const questions = [
    {
        value: '1',
        name: 'Crear tarea'
    },
    {
        value: '2',
        name: 'Listar tareas'
    },    {
        value: '3',
        name: 'Listar tareas completadas'
    },    {
        value: '4',
        name: 'Listar tareas pendientes'
    },    {
        value: '5',
        name: 'Completar tarea(s)'
    },    {
        value: '6',
        name: 'Borrar tarea'
    },    {
        value: '7',
        name: 'Salir \n'
    }
];

const options = [{
    type: 'list',
    name: 'option',
    message: 'Elige una opcion.',
    choices: questions
}];

//! Aqui creamos las configuraciones para el prompt de pause
const pauseConfig = [{
    type: 'input',
    name: 'pause',
    message: `Presione ${'ENTER'.green} para continuar`
}]

const inquirerMenu = async () => {

    // console.clear();
    
    //? Esto es un embellecedor
    console.log('==========================='.green);
    console.log('== Seleccione una opcion ==');
    console.log('=========================== \n'.green);

    const opt = await inquirer.prompt(options);

    return opt.option;
}

const pause = async () => {

    const pause = await inquirer.prompt(pauseConfig);
    return pause;
    
}


module.exports = {
    inquirerMenu,
    pause
}