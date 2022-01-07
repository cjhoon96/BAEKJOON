//1.	응용 문제
//예시 코드
var aList;

var aList = [
  { key: 1, parent: undefined },
  { key: 2, parent: 1 },
  { key: 3, parent: 1 },
  { key: 4, parent: 2 },
  { key: 5, parent: 2 },
  { key: 6, parent: 3 },
];



for (var i = 0 ; i < aList.length ; i++){
  now = aList[i];
  now.child = aList.filter(function(a){
    return a.parent === now.key;
  })

//filter 의 동작 ==> aList.filter( function(  ) )



  console.log('**********************************************************************************************************************************************************')
  console.log('**********************************************************************************************************************************************************')
  console.log("*& key", i + 1)
  console.log('**********************************************************************************************************************************************************')
  console.log('**********************************************************************************************************************************************************')
  console.log('*& Node1********************************************************************************************************************************')
  console.log(aList[0]);
  console.log('*& Node2************************************************************************************************')
  console.log(aList[1]);
  console.log('*& Node3****************************************************************')
  console.log(aList[3], aList[4]);
  console.log('*& Node2************************************************************************************************')
  console.log(aList[1], aList[2]);
  console.log('*& Node3****************************************************************')
  console.log(aList[5])
}
var oTree = [aList[0]];

console.log(oTree);


// var Tree = aList.shift();
// Tree.child = aList.filter(function(a){
//   return a.parent === Tree.key;  
// })
// oTree.push(Tree);

// while (aList){
//   var now;
//   now = aList.shift();
//   if (now == undefined){
//     break;
//   }
//   now.child = aList.filter(function(a){
//     console.log(a, a.parent, now.key)
//     return a.parent == now.key;
//   })
//   console.log('**************');
//   console.log(now);
//   console.log(now.child);
//   console.log(Tree);
//   console.log('**************');
// }
// console.log(oTree);



// oTree.push(now);
//경로를 탐색 oTree를 for 문을 통해 key가 경로에 
//해당할때마다 앞에서 부터하나씩 제거

//위 예시 코드의 배열을 아래 Tree 구조로 바꾸는 로직 작성하기
// // var oTree;
// now = {[]}
// oTree = [
//   {
//     key: 1,
//     parent: undefined,
//     children: [
//       {
//         key: 2,
//         parent: 1,
//         children: [
//           {
//             key: 4,
//             parent: 2,
//             children: [],
//           },
//           {
//             key: 5,
//             parent: 2,
//             children: [],
//           },
//         ],
//       },
//       {
//         key: 3,
//         parent: 1,
//         children: [
//           {
//             key: 6,
//             parent: 3,
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
// ];


