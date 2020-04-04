/*
 * @Author: nanyang.yang
 * @Date: 2020-03-31 11:59:10
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-03-31 12:30:15
 * @Descripttion: new函数里面做了什么
 */
// 简化版
funcion new() {
    // 创建一个空的对象
    var obj = {};
    // 获取构造函数，就是new后面的函数
    var Con = [].shift.call(arguments);
    // 链接到原型 （不推荐使用）
    obj.__proto__ = Con.prototype;
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments);
    return typeof result === 'object'? result: obj;
}

// 优化之后的
funcion new() {
    // 获取构造函数，就是new后面的函数
    var Con = [].shift.call(arguments);
    let obj = Object.create(Con.prototype);
    // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    let ret = Con.apply(obj, arguments);
    // 4、优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
    // 或者是
    // Con.apply(obj, arguments);
    // return obj;
}