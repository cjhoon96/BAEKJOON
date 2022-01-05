aValue = [
    { a: 1, b: 3 },
    { a: 2, b: 2 },
    { a: 3, b: 1 },
    { a: 2, b: 5 },
    { a: 3, b: 4 },
    { a: 1, b: 1 }
    ];
aValue.sort(function(o1, o2){
    return o1.a - o2.a;
    
});
console.log(aValue);