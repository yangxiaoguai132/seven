/*
 * @Author: nanyang.yang
 * @Date: 2020-03-30 19:40:01
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-03-30 19:49:56
 * @Descripttion: 手写bind实现
 */

// 第一版简单的：
Function.prototype.mybind = function(obj) {
    return (...agrs) => this.apply(obj, agrs);
}

// 柯里化高级版实现：
Function.prototype.mybind = function(obj) {
    const self = this;
    const agrs = Array.prototype.slice.call(arguments, 1);
    return function(){
        const bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(self, agrs.concat(bindArgs))
    }
}