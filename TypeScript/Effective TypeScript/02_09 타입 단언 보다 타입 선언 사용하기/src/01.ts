interface Person {
  name: string;
}

// const alice: Person = { name: "Alice" };
// const bob_1 = { name: "Bob" } as Person;
// const bob_2 = <Person>{ name: "Bob" };

// const people_1: Person[] = ['alice', 'bob', 'jan'].map(name => ({name} as Person));

// // const people = ['alice', 'bob', 'jan'].map(name => {
// //     const person: Person = {name};
// //     return person
// // });

// // const people = ["alice", "bob", "jan"].map((name): Person => ({ name }));

// const people: Person[] = ["alice", "bob", "jan"].map((name): Person => ({ name }));


const divEl = document.querySelector<HTMLButtonElement>('#myButton');
if (divEl) {
    divEl.addEventListener('click', e=> {
        e.currentTarget // 타입은 EventTarget
        const button = e.currentTarget 
    })
}


const elNull = document.getElementById('foo');
// const el = document.getElementById('foo')!;

const body = document.body;
const el = body as never as Person;


const people = ['alice', 'bob', 'jan'].map(name => ({name}));


let a = (a, b): number => {return a+b}
