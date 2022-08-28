//템플릿 문자열
// let lastNm = '채'
// let frstNm = '지훈'
// let fullNm = '내이름은 ' + lastNm + frstNm + ' 입니다.'

// console.log(fullNm)
// //=> 실핻 결과 : 내이름은 채지훈 입니다.

let lastNm = "채";
let frstNm = "지훈";
let fullNm = `내이름은 ${lastNm}${frstNm} 입니다.`;

console.log(fullNm);
//=> 실핻 결과 : 내이름은 채지훈 입니다.

//객체 리터럴

let sayNode = function () {
  console.log("Node");
};
let es = "ES";
let oldObject = {
  sayJS: function () {
    console.log("JS");
  },
  sayNode: sayNode,
};

oldObject[es + 6] = "Fantastic";
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

//=>

const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode,
  [es + 6]: "Fantastic",
};

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

// Arrow function
function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => x + y;

function not1(x) {
  return !x;
}

const not2 = (x) => !x;

console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
console.log(not1(1));
console.log(not2(1));

let relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    let that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

const relationship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();

// 구조 분해 할당
var candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy() {
    // this.status.count--;
    return this;
    // return this.status.count;
  },
};
// var getCandy = candyMachine.getCandy;
// console.log(getCandy());
// var count = candyMachine.status.count;
// console.log(count);
// =>
const {
  getCandy,
  status: { count },
} = candyMachine;

console.log(candyMachine.status.count);
console.log(getCandy());
console.log(count);

// 클래스
// var Human = function (type) {
//   this.type = type || "human";
// };

// Human.ishuman = function (human) {
//   return human instanceof Human;
// };

// Human.prototype.breathe = function () {
//   alert("h-a-a-a-m");
// };

// var Zero = function (typ, firstName, lastName) {
//   Human.apply(this, arguments);
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;
// Zero.prototype.sayName = function () {
//   alert(`${this.firstName} ${this.lastName}`);
// };

// var oldZero = new Zero("human", "Zero", "Cho");

// Human.ishuman(oldZero);

class Human {
  constructor(type = "human") {
    this.type = type;
  }

  static ishuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert("h-a-a-a-m");
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero("human", "Zero", "Cho");

Human.ishuman(newZero);

// Promise
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

// promise
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log('무조건');
// 	});

promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.error(error);
  });

function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => {  // 첫번째 콜백
    if (err) {
      return console.error(err);
    }
    user.name = 'zero';
    user.save((err) => { // 두번째 콜백
      if(err) {
        return console.error(err);
      }
      Users.findOne({ geender : 'm' }, (err, user) => {
        // 생략
      });
    });
  });
}

// =>

function findAndSaveUser(Users) {
  Users.findOne({}) 
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
      // 생략
    })
    .catch(err => {
      console.error(err);
    });
}


const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });






// async/await

async function findAndSaveUser(Users) {
  let user = await Users.findOne({});
  user.name = 'zero';
  user = await user.save();
  user = await Users.findOne({ gender: 'm' });
  // 생략
}


async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // 생략
  } catch (error) {
    console.error(error);
  }
};


// const promise1 = Promise.resolve('성공1');
// const promise2 = Promise.resolve('성공2');
// (async () => {
//   for await (promise of [promise1, promise2]) {
//     console.log(promise);
//   }
// });


async function findAndSaveUser(Users) {
  // 생략
}
findAndSaveUser().then(() => { /* 생략 */ });
// 또는
async function ohter() {
  const result = await findAndSaveUser();
}