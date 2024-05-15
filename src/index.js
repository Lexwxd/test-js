import express from "express";
import { DB_DB, DB_HOST, DB_PASSWORD, DB_USER } from './utils/env.js';
import { todoRouter } from "./controllers/controller.js";

console.log(DB_DB, DB_HOST, DB_USER, DB_PASSWORD)
const errorHandling = (err, req, res, next) => {
    console.log('Здесь можно вставить интеграцию с телегой/slack чтобы при возникновении 500 ошибки вас пинал бот')
    res.status(500).json({
        msg: err.message,
        success: false,
    });
};

const app = express();
app.use(express.json())
app.use('/todo', todoRouter)
app.use(errorHandling);
app.listen(3000);

