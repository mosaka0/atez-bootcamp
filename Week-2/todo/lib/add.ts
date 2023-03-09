import inquirer from "inquirer";
import {App, ITasks} from "../index.js";


export async function addTask(tasks:ITasks[]) { //T[] koyunca olmuyor.
    const time = new Date();
    const todos: { taskName: string } = await inquirer.prompt([
        {
            name: "taskName",
            type: "input",
            Message: "Görev ekleyin"
        },
    ])
    tasks.push({
        name:todos.taskName,
        checked:false,
        createdDate: time.getTime()
    });
    App(tasks)

}