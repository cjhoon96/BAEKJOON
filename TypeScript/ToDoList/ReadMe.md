

# 개발 환경 구성

> `/src` directory와 `/build` directory를 생성한다. 
>
> `/src`  directory에는 TypeScript 파일 을 생성하여 source code 를 작성한다.
>
> `/build` directory 에는 compile 된 파일이 저장될 것이다. 
>
> ```
> tsc --init
> ```
>
> 을 통해 `tsconfig.json` 파일을 생성한다. 
>
> `tsconfig.json` 의 `compilerOptiion` 중 `rootDir` 와 `outDir` 의 주석을 풀고 각각 값에 `"./src"` `"./build"` 를 준다. 
>
> ```
> npm init -y
> npm install nodemon concurrently
> ```
>
> 를 통해 `package.json` 파일을 생성후 `nodemon` `concurrently` 모듈을 install 한다. 
>
> `package.json`
>
> ```json
> {
>   "name": "ToDoList",
>   "version": "1.0.0",
>   "description": "",
>   "main": "index.js",
>   "scripts": {
>     "test": "echo \"Error: no test specified\" && exit 1",
>     "start:build": "tsc -w", 
> 	// typescript compiler 를 통해 빌드를 진행할 때 -w watch 모드로 컴파일 과정을 console 로 확인을 할 수 있다. 
>     "start:run": "nodemon build/index.js",
> 	// 실행할 때 nodemon 을 이용해 buid directory 의 index.js 를 실행한다. 
>     "start": "concurrently npm:start:*"
> 	// 위의 build 와 run 을 병행하여 실행한다. 
>   },
>   "keywords": [],
>   "author": "",
>   "license": "ISC",
>   "dependencies": {
>     "concurrently": "^8.0.1",
>     "nodemon": "^2.0.22"
>   }
> }
> ```
>
> 
>
> `src/index.js`
>
> ```ts
> console.log("Hello TypeScript");
> console.log("Hello TypeScript");
> console.log("Hello TypeScript");
> console.log("Hello TypeScript");
> ```
>
> `tsc` 를 통해 compile 하면
>
> `build` 폴더에 compile 된 `index.js` 파일이 생성된다.   
>
> 
>
> terminal 에 `npm start` 를 통해 실행하면 
>
> ```
> [build]
> [run] 
> [run] > ToDoList@1.0.0 start:run C:\Users\cjhoon\Desktop\TIL\TypeScript\ToDoList
> [run] > nodemon build/index.js
> [run]
> [build] 
> [build] 오후 10:32:08 - Found 0 errors. Watching for file changes.
> [run] [nodemon] 2.0.22
> [run] [nodemon] to restart at any time, enter `rs`
> [run] [nodemon] watching path(s): *.*
> [run] [nodemon] watching extensions: js,mjs,json  
> [run] [nodemon] starting `node build/index.js`    
> [run] Hello TypeScript
> [run] Hello TypeScript
> [run] Hello TypeScript
> [run] Hello TypeScript
> [run] [nodemon] clean exit - waiting for changes before restart
> ```
>
> 와 같이 compile 내용과 run 과정을 살펴볼 수 있다. 
>



# TodoItem Class 생성하기

