const uuid = require('uuid');


class Tarea {

    id='';
    description='';
    dateCompleted=null;

    constructor(description){
        this.id = uuid.v4();
        this.description = description;
    }
};

module.exports = Tarea;