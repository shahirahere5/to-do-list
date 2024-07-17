#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const answers = await inquirer.prompt([
        {
            message: "What do you want to add to your to-do list?",
            name: "todo",
            type: "input",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add another item?",
            default: false,
        },
    ]);
    todos.push(answers.todo);
    condition = answers.addMore;
    console.log(todos);
}
