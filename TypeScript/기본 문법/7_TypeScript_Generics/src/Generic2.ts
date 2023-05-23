interface LengthWise {
    length: number;
}

function logText<T extends LengthWise>(text: T): T{
    console.log(text.length);
    return text;
}

function getProperty<T, O extends keyof T>(obj: T, key: O) {
    return obj[key];
}
let obj = {a: 1, b: 2, c: 3}

getProperty(obj, "a");
// getProperty(obj, "z"); // error

function logText2<T extends {length: number}>(text: T): T{
    console.log(text.length);
    return text;
}