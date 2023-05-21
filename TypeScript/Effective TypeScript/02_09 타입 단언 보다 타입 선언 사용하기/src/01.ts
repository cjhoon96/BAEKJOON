interface Person {
  name: string;
}

const alice: Person = { name: "Alice" };
const bob_1 = { name: "Bob" } as Person;
const bob_2 = <Person>{ name: "Bob" };

const people_1: Person[] = ['alice', 'bob', 'jan'].map(name => ({name} as Person));

// const people = ['alice', 'bob', 'jan'].map(name => {
//     const person: Person = {name};
//     return person
// });

// const people = ["alice", "bob", "jan"].map((name): Person => ({ name }));

const people: Person[] = ["alice", "bob", "jan"].map((name): Person => ({ name }));


// const divEl = document.querySelector('#myButton');
// if (divEl) {
//     document.querySelector('#myButton').addEventListener('click', 2=> {
//         e.currentTarget // 타입은 EventTarget
//         const button = e.currentTarget as HTMLButtonElement;
//     })
// }


// const elNull = document.getElementById('foo');
// const el = document.getElementById('foo')!;

const body = document.body;
const el = body as Person;