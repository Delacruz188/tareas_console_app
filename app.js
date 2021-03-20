const { inquirerMenu, pause } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
// const {showTheOptions, pause} = require('./helpers/options');
const main = async () => {
    // console.clear();
    let opt = '';
    do {
        // opt = await inquirerMenu();
        // console.log({ opt });
        const tarea = new Tarea();
        console.log(tarea);
        await pause();
        
    } while (opt != '0');

    showTheOptions();
    // pause();
}

main();