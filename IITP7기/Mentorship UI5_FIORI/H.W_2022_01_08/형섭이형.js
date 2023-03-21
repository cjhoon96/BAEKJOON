function dflt(a, b){
    return a*b;
}

function calc(a, b = 0, func = dflt){
    return func(a, b);
}

function minu(x, y){
    return x-y;
}

var rslt = calc(1, 3, minu);
// var rslt = calc(1, 3, function(x, y){
//     return x - y;
// })

console.log(rslt);

var rslt2 = calc(10);