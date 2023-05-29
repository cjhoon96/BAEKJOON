"use strict";
{
    /**
     * Type Assertions 💩
     */
    function jsStrFunc() {
        return 2;
    }
    const result = jsStrFunc();
    console.log(result.length);
    console.log(result.length);
    const wrong = 5;
    console.log(wrong.push(1)); // 😱
    function findNumbers() {
        return undefined;
    }
    const numbers = findNumbers();
    numbers.push(2); // 😱
    const button = document.querySelector('class');
}
