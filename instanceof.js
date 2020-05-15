/*
 * @Author: nanyang.yang
 * @Date: 2020-04-14 09:31:30
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-14 09:32:11
 * @Descripttion: 手写instanceof实现
 */
// instanceof 的内部实现 
function instance_of(L, R) {//L 表左表达式，R 表示右表达式，即L为变量，R为类型
    // 取 R 的显示原型
    var prototype = R.prototype
    // 取 L 的隐式原型
    L = L.__proto__
    // 判断对象（L）的类型是否严格等于类型（R）的显式原型
    while (true) { 
        if (L === null) {
            return false
        }

        // 这里重点：当 prototype 严格等于 L 时，返回 true
        if (prototype === L) {
            return true
        } 

        L = L.__proto__
    } 
}