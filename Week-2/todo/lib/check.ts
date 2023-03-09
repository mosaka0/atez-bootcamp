import inquirer from "inquirer";
import {App, ITasks} from "../index.js";




export async function checkTask(tasks:ITasks[]) {
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

    App(tasks);
}