#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.clear();

console.log(chalk.greenBright("Todo-cli App"));

let tasks = [];

async function App(){
    const Todos: {App : String} = await inquirer.prompt([
        {
            name: "App",
            type: "list",
            message: "Please select your operation",
            choices: ["listTasks","addTask","deleteTask","updateTask","completeTask","exit"]
        }
    ]);
    if (Todos.App === "listTasks") {
        listTask();
    }
    else if (Todos.App === "addTask") {
        console.clear()
        addTask()
    }
  /*  else if (Todos.App === "deleteTask") {
        deleteTask()
    }
    else if (Todos.App === "updateTask") {
        updateTask()
    }*/
    else if (Todos.App === "completeTask") {
        if (tasks.length > 0) {
            tasks = []
            console.log("YOUR ALL TASKS DELETED");
            App()
        }
        else {
            console.log(chalk.redBright("NO TASKS FOUND"));

        }
    }
    else if (Todos.App === "exit") {
        console.log(chalk.yellow("THANKS FOR USE TODO APP"))
    }
}

async function listTask() {
    if (tasks.length > 0) {
        console.log(chalk.green("YOUR ALL TASKS"));
        tasks.map((todo) => {
            let tasksindex = tasks.indexOf(todo) + 1;
            console.log(`Task#${tasksindex}:  ${todo}`);
        })
    } else {
        console.log(chalk.redBright("NO TASKS FOUND"));
    }
    App()
}

async function addTask() {
    const Todos: { AddTask: string } = await inquirer.prompt([
        {
            name: "AddTask",
            type: "input",
            Message: "please add todo"
        },
    ])
    tasks.push(Todos.AddTask);
    App()
}

App();