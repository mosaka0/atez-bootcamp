import inquirer from "inquirer";
import {App, ITasks} from "../index.js";
import chalk from "chalk";


export async function editTask(tasks:ITasks[]) {
    const editTodos: { editTask: number, NewTaskName: string } = await inquirer.prompt([
        {
            name: "editTask",
            type: "input",
            Message: "Değiştireceğiniz görevin numarasını belirtin"
        },
        {
            name: "NewTaskName",
            type: "input",
            message: "Yeni görevi girin:"
        }
    ])
    const indexNum = editTodos.editTask
    const newName = editTodos.NewTaskName
    const result = {
        name:newName,
        checked: tasks[indexNum-1].checked as boolean,
        createdDate:tasks[indexNum-1].createdDate as number,
    }
    if (tasks.length > 0) {
        tasks.splice(indexNum - 1, 1, result);
    }
    else {
        console.log(chalk.redBright("Yapılacak görev yok"));
    }
    App(tasks)
}