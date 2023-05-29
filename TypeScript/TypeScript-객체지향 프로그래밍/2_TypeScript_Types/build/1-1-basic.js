"use strict";
{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array.....
     */
    // number
    const num = -6;
    // string
    const str = 'hello';
    // boolean
    const boal = false;
    // undefined
    let name; // 💩
    let age;
    age = undefined;
    age = 1;
    function find() {
        return undefined;
    }
    // null
    let person; // 💩
    let person2;
    // unknown 💩
    let notSure = 0;
    notSure = 'he';
    notSure = true;
    // any 💩
    let anything = 0;
    anything = 'hello';
    // void
    function print() {
        console.log('hello');
        return;
    }
    let unusable = undefined; // 💩
    // never
    function throwError(message) {
        // message -> server (log)
        throw new Error(message);
        while (true) { }
    }
    let neverEnding; // 💩
    // objet
    let obj; // 💩
    function acceptSomeObject(obj) { }
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
}
let obj;
obj = [1, 3];
obj = {
    name: 'jihoon'
};
