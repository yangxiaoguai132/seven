/*
 * @Author: nanyang.yang
 * @Date: 2020-03-30 21:49:49
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-03-30 22:09:30
 * @Descripttion: 
 */

Promise.resolve()
.then(() => {
    console.log('then')
});
setImmediate(() => {
    console.log('setImmediate')
});
setTimeout(() => {
    console.log('setTimeout')
});
process.nextTick(() => {
    console.log('nextTick')
});
console.log('end');