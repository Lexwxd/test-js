import { mysqlConnect } from "../db/db.js";

export  class ToDoService{

    static async create(todo){
        const results = await mysqlConnect.execute('INSERT INTO `tasks`(name,description,is_completed) VALUES(?,?,?)',[todo.name, todo.description, !!todo.is_completed])
        console.log(results)
    }
    static async read(id){
        const [results] = await mysqlConnect.execute('SELECT * FROM `tasks` WHERE `id` = ?',[id])
        console.log(results)
        return results
    }
    static async readAll(){
        const [results] = await mysqlConnect.execute('SELECT * FROM `tasks`')
        return results
    }
    static async update(todo){
        
    }
    static async delete(id){
        const [results] = await mysqlConnect.execute('DELETE FROM `tasks` WHERE `id` = ?',[id])
    }

}
