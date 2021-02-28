const connection = require('./connection.js');

//Creating helper functions for insert methods like class activities

const questionMarks = (num) => {
    const arr = [];

    for (let i =0; i < num; i++){
        arr.push('?');
    }
    return arr.toString();
}

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
    insertOne(table,cols,vals,cb){
        let queryString = 'INSERT INTO ${table}';

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += questionMarks(val.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {;
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

module.exports = orm