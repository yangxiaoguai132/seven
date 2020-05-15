/*
 * @Author: nanyang.yang
 * @Date: 2020-04-19 11:39:29
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-19 11:39:41
 * @Descripttion: 
 */
function plus(str1, str2) {
    if(!str1 || !str2){
        return '0';
    }
    if(str1 === '0'){
        return str2;
    }
    if(str2 === '0'){
        return str1;
    }
    const strArray1 = [...String(str1)];
    const strArray2 = [...String(str2)];
    strArray1.reverse();
    strArray2.reverse();
    let len1 = strArray1.length;
    let len2 = strArray2.length;
    if(len1 < len2){
        for(let i = len1; i < len2 ;i++){
            strArray1.push('0');
        }
    }else if(len1 > len2){
        for(let i = len2; i < len1 ;i++){
            strArray2.push('0');
        }
    }
    
    const result = [];
    let flag = 0;
    for(let j = 0; j < len1; j++){
        const value1 = strArray1[j] - '0';
        const value2 = strArray2[j] - '0';
        let value = value1 + value2 + flag;
        if(value >= 10){
            value = value % 10;
            flag = 1;
        }else{
           flag = 0;
        }
        result.push(value);
    }
    
    if(flag === 1){
        result.push('1');
    }
    return result.reverse().join('');
    
} // 返回结果也是 str
console.log(plus("111", "9"));
console.log(plus("99", "9"));
console.log(plus("11", "1"));