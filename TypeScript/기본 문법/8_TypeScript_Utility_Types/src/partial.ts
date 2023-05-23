interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

// let admin : User = {
//     id: 1, 
//     name: "Bob"
// }


let admin : Partial<User> = {
    id: 1, 
    name: "Bob",
}