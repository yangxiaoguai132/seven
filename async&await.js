/*
 * @Author: nanyang.yang
 * @Date: 2020-03-29 18:47:05
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-04 17:48:16
 * @Descripttion: async await一些执行测试小代码
 */
// --------------------------------------------------------------
// async await输出
console.log('1');
async function async1() {
    console.log('2');
    await console.log('3');
    console.log('4');
}
// 这句话就是主线程被占满，setTimeout还会执行吗，答案是不会，就是剩下的都不会输出了
setTimeout(function() {
    console.log('setTimeout');
}, 0);
while(true){} 
async1();
new Promise(function(resolve) {
    console.log('6');
    resolve();
}).then(function() {
    // while(true){}
    console.log('7');
});
console.log('8');

// --------------------------------------------------------------
// 处理如果一个await被reject了，其余不执行的问题
// 第一种处理方式，把容易出现错误的，用try catch包住
async function f(){
    try {
        await Promise.reject('出错了');
    }catch(err) {

    }
    // 这条语句如果放进上面的try里面，还是不执行的额
    return await Promise.resolve('hello word');
}
f().then(v => console.log(v)); // hello word
// 第二种处理方式,在容易出现错误的语句加上一个catch函数
async function f(){
    await Promise.reject('出错了').catch(() => {
        
    });
    // 这条语句如果放进上面的try里面，还是不执行的额
    return await Promise.resolve('hello word');
}
f().then(v => console.log(v)); // hello word