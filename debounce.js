/*
 * @Author: nanyang.yang
 * @Date: 2020-03-27 19:57:33
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 14:47:21
 * @Descripttion: 防抖
 */

function debounce(fn, time) {
    let timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, time);
    };
}