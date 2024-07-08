import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    // --------------options-------------------
    let option = await inquirer.prompt([
        {
            type: "list",
            name: "user_option",
            message: "select an option",
            choices: ["Add", "Remove"]
        }
    ]);
    // --------------ADD-------------------
    if (option.user_option === "Add") {
        let ans = await inquirer.prompt([
            {
                type: "input",
                name: "user_ans",
                message: "Write something to add in the task list"
            }
        ]);
        if (ans.user_ans !== '') {
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }
        else {
            console.log('Please write something to add in the To Do list');
        }
    }
    // --------------REMOVE-------------------
    else if (option.user_option === "Remove") {
        let removeChoices = await inquirer.prompt([
            {
                type: "list",
                name: "remove_items",
                message: "select item to remove",
                choices: todo_list
            }
        ]);
        let index_to_remove = todo_list.indexOf(removeChoices.remove_items);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log('You removed : ', removeChoices.remove_items);
            console.log(todo_list);
        }
    }
    // --------------CONFIRMATION-------------------
    let user_ans = await inquirer.prompt([
        {
            type: "confirm",
            name: "selection",
            message: "Do you want to continue ?",
            default: true
        }
    ]);
    if (user_ans.selection === false) {
        while_condition = false;
    }
}
