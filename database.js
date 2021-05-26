const { Pool } = require('pg');
const configdb = {
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'appnode'
};

const pool = new Pool(configdb);

const users = async() => {
    console.log('Buscando usuarios');
    const values = await pool.query('SELECT * FROM users');
    console.log(values);
};

users();