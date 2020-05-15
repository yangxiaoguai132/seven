/*
 * @Author: nanyang.yang
 * @Date: 2020-04-14 07:53:43
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-14 07:58:17
 * @Descripttion: redux中间件实现原理
 */
function applyMiddleware(middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    let dispatch = store.dispatch;
    middlewares.forEach(middleware =>
        dispatch = middleware(store)(dispatch)
    )
    return Object.assign({}, store, { dispatch });
}
  