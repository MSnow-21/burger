const { insertOne } = require('../models/burger.js');
const connection = require('./connection.js');

const orm = {
    selectAll(tableInput, cb){
        const queryString = `Select * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne(table, cols, vals, cb){
        const queryString = `INSERT INTO ${table}`;

        

    }




}

//selectAll();
insertOne();
updateOne();

//module.exports = orm