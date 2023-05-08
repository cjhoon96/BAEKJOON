// String
let str: string = 'HelloWorld';
console.log(str);

// Number
let num: number = 10;
console.log(num);

// Boolean
let bool1: boolean = false;
let bool2: boolean = true;
console.log(bool1, bool2);

// Array
let arr1: number[] = [1, 2, 3, 4];
let arr2: Array<string> = ['hello', 'world'];
for (let i = 1; i <= arr1.length; i++){
    console.log(arr1[i]);
}
for (let j = 1; j <= arr2.length; j++){
    console.log(arr1[j]);
}

// Tuple
let arr: [string, number] = ['hi', 10]
// arr = [10, 'hi'] 와 같이 type 의 순서를 맞추지 않는 경우 오류가 발생한다. 
console.log(arr[0], arr[1])

// Enum
enum Os1 { 
    Window, 
    Ios, 
    Android
}
let nowOs1: Os1 = Os1.Window; 
let nowOs2: string = Os1[0];
console.log(nowOs1, nowOs2);

enum Os2 { 
    Window = 3, 
    Ios = 10, 
    Android
}
let nowOs3: string = Os2[3]; // Window
let nowOs4: string = Os2[10]; // Ios
let nowOs5: string = Os2[11]; // Android
console.log(nowOs3, nowOs4, nowOs5);
let osIdx3: Os2 = Os2.Window
let osIdx4: Os2 = Os2.Ios
let osIdx5: Os2 = Os2.Android
console.log(osIdx3, osIdx4, osIdx5);

enum Os3 { 
    Window = 'win', 
    Ios = 'ios', 
    Android = 'and'
}
let nowOs6: Os3 = Os3.Window; 
let nowOs7: Os3 = Os3.Ios; 
let nowOs8: Os3 = Os3.Android; 
console.log(nowOs6, nowOs7, nowOs8);
let idxOs6: Os3 = Os3['win'];