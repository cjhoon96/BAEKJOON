// 구조 분해 할당
let candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  }
};
// var getCandy = candyMachine.getCandy;
// console.log(getCandy());
// var count = candyMachine.status.count;
// console.log(count);
// =>

console.log(candyMachine.getCandy());
// const {
//   getCandy,
//   status: { count },
// } = candyMachine;

// console.log(candyMachine.status.count);
// console.log(getCandy());
// console.log(count);
