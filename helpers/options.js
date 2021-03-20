require('colors');
const options = [
    'Crear tarea',
    'Listar tareas',
    'Listar tareas completadas',
    'Listar tareas pendientes',
    'Completar tarea(s)',
    'Borrar tarea',
    'Salir \n'
];


//! Esta funcion realiza el proceso de mostrar el menu para que el usuario realice la seleccion de una opcion
const showTheOptions = () => {


    return new Promise( (resolve, reject) => {
        //? Esto es un embellecedor
        console.log('==========================='.green);
        console.log('== Seleccione una opcion ==');
        console.log('=========================== \n'.green);
        //?
        //! Aqui vamos a crear la interfaz con la que nuestro usuario va a realizar la interaccion
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        options.map((element, index) => {
            console.log(`${index+1}.`.green + `${element}`)
        });

        
        //! Ahora le decimos al usuario que seleccione una opcion
        readline.question('Seleccione una opcion. ', (opt) => {
            readline.close();
            resolve(opt);
        }); 

    })

}

//! Ahora vamos a realizar una funcion para lograr pausar nuestra aplicacion
const pause = () => {

    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        //! Ahora le decimos al usuario que seleccione una opcion
        readline.question(`Presione ${'ENTER'.green} para continuar. \n`, (opt) => {
            readline.close();
            resolve();
        }); 
    })

}

module.exports = {
    showTheOptions,
    pause
};