for (var i = 0 ; i < 10; i++){
var m = 10 - i;
for(var j = 0; j < m; j++){
    document.write("*");
}
document.write("<br/>")
}

document.write("<br/>")

var n = 10;
for (var i = 10 ; i > 0; i--){
for(var j = 0; j < i; j++){
    document.write("*");
}
document.write("<br/>")
}
document.write("<br/>")


for (var i = 10 ; i > 0; i--){
var a = Array(i).join("*")
document.write(a);
document.write("<br/>")
}
document.write("<br/>")


for (var i = 10 ; i > 0; i--){
var a = '*'.repeat(i);
document.write(a);
document.write("<br/>")
}
document.write("<br/>")
