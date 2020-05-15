/*
 * @Author: nanyang.yang
 * @Date: 2020-03-27 20:09:24
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 14:57:17
 * @Descripttion: 节流版代码
 */
// timer版==========================================
function throttle(fn, delay) {
    let timer = null;
    return function(){
        if(!timer){
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                clearTimeout(timer);
            }, delay);
        }
    };
}

// 时间戳版==========================================
function throttle(fn, timer) {
    let preTime = Date.now();
    return function(){
        let now = Date.now();
        if(now - preTime >= timer){
            fn.apply(this, arguments);
            preTime = Date.now();
        }
    };
}

// 单一开关版========================================
function throttle(fn, timer) {
    let canRun = true;
    return function(){
        if(!canRun) return;
        canRun = false;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, timer);
    };
}
// 单一开关版2========================================
function throttle(fn, timer) {
    let canRun = true;
    return function(){
        if(canRun){
            canRun = false;
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                canRun = true;
            }, timer);
        }
    };
}