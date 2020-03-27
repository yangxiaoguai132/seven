// 节流函数代码

// timer版
function throttle(fn, timer) {
    let timer = null;
    return function(){
        if(!timer){
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                clearTimeout(timer);
            }, timer);
        }
    };
}

// 时间戳版
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

// 单一开关版
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