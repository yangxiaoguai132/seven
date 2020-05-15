/*
 * @Author: nanyang.yang
 * @Date: 2020-04-08 12:28:59
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 14:34:46
 * @Descripttion: koa洋葱模型
 */

function compose (middleware) {
    return function (context, next) {
        // last called middleware #
        let index = -1
        return dispatch(0)

        function dispatch (i) {
            if (i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            let fn = middleware[i]
            if (i === middleware.length) fn = next
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(context, function next () {
                    return dispatch(i + 1)
                }))
                } catch (err) {
                    return Promise.reject(err)
                }
        }
    }
}

// =============================================================
// 或者是下面这个样子
// 其中包含一个递归
const compose = (middlewares) => {
    return async function(ctx){// 传入上下文
        return dispatch(0);
        function dispatch(i){
            let fn = middlewares[i];
            if(!fn){
                return Promise.resolve();
            }
            return Promise.resolve(
                fn(ctx,function next(){
                    return dispatch(i+1)
                })
            )
        }
    }
}