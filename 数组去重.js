/*
 * @Author: nanyang.yang
 * @Date: 2020-04-08 20:23:05
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 20:34:06
 * @Descripttion: uniq,数组去重函数
 */
function uniq(arr){
    return [...new Set(arr)];
}