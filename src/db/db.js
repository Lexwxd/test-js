import mysql from 'mysql2/promise';
import { DB_DB, DB_HOST, DB_PASSWORD, DB_USER } from '../utils/env.js';

export const mysqlConnect = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_DB,
    password: DB_PASSWORD
});