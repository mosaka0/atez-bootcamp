#!/usr/bin/env node

//module: NodeNext
//moduleResolution: NodeNext
import inquirer from "inquirer";
import chalk from "chalk";

/*interface ITasks{
    id: number;
    name: string;
    checked: boolean;
    createdDate: number;
}*/
console.clear();

console.log(chalk.greenBright("Todo-cli APP"));

interface ITasks{
    name:string,
    checked:boolean,
    createdDate:number
}

let tasks: ITasks[] = [];



async function App() {
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
        listTasks()
    } else if (todos.App === "addTask") {
        console.clear()
        addTask()
    } else if (todos.App === "deleteTask") {
        deleteTask()
    } else if (todos.App === "editTask") {
        editTask()
    } else if (todos.App === "checkTask") {
        checkTask()
    }
    else if (todos.App === "exit") {
        console.log(chalk.yellow("THANKS FOR USE TODO APP"))
    }
}

//görevleri listele
async function listTasks() {
    if (tasks.length > 0) {
        tasks.map((task,index) => {
            console.log(`#${index+1}: ${task.name}  -- ${task.createdDate} -- ${task.checked ? chalk.green('yapıldı') : chalk.red('yapılmadı')}`);
        })
    }
    else {
        console.log(chalk.redBright("Yapılacak görev yok"));
    }
    App();

}

//görev ekle
async function addTask() {
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
    App()

}


//görev sil
async function deleteTask() {
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
    App()
}

//görev adını değiştir
async function editTask() {
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
    App()
}

//görevin kontrolünü değiştir
async function checkTask() {
    const checkTodos: { taskCheck: number } = await inquirer.prompt([
        {
            name: "taskCheck",
            type: "input",
            Message: "Yaptığınız görevi doğrulamak onaylamak veya onayladığınız görevi onayını kaldırmak için numarasını belirtin:"
        },
    ])
    const indexNum = checkTodos.taskCheck;
    console.log("indexNum",indexNum);
    const doReverse:boolean = tasks[indexNum-1].checked ? false : true;
    const result = {
        name:tasks[indexNum-1].name as string,
        checked: doReverse,
        createdDate:tasks[indexNum-1].createdDate as number,
    }
    tasks.splice(indexNum-1,1,result);

    App();
}
App()