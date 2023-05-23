type Key = '1' | '2' | '3' | '4';
type score_t = "A" | "B" | "C" | "D" ;
const score : Record< Key, score_t > = {
    1: "A",
    2: "C",
    3: "B",
    4: "D"
}

interface User3 {
    id: number;
    name: string;
    age: number;
}

// function isValid(user:User){
//     const result = {
//         id: user.id > 0,
//         name: user.name != "",
//         age: user.age > 0
//     };
//     return result
// }

function isValid(user:User3){
    const result: Record<keyof User3, boolean> = {
        id: user.id > 0,
        name: user.name != "",
        age: user.age > 0
    };
    return result
}

interface User4 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
}

const admin3: Omit<User4, "age" | "gender"> = {
    id: 0,
    name: "Bob"
};