/*
 * @Author: nanyang.yang
 * @Date: 2020-05-16 07:29:54
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-05-16 07:31:10
 * @Descripttion: 
 */ 
// 数组A: ['1','2','3','4','5','6']
// 数组B: ['a','b','c', 'd']

// 输出：
// ['1','2', 'a','3','4','b', 5','6', 'c', 'd']

function func(arr1, arr2){
    if(!arr1 instanceof Array || !arr2 instanceof Array){
       return [];
    }
    if(arr1 && arr1.length === 0){
      return arr2;
    }
    if(arr2 && arr2.length === 0){
      return arr1;
    }
    const result = [];
    let p1 = 0;
    let p2 = 0;
    while(p1<arr1.length && p2<arr2.length){
      if(p1 % 2 !== 0){
         result.push(arr1[p1]);
         p1++;
      }else{
        result.push(arr2[p2]);
        result.push(arr1[p1]);
        p2++;
        p1++;
      }
    }
    while(p1<arr1.length){
       result.push(arr1[p1]);
       p1++;
    }
    while(p2<arr2.length){
       result.push(arr2[p2]);
       p2++;
    }
    if(p1<arr1.length){
      result=result.concat(arr1.slice(p1));
    }
    return result;
}

// 输出以下结果
async function a1() {
  console.log('a1 start')
  await a2()
  console.log('a1 end')
}
async function a2() {
  console.log('a2')
}
    
setTimeout(() => {
  console.log('setTimeout1')
    a1();
}, 0)
    
    
Promise.resolve().then(() => {
  console.log('promise2')
})

setTimeout(() => {
  console.log('setTimeout2')
}, 0)

a1()

new Promise((resolve) => {
  resolve('promise3.then')
  console.log('promise3')
})