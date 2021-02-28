const connection = require('./connection.js');

//Creating helper functions for insert methods like class activities

//Helper function for insertOne function

const questionMarks = (num) => {
    const arr = [];

    for (let i =0; i < num; i++){
        arr.push('?');
    }
    return arr.toString();
}

//Helper function for updateOne function

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
        let queryString = `INSERT INTO ${table}`;

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
    updateOne(table,objColVals, condition, cb){
        let queryString = `Update ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if (err){
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm