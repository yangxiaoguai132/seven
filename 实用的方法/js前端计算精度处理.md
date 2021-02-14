<!--
 * @Author: nanyang.yang
 * @Date: 2020-07-05 10:40:29
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-07-05 10:41:26
 * @Descripttion: 
--> 
```
export function toFixed(num, len) {
  if (len > 20 || len < 0) {
    throw new RangeError('toFixed() digits argument must be between 0 and 20');
  }
  // .123转为0.123
  const number = Number(num);
  if (isNaN(number) || number >= Math.pow(10, 21)) {
    return number.toString();
  }
  if (typeof (len) === 'undefined' || len === 0) {
    return (Math.round(number)).toString();
  }
  let result = number.toString();
  const numberArr = result.split('.');
  if (numberArr.length < 2) {
    // 整数的情况
    return result;
  }
  const intNum = numberArr[0], // 整数部分
        deciNum = numberArr[1], // 小数部分
        lastNum = deciNum.substr(len, 1); // 最后一个数字

  if (deciNum.length === len) {
    // 需要截取的长度等于当前长度
    return result;
  }
  if (deciNum.length < len) {
    // 需要截取的长度大于当前长度 1.3.toFixed(2)
    return result;
  }

  // 需要截取的长度小于当前长度，需要判断最后一位数字
  result = intNum + '.' + deciNum.substr(0, len);
  if (parseInt(lastNum, 10) >= 5) {
    // 最后一位数字大于5，要进位
    const times = Math.pow(10, len); // 需要放大的倍数
    let changedInt = Number(result.replace('.', '')); // 截取后转为整数
    changedInt++; // 整数进位
    changedInt /= times; // 整数转为小数，注：有可能还是整数
    result = changedInt + '';
  }
  return padNum(result);

  // 处理末尾的0，0的话删掉
  function padNum(num) {
    const dotPos = num.indexOf('.');
    if (dotPos === -1) {
    // 整数
      return num;
    } else {
    // 小数
      while (num.substr(num.length - 1, 1) === '0') {
        num = num.slice(0, num.length - 1);
      }
      // 防止20. 出现
      if (num.substr(num.length - 1, 1) === '.') {
        num = num.slice(0, num.length - 1);
      }
      return num;
    }
  }
}
```