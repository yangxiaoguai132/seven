/*
 * @Author: nanyang.yang
 * @Date: 2020-04-09 20:31:26
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-09 20:34:02
 * @Descripttion: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    const arr = [...s];
    let len = 0;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j <= n; j++){
            if(check(arr, i, j)){
                len = Math.max(len, j-i);
            }
        }
    }
    return len;
};

var check = (arr, start, end) => {
    const set = new Set();
    for(let i = start; i < end ; i++){
        if(set.has(arr[i])){
            return false;
        }else{
            set.add(arr[i]);   
        }
    }
    return true;
}
