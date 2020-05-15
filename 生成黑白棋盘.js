/*
 * @Author: nanyang.yang
 * @Date: 2020-04-08 14:22:53
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 14:23:26
 * @Descripttion: 最小的时间复杂度生成黑白棋盘
 */
// num为正方形边长
function func(num){
    let evenRow = ""; // 基数行
    let oddRow = ""; // 偶数行
    for (let i = 0; i < num / 2; i++) {
        evenRow += "白黑";
        oddRow += "黑白";
    }
    for (let j = 0; j < num; j++) {
        if(j % 2 == 0){
            console.log(evenRow);
        }else{
            console.log(oddRow);
        }
    }
}