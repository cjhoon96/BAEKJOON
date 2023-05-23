type Score = 'A' | 'B' | 'C' | 'F';
interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number] : Score;
}
let user: User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
    3: 'C'
}

interface Student {
    [name: string]: number;
}
let stud: Student = {
    jihoon: 30
}
console.log(stud.jihoon)