/*
 * @Author: nanyang.yang
 * @Date: 2020-03-30 15:11:07
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-03-31 21:49:13
 * @Descripttion: 
 */
// 延迟计算
const add = (...args) => args.reduce((a, b) => a + b);
 
// 简化写法
const currying = (func) => {
    const args = [];
    return function result(...rest) {
        if(rest.length === 0){
            return func(...args);
        }else{
            args.push(...rest);
            return result;
        }
    }
}
// -----------------------------------------------------------
// 固定异变因素
Function.prototype.mybind = function(obj) {
    const self = this;
    const agrs = Array.prototype.slice.call(arguments, 1);
    return function(){
        const bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(self, agrs.concat(bindArgs))
    }
}
// -----------------------------------------------------------

// num为正方形边长
function func(num){
    let evenRow = ""; // 基数行
    let oddRow = ""; // 偶数行
    for (let i = 0; i < num / 2; i++) {
        evenRow += "白黑";
        oddRow += "黑白";
    }
    for (let j = 0; j < num; j++) {
        if(j % 2 == 0){
            console.log(evenRow);
        }else{
            console.log(oddRow);
        }
    }
}