/*
 * @Author: nanyang.yang
 * @Date: 2020-04-08 12:59:44
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 12:59:56
 * @Descripttion: 一个人总共吹过253根蜡烛，他多少岁了
一岁吹一根，两岁吹两根，以此类推。。。
 */
// TODO 请在这里编写代码
function func(num){
    if(!num){
        return 0;
    }
    let n = 0;
    let m = p(1+4*2*num);
    n = m === 0? m: Number((1+m)/2);
    return n;
}
function p(n){
    for(let i = 1; i <= n/2; i++){
        if(i * i === n){
            return i;
        }
    }
    return 0;
}
console.log(func(253));