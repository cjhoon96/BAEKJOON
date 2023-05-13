tsc --init
npm init -y
npm install nodemon concurrently



`package.json`

```json
{
  "name": "ToDoList",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:build": "tsc -w", 
	// typescript compiler 를 통해 빌드를 진행할 때 -w watch 모드로 컴파일 과정을 console 로 확인을 할 수 있다. 
    "start:run": "nodemon build/index.js",
	// 실행할 때 nodemon 을 이용해 buid directory 의 index.js 를 실행한다. 
    "start": "concurrently npm:start:*"
	// 위의 build 와 run 을 병행하여 실행한다. 
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "concurrently": "^8.0.1",
    "nodemon": "^2.0.22"
  }
}
```



`src/index.js`

```ts
console.log("Hello TypeScript");
console.log("Hello TypeScript");
console.log("Hello TypeScript");
console.log("Hello TypeScript");
```

`tsc` 를 통해 compile 하면

`build` 폴더에 compile 된 `index.js` 파일이 생성된다.   



terminal 에 `npm start` 를 통해 실행하면 

```
[build]
[run] 
[run] > ToDoList@1.0.0 start:run C:\Users\cjhoon\Desktop\TIL\TypeScript\ToDoList
[run] > nodemon build/index.js
[run]
[build] 
[build] 오후 10:32:08 - Found 0 errors. Watching for file changes.
[run] [nodemon] 2.0.22
[run] [nodemon] to restart at any time, enter `rs`
[run] [nodemon] watching path(s): *.*
[run] [nodemon] watching extensions: js,mjs,json  
[run] [nodemon] starting `node build/index.js`    
[run] Hello TypeScript
[run] Hello TypeScript
[run] Hello TypeScript
[run] Hello TypeScript
[run] [nodemon] clean exit - waiting for changes before restart
```

와 같이 compile 내용과 run 과정을 살펴볼 수 있다. 





npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN ToDoList@1.0.0 No description
npm WARN ToDoList@1.0.0 No repository field.

+ concurrently@8.0.1
+ nodemon@2.0.22
added 62 packages from 56 contributors and audited 63 packages in 547.779s

10 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
