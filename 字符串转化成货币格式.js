/*
 * @Author: nanyang.yang
 * @Date: 2020-04-03 11:30:04
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-03 15:19:17
 * @Descripttion: 要求：输入一个字符串1234567890，输出一个字符串1,234,567,890
 */

const change = (str) => {
    if(!str){
        return '';
    }  
    const arr = str.split('');
    const result = [];
    let j = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        result.unshift(arr[i]);
        j++;
        if(j % 3 === 0){
            j = 0;
            result.unshift(',');
        }
    }
    return result.join('');
};

// 再换一个思路---------------------------------------
var change = (str) => {
    if(!str){
        return '';
    }  
    const arr = [...String(str)]; // 可以以后写这个字符串转化成数组
    let j = 0;
    return arr.reduceRight((result, value) => {
        j++;
        if(j % 3 === 0){
            j = 0;
            return `,${value}${result}`
        }else{
            return `${value}${result}`
        }
    }, "");
};

console.log(change('1234567890')); // 1,234,567,890