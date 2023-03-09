import {App,ITasks} from "../index.js";
import chalk from "chalk";

export async function listTasks(tasks:ITasks[]) {
    if (tasks.length > 0) {
        tasks.map((task:any  ,index) => {
            console.log(`#${index+1}: ${task.name}  -- ${task.createdDate} -- ${task.checked ? chalk.green('yapıldı') : chalk.red('yapılmadı')}`);
        })
    }
    else {
        console.log(chalk.redBright("Yapılacak görev yok"));
    }
    App(tasks);

}