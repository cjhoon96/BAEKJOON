


const response = fetch('http://example.com');


// function add(a: number, b: number) {
//   return a + b
// }

function logMessage(message: string|null) {
  if (message) {
    message
  }
}

const foo_1 = {
  x: [1, 2, 3],   // (property) x: number[]
  bar: {          // 
    name: 'Fred'
  }
}

// function logMessage(message: string | null) {
//   if (message) {
    
    
//     message
//   }
// }


const foo = {

  
  x: [1, 2, 3],
  bar: {
    name: 'Fred'
  }
};



function restOfPath(path: string) {
  return path.split('/').slice(1).join('/');
}

function getElement(elOrId: string|HTMLElement|null): HTMLElement {
  if (typeof elOrId === 'object') {
    return elOrId;
//  ~~~~~~~~~~~~~~ Type 'HTMLElement | null' is not assignable to type 'HTMLElement'.
//                 Type 'null' is not assignable to type 'HTMLElement'.
//                 type of null 은 'object' 이므로 해당 조건문은 null 을 걸러주지 못한다.

  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId);
    return el;
//  ~~~~~~~~~~ Type 'HTMLElement | null' is not assignable to type 'HTMLElement'.
//             Type 'null' is not assignable to type 'HTMLElement'
  }
}