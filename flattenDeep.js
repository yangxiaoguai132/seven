/*
 * @Author: nanyang.yang
 * @Date: 2020-04-08 20:17:38
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 20:28:48
 * @Descripttion: 嵌套的数组扁平化,flattenDeep([1, [2, [3, [4]], 5]]); //[1, 2, 3, 4, 5]
 */

// es6中新增的Array.prototype.flat
// ES6 为数组实例新增了 flat 方法，用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数组没有影响。
// flat 默认只会 “拉平” 一层，如果想要 “拉平” 多层的嵌套数组，需要给 flat 传递一个整数，表示想要拉平的层数。
function flattenDeep(arr, deepLength){
    return arr.flat(deepLength);
}

// reduce和concat函数==========================================
function flattenDeep(arr){
    return arr.reduce((acc, val) => {
        return Array.isArray(val)? acc.concat(flattenDeep(val)): acc.concat(val)
    }, []);
}