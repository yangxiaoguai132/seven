// 一个promise自己玩的各种情况测试代码


// --------------------------------------------------------------
// 例1：一个数组里面有100个字符串id
// 如果要是发送请求的话，需要同时发送100次
// 如果有一个需求，首先先同时发送3个，然后其中
// 有一个请求回来了，发送第四个，另外一个请求回来，发送第5个，依次类推
// 最后将100结果装进一个数组返回
// 传入参数idList = [0,1,2....100];输出一个数组result[]

// 获取这个函数
const getData = ((id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${id}请求结果`);
            resolve(`${id}请求结果`);
        }, 0);
    }).catch((err) => {
        reject(`${id}请求error`, `${err}`);
    });
});
// 保存id的数组
const idList = [...(new Array(100)).keys()];
// 主函数
async function func(idList){
    return new Promise((resolve, reject) => {
        try{
            let result = [];
            let i = 0;
            let len = idList.length;
            if(!idList || (idList && len === 0)){
                resolve(result);
            }
            for(; i < 3; i++){
                handle(result, i);
            }
            function handle(result, i){
                getData(idList[i]).then((value) => {
                    if(i === len - 1){
                        resolve(result);
                    }
                    result[i] = value;
                    i = i + 3;
                    if(i < len){
                        handle(result, i);
                    }
                }).catch((err) => {
                    if(i === len - 1){
                        resolve(result);
                    }
                    result[i] = err;
                    i = i + 3;
                    if(i < len){
                        handle(result, i);
                    }
                });
            }
        }catch(e){
            reject(`func傻逼的错误`, e);
        }
    });
}
async function main(){
    const arr = await func(idList);
    console.log('arr', arr);
}
main();


// --------------------------------------------------------------
// 例2：输出
Promise.resolve()
.then(() => {
    // 这里是return 出去一个error
    // then方法里面的return出去的如果不是promise对象
    // 都相当于是Promise.resolve包裹了一层一样
    // 下面的代码相当于是return Promise.resolve(new Error('error!!!'))
    return new Error('error!!!')
})
.then((res) => {
    console.log('then: ', res)
})
.catch((err) => {
    console.log('catch: ', err)
});
// 输出
// then: Error: error!!!
//     at Promise.resolve.then (...)
//     at ...
// 应该改成：
// return Promise.reject(new Error('error!!!'))
// throw new Error('error!!!')


// --------------------------------------------------------------
// 例3：输出
const promise = Promise.resolve()
  .then(() => {
    // .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
    return promise
  })
promise.catch(console.error)
// TypeError: Chaining cycle detected for promise #<Promise>
//     at <anonymous>
//     at process._tickCallback (internal/process/next_tick.js:188:7)
//     at Function.Module.runMain (module.js:667:11)
//     at startup (bootstrap_node.js:187:16)
//     at bootstrap_node.js:607:3


// --------------------------------------------------------------
// 例4：使用promise实现:
// 开始的时候console.log('start')
// 等待3秒后console.log('first step finished')
// 之后用ajax对www.baidu.com发出get请求，
// 请求返回后结果给下个promise
// console.log输出结果
console.log('start');
function stepOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('first step finished');
            resolve();
        }, 3000);
    });
}
function stepTwo() {
    return new Promise((resolve, reject) => {
        console.log('baidu request go');
        setTimeout(() => {
            console.log('baidu request return');
            resolve('7777777');
        }, 10000);
    });
}
stepOne().then(() => {
    // 这里要加上return，否则是下面请求的value是undefined，因为函数执行默认
    // 返回是undefined
    // 并且还要看stepTwo是同步还是异步，异步的话
    // 下面的then会先执行
    return stepTwo();
    // stepTwo();
}).then((value) => {
    console.log('请求回来的结果', value);
}).catch((err) => {
    console.log(err);
});



// --------------------------------------------------------------
// 例5：使用promise实现:以请求一个无法加载的图片为例子
// 请求超时
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('img request timeout');
            resolve();
        }, 8000);
    });
}
// 图片请求
function imgRequest() {
    return new Promise((resolve, reject) => {
        console.log('img request go');
        setTimeout(() => {
            console.log('img request return');
            resolve();
        }, 3000);
    });
}
Promise.race([imgRequest(), timeout()]).then(() => {
    console.log('done');
}).catch((error) => {
    console.log('error', error);
});


/**
 * @description: 红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在
 * @param {type} 
 * @return: 
 * 
 */
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
function light(f, timer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            f();
            resolve();
        }, timer);
    });
}
function func(){
    Promise.resolve().then(() => {
        return light(red, 2);
    })
    .then(() => {
        return light(green, 2);
    })
    .then(() => {
        return light(yellow, 2);
    }).then(() => {
        func();
    });
}
func();