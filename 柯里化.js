/*
 * @Author: nanyang.yang
 * @Date: 2020-03-30 15:11:07
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 14:24:11
 * @Descripttion: 柯里化一些用法
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
