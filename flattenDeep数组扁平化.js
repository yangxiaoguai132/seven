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

// 下面是一个腾讯的面试题
// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
// 扁平化
let flatArr = arr.flat(4)
// 去重
let disArr = Array.from(new Set(flatArr))
// 排序
let result = disArr.sort(function(a, b) {
    return a-b
})
console.log(result)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]