> `src/TodoItem.ts`
>
> ```ts
> class TodoItem {
>   constructor(
>     public id: number,
>     public task: string,
>     public complete: boolean
>   ) {
>     this.id = id;
>     this.task = task;
>     this.complete = complete;
>   }
>   printDetail(): void {
>     console.log(
>       `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
>     );
>   }
> }
> 
> export default TodoItem;
> 
> ```
>
> `TodoItem` class 를 만든 후  `index.ts` 에서 사용할 수 있도록 export 해준다.
>
> `src/index.ts`
>
> ```ts
> import TodoItem from "./TodoItem";
> 
> const data = [
>   { id: 1, task: "장보기", complete: true },
>   { id: 2, task: "TS 학습", complete: false },
> ];   
> 
> console.log("My Todo List");
> for (let i = 0; i < data.length; i++) {
>   let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
>   todoItem.printDetail();
> }
> ```
>
> Type 추론 : `data` / `i` / `todoItem` 



# TodoCollection.ts

> `src/data.ts`
>
> ```ts
> export const data = [
>   { id: 1, task: "장보기", complete: true },
>   { id: 2, task: "TS 학습", complete: false },
> ];
> 
> ```
>
> `src/TodoColection.ts`
>
> ```ts
> import TodoItem from "./TodoItem";
> 
> class TodoCollection {
>   private nextId: number = 1;
>   
>   constructor(public userName: string, public todoItems: TodoItem[] = []) {}
>     
>   // id 를 통해 TodoItems 에서 item.id 가 파라미터 id 와 동일한 경우 item 을 반환한다.
>   // 만일 array 내부에 해당 id를 가진 todoitem 이 있는 경우 TodoItem type 의 값을 return 하겠지만
>   // 없는 경우 undefined 를 반환하므로 getTodoById 의 return type 은 TodoItem | undefined 로 준다.
>   getTodoById(id: number): TodoItem | undefined {
>     return this.todoItems.find((item) => item.id === id);
>   }
>   
>   // nextId 를 1씩 늘려가며 todoItems 에 중복되는 id 가 없을 때까지 while 문을 돌려 id 를 채번하여
>   // todoItems 에 TodoItem class 의 새 Instance 생성하여 삽인한다.
>   addTodo(task: string): number {
>     while (this.getTodoById(this.nextId)) {
>       this.nextId++;
>     }
>     this.todoItems.push(new TodoItem(this.nextId, task));
>     return this.nextId;
>   }
> 
>   // id 와 boolean 타입의 완료 여부를 파라미터로 받아 
>   // todoItems 에 해당 아이디가 있는 경우 complete 속성을 입력받은 값으로 변경한다.
>   markComplete(id: number, complete: boolean): void {
>     const todoItem = this.getTodoById(id);
>     if (todoItem) {
>       todoItem.complete = complete;
>     }
>   }
> }
> 
> export default TodoCollection
> ```
>
> > ### `arr.find(callback())`
> >
> > find 함수는 arr 를 돌며 callback 함수가 `true` 를 반환할 때 까지 해당 배열의 각 요소에 대해 callback 함수를 실행한다. 
>
> 
>
> `src/TodoItem.ts`
>
> ```ts
> class TodoItem {
>   constructor(
>     public id: number,
>     public task: string,
>     public complete: boolean = false
>   ) {
>     this.id = id;
>     this.task = task;
>     this.complete = complete;
>   }
>   printDetail(): void {
>     console.log(
>       `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
>     );
>   }
> }
> 
> export default TodoItem;
> 
> ```
>
> 
>
> `src/index.ts`
>
> ```ts
> import TodoItem from "./TodoItem";
> import { data } from "./data";
> import TodoCollection from "./TodoCollection";
> 
> const sampleTodos: TodoItem[] = data.map(
>   (item) => new TodoItem(item.id, item.task, item.complete)
> );
> 
> const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);
> 
> myTodoCollection.addTodo("JavaScript 학습하기");
> myTodoCollection.addTodo("약속");
> 
> myTodoCollection.markComplete(3, true);
> 
> console.log(`${myTodoCollection.userName}`);
> myTodoCollection.todoItems.forEach((item) => item.printDetail());
> 
> ```
>
> 
>
> ```
> [build]
> [build] 
> [build] 오후 6:44:22 - Found 0 errors. Watching for file changes.
> [run] [nodemon] restarting due to changes...
> [run] [nodemon] starting `node build/index.js`
> [run] My Todo List
> [run] 1 장보기          (complete)
> [run] 2 TS 학습
> [run] 3 JavaScript 학습하기             (complete)
> [run] 4 약속
> [run] [nodemon] clean exit - waiting for changes before restart
> ```





# Map 객체 활용

> `src/TodoColection.ts`
>
> ```ts
> import TodoItem from "./TodoItem";
> 
> class TodoCollection {
>   private nextId: number = 1;
> 
>   // number type 의 id 를 key 로 TodoItem class 의 instance를 값으로 갖는 Map 자료구조 itemMap
>   private itemMap: Map<number, TodoItem>;
> 
>   // TodoItem 클래스의 인스턴스들로 이루어진 array 를 받아 itemMap 의 값을 구성한다.
>   constructor(public userName: string, todoItems: TodoItem[] = []) {
>     this.itemMap = new Map<number, TodoItem>();
>     todoItems.forEach((item) => this.itemMap.set(item.id, item));
>   }
> 
>   // 기존 코드를 map 자료구조의 itemMap 에서 key를 통해 값을 가져오는 get method 를 사용하는 코드로 변경한다.
>   getTodoById(id: number): TodoItem | undefined {
>     return this.itemMap.get(id);
>   }
> 
>   // 기존 코드를 map 자료구조의 itemMap 에서 key / value 를 통해 새로운 데이터를 만드는 set method 를 사용하는 코드로 변경한다.
>   addTodo(task: string): number {
>     while (this.getTodoById(this.nextId)) {
>       this.nextId++;
>     }
>     this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
>     return this.nextId;
>   }
> 
>   // 신규 메서드
>   // includeComplete -> true 인 경우 모든 할일 목록을 반환
>   // includeComplete -> false 인 경우 완료 목록을 제외한 할일 목록 반환
>   getTodoItem(includeComplete: boolean): TodoItem[] {
>     // itemMap 의 value 들을 가져와 array 로 만든 후
>     // filter의 callback 함수를 통해 includComplete 이 true 인 경우 모든 item 들을
>     // false 인 경우 item.complete 이 false 즉 완료되지 않은 item 들만을 filtering 한다.
>     return [...this.itemMap.values()].filter(
>       (item) => includeComplete || !item.complete
>     );
>   }
> 
>   // 신규 메서드
>   // 완료된 todo item 들을 삭제해주는 메서드
>   removeComplete(): void {
>     this.itemMap.forEach((item) => {
>       if (item.complete) {
>         this.itemMap.delete(item.id);
>       }
>     });
>   }
> 
>   markComplete(id: number, complete: boolean): void {
>     const todoItem = this.getTodoById(id);
>     if (todoItem) {
>       todoItem.complete = complete;
>     }
>   }
> }
> 
> export default TodoCollection;
> 
> ```
>
> 
>
> `src/index.ts`
>
> ```ts
> import TodoItem from "./TodoItem";
> import { data } from "./data";
> import TodoCollection from "./TodoCollection";
> 
> const sampleTodos: TodoItem[] = data.map(
>   (item) => new TodoItem(item.id, item.task, item.complete)
> );
> 
> const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);
> 
> myTodoCollection.addTodo("JavaScript 학습하기");
> myTodoCollection.addTodo("약속");
> 
> myTodoCollection.markComplete(3, true);
> 
> console.log(`${myTodoCollection.userName}`);
> 
> myTodoCollection.getTodoItem(true).forEach((item) => item.printDetail());
> console.log("=======================");
> myTodoCollection.getTodoItem(false).forEach((item) => item.printDetail());
> 
> myTodoCollection.removeComplete()
> console.log("=======================")
> myTodoCollection.getTodoItem(true).forEach((item) => item.printDetail());
> 
> ```
>
> 
>
> ```
> 오후 8:11:13 - Starting compilation in watch mode...
> [build]
> [run] 
> [run] > ToDoList@1.0.0 start:run C:\Users\cjhoon\Desktop\TIL\TypeScript\ToDoList
> [run] > nodemon build/index.js
> [run]
> [run] [nodemon] 2.0.22
> [run] [nodemon] to restart at any time, enter `rs`
> [run] [nodemon] watching path(s): *.*
> [run] [nodemon] watching extensions: js,mjs,json  
> [run] [nodemon] starting `node build/index.js`    
> [build] 
> [build] 오후 8:11:15 - Found 0 errors. Watching for file changes.
> [run] My Todo List
> [run] 1 장보기          (complete)
> [run] 2 TS 학습
> [run] 3 JavaScript 학습하기             (complete)
> [run] 4 약속
> [run] =======================
> [run] 2 TS 학습
> [run] 4 약속
> [run] =======================
> [run] 2 TS 학습
> [run] 4 약속
> [run] [nodemon] clean exit - waiting for changes before restart
> ```



> Data 를 저장할 `model` directory 와  `view` directory, `service` directory 를 만들어 각 ts 파일의 역할에 따라 분류한다. 
>
> 이후 `model` 에는 `TodoItem.ts` 를 `service` 에는 `TodoCollection.ts` 를 배치시킨다. 
>
> `src/model/ItemCounts.ts` 
>
> ```ts
> export type ItemCounts = {
>     total : number;
>     incomplete : number;
> }
> ```
>
> 를 생성하여 전체 수량과 완료되지 않은 수량으로 구성된 `ItemCounts` type 을 export 하고 
>
> `src/service/TodoCollection.ts`
>
> ```ts
> import { ItemCounts } from "../model/ItemCounts";
> import TodoItem from "../model/TodoItem";
> 
> class TodoCollection {
>   private nextId: number = 1;
> 
>   // number type 의 id 를 key 로 TodoItem class 의 instance를 값으로 갖는 Map 자료구조 itemMap
>   private itemMap: Map<number, TodoItem>;
> 
>   // TodoItem 클래스의 인스턴스들로 이루어진 array 를 받아 itemMap 의 값을 구성한다.
>   constructor(public userName: string, todoItems: TodoItem[] = []) {
>     this.itemMap = new Map<number, TodoItem>();
>     todoItems.forEach((item) => this.itemMap.set(item.id, item));
>   }
> 
>   // 기존 코드를 map 자료구조의 itemMap 에서 key를 통해 값을 가져오는 get method 를 사용하는 코드로 변경한다.
>   getTodoById(id: number): TodoItem | undefined {
>     return this.itemMap.get(id);
>   }
> 
>   // 기존 코드를 map 자료구조의 itemMap 에서 key / value 를 통해 새로운 데이터를 만드는 set method 를 사용하는 코드로 변경한다.
>   addTodo(task: string): number {
>     while (this.getTodoById(this.nextId)) {
>       this.nextId++;
>     }
>     this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
>     return this.nextId;
>   }
> 
>   // includeComplete -> true 인 경우 모든 할일 목록을 반환
>   // includeComplete -> false 인 경우 완료 목록을 제외한 할일 목록 반환
>   getTodoItem(includeComplete: boolean): TodoItem[] {
>     // itemMap 의 value 들을 가져와 array 로 만든 후
>     // filter의 callback 함수를 통해 includComplete 이 true 인 경우 모든 item 들을
>     // false 인 경우 item.complete 이 false 즉 완료되지 않은 item 들만을 filtering 한다.
>     return [...this.itemMap.values()].filter(
>       (item) => includeComplete || !item.complete
>     );
>   }
> 
>  
>   removeComplete(): void {
>     this.itemMap.forEach((item) => {
>       if (item.complete) {
>         this.itemMap.delete(item.id);
>       }
>     });
>   }
>   
>   // 신규메서드 
>   // ItemCounts 타입을 import 하여 전체 수량과 완료되지 않은 일정의 수를 return 한다.
>   getItemCounts(): ItemCounts {
>     return {
>       total: this.itemMap.size,
>       incomplete: this.getTodoItem(false).length,
>     };
>   }
> 
>   markComplete(id: number, complete: boolean): void {
>     const todoItem = this.getTodoById(id);
>     if (todoItem) {
>       todoItem.complete = complete;
>     }
>   }
> }
> 
> export default TodoCollection;
> 
> ```
>
> 
>
> ```
> npm i inquirer @types/inquirer
> ```
>
> 를 통해 `inquirer` 기본 모듈과  TypeScript 가 적용된 `@types/inquirer` 모듈을 설치한다. 
>
> 
>
> `src/view/TodoConsole.ts`
>
> ```ts
> import * as inquirer from "inquirer";
> import TodoItem from "../model/TodoItem";
> import TodoCollection from "../service/TodoCollection";
> import { data } from "../data";
> import { Commands } from "../model/Commands";
> 
> class TodoConsole {
>   private todoCollection: TodoCollection;
> 
>   constructor() {
>     const sampleTodos: TodoItem[] = data.map(
>       (item) => new TodoItem(item.id, item.task, item.complete)
>     );
>     this.todoCollection = new TodoCollection("My Todo List", sampleTodos);
>   }
> 
>   displayTodoList(): void {
>     console.log(
>       `=====${this.todoCollection.userName}=====` +
>         `(${this.todoCollection.getItemCounts().incomplete} items todo)`
>     );
>     this.todoCollection.getTodoItem(true).forEach((item) => item.printDetail());
>   }
> 
>   promptUser(): void {
>     console.clear();
>     this.displayTodoList();
>     
>     inquirer.prompt({
>         type: 'list',
>         name: 'command',
>         message: 'Choose option',
>         choices: Object.values(Commands),
>     }).then((answers) => {
>         if(answers["command"] !== Commands.Quit){
>             this.promptUser();
>         }
>     });
>   }
> }
> 
> export default TodoConsole;
> ```
>
> `src/model/Commands.ts`
>
> ```ts
> export enum Commands {
>     Quit = 'Quit',
> }
> ```
>
> 
