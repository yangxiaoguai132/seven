/*
 * @Author: nanyang.yang
 * @Date: 2020-04-11 11:14:14
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-11 11:44:11
 * @Descripttion: 查看下列输出
 */

var x = 1, y = 0, z = 0; 
var add = function (x) {
    // 这个话客户解析成为一个x=x+1,return x
    // 这里就是改变的是x这个形参，不会改到外面的x上去
    return x = x+1;
}
y = add(x); 
function add (x) {
    return x = x + 3;
}
z = add(x); 
console.log(x, y, z); // 1，2，2