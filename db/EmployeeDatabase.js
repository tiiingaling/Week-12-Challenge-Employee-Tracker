const connection = require('./connection');

// this is where we make class and add methods to call for each queary to the database

class DB {
    constructor(connection){
        this.connection = connection
    }

    findAllEmps(){
        return this.connection.promise().query("SELECT * FROM employee");
    }

    findRole(){
        return this.connection.promise().query("SELECT * FROM role");
    }

    findDep(){
        return this.connection.promise().query("SELECT * FROM department");
    }
}

module.exports = new DB(connection);
