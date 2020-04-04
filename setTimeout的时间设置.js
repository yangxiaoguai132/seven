/*
 * @Author: nanyang.yang
 * @Date: 2020-04-03 19:52:15
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-04 17:57:06
 * @Descripttion: 关于setTimeout应该输出多少
 */
// ===================================================
// 虽说setTimeout里面有一堆，那么就是看时间了
// 同一队列中的setTimeout执行先后顺序要看时间了
setTimeout(() => {
    setTimeout(() => {
        console.log('4');
    }, 0);
    console.log('1');
    setTimeout(() => {
        console.log('5');
    }, 100);
}, 0);
setTimeout(() => {
    console.log('3');
}, 100);
console.log('2');
