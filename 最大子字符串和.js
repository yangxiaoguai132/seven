/*
 * @Author: nanyang.yang
 * @Date: 2020-04-09 12:15:19
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-09 12:15:46
 * @Descripttion: 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let max = nums[0];
    for(let num of nums){
        if(sum>0){
            sum+=num;
        }else{
            sum=num;
        }
        max = Math.max(sum, max);
    }
    return max;
};