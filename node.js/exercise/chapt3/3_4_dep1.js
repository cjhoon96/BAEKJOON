const dep2 = require('./3_4_dep2');
console.log('require dep2', dep2);
module.exports = () => {
  console.log('dep2', dep2);
}