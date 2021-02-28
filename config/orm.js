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
    // insertOne(vals, cb){
    //     //
    //     const queryString = `INSERT INTO burgers (burger_name,devoured) VALUES ${vals}`;



    //}




}

//selectAll();
// insertOne();
// updateOne();

//module.exports = orm