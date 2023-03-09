#!/usr/bin/env node

//module: NodeNext
//moduleResolution: NodeNext
import inquirer from "inquirer";
import chalk from "chalk";
import {listTasks} from "./lib/list.js";
import { addTask } from "./lib/add.js";
import { deleteTask } from "./lib/delete.js";
import { editTask} from "./lib/edit.js";
import { checkTask } from "./lib/check.js";


console.clear();
console.log(chalk.greenBright("Todo-cli APP"));

export interface ITasks{
    name:string,
    checked:boolean,
    createdDate:number
}

let sendTasks: ITasks[] = [];

export async function App(tasks:ITasks[]) {
    const todos: { App: string } = await inquirer.prompt([
        {
            name: "App",
            type: "list",
            message: "Yapacağınız işlemi seçin",
            choices: [
                "listTasks", "addTask", "deleteTask", "editTask", "checkTask", "exit"]
        }
    ]);
    if (todos.App === "listTasks") {
        listTasks(tasks);
    }
    else if (todos.App === "addTask") {
        addTask(tasks);
    }
    else if (todos.App === "deleteTask") {
        deleteTask(tasks);
    }
    else if (todos.App === "editTask") {
        editTask(tasks);
    }
    else if (todos.App === "checkTask") {
        checkTask(tasks);
    }
    else if (todos.App === "exit") {
        console.log(chalk.yellow("THANKS FOR USE TODO APP"))
    }
}
App(sendTasks);
