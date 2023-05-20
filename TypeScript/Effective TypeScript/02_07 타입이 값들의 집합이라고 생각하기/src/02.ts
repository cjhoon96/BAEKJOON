// type a = 'a';
// type b = 'b';
// type Twelve = 12;
// let Num: Twelve = 13;
/////////////////////////////
// type ab = 'a' | 'b';
// type ab12 = 'a' | 'b' | 12;
// const C: ab = 'c';
/////////////////////////////


/////////////////////////////
interface Person {
    firstName: string;
    lastName: string;
}
interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan1 = Person & Lifespan
type PersonSpan2 = Person | Lifespan

let jihoon1: PersonSpan1 = {
    firstName: 'Jihoon',
    lastName: "Chae"
    death: new Date()
}// 오류

let jihoon1_1: PersonSpan1 = {
    firstName: "Jihoon",
    lastName: "Chae",
    birth: new Date(),
    death: new Date(),
}
let jihoon2: PersonSpan2 = {
    firstName: 'Jihoon',
    death: new Date()
}//오류
let jihoon2_1: PersonSpan2 = {
    firstName: 'Jihoon',
    birth: new Date(),
    death: new Date()
}
let jihoon2_2: PersonSpan2 = {
    firstName: 'Jihoon',
    lastName: "Chae",
    death: new Date()
}


type key1_1 = keyof(PersonSpan1);
type key1 = keyof(Person&Lifespan);
type key2_1 = keyof(PersonSpan2);
type key2 = keyof(Person|Lifespan)



// interface 
/////////////////////////////

/////////////////////////////

/////////////////////////////

/////////////////////////////

/////////////////////////////

/////////////////////////////

/////////////////////////////

/////////////////////////////
