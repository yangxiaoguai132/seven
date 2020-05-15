/*
 * @Author: nanyang.yang
 * @Date: 2020-04-06 18:26:54
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-06 19:00:47
 * @Descripttion: 
 */
var object = {a:0};
function fun(obj){
    obj.a = 1;
    obj = { a: 2 };
    obj.b = 2;
}
fun(object);
console.log(object); // {a:1}