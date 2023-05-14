import * as inquirer from "inquirer";
import TodoItem from "../model/TodoItem";
import TodoCollection from "../service/TodoCollection";
import { data } from "../data";
import { Commands } from "../model/Commands";

class TodoConsole {
  private todoCollection: TodoCollection;

  constructor() {
    const sampleTodos: TodoItem[] = data.map(
      (item) => new TodoItem(item.id, item.task, item.complete)
    );
    this.todoCollection = new TodoCollection("My Todo List", sampleTodos);
  }

  displayTodoList(): void {
    console.log(
      `=====${this.todoCollection.userName}=====` +
        `(${this.todoCollection.getItemCounts().incomplete} items todo)`
    );
    this.todoCollection.getTodoItem(true).forEach((item) => item.printDetail());
  }

  promptUser(): void {
    console.clear();
    this.displayTodoList();
    
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose option',
        choices: Object.values(Commands),
    }).then((answers) => {
        if(answers["command"] !== Commands.Quit){
            this.promptUser();
        }
    });
  }
}

export default TodoConsole;