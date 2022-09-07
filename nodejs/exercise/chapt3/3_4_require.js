console.log('require 이 가장 위에 오지 않아도 된다.');

module.exports = 'find me';

require('./3_4_var');

console.log('require.cache 이다.');
console.log(require.cache);
console.log('require.main 이다.');
console.log(require.main === module);
console.log(require.main.filename);