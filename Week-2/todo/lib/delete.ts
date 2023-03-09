import inquirer from "inquirer";
import {App, ITasks} from "../index.js";
import chalk from "chalk";

export async function deleteTask(tasks:ITasks[]) {
    const delTodos: { deleteTask: number } = await inquirer.prompt([
        {
            name: "deleteTask",
            type: "input",
            Message: "Silinecek görevin numarasını belirtin"
        },
    ])
    let indexNum = delTodos.deleteTask
    if (tasks.length > 0 && tasks.length <= indexNum) {
        tasks.splice(indexNum - 1, 1);
    }
    else {
        console.log(chalk.redBright("Hatalı numara!"));
    }
    App(tasks)
}