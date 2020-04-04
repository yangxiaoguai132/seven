// 这个文件是要实现手写promise的一个实现练习
// 定义的三个状态，其实应该是私有变量
const PENDING = 'pending'  
const RESOLVED = 'resolved' //官方为fulfilled 
const REJECTED = 'rejected'  

// promise就是一个构造函数
function Promsise(func) {
    var self = this;
    self.status = PENDING;
    self.data = undefined //存储结果  
    self.callbacks = [] // 回调函数, 结构为{ onResolved() {}, onRejected() {}}  


    // resolve函数
    function resolve(value){
        if (self.status !== PENDING) return; 
        self.status = RESOLVED;
        self.data = value;
        if(self.callbacks.length > 0){
            setTimeout(() => {
                self.callbacks.forEach((item) => {
                    item.onResolved(value);
                });
            }, 0);
        }
    }
    // reject函数
    function reject(value){
        if (self.status !== PENDING) return;
        self.status = REJECTED;
        self.data = value;
        if(self.callbacks.length > 0){
            setTimeout(() => {
                self.callbacks.forEach((item) => {
                    item.onRejected(value);
                });
            }, 0);
        }
    }
    try{
        func(resolve, reject);
    }catch(e){   
        reject(e);
    }
}

// then方法
Promise.prototype.then(function(onResolved, onRejected){
    var self = this;
    // then方法传递的参数进来有两种情况
    // 第一种是function，第二种不是function
    // function的时候就是保留的，不是function的时候，将结果往后传
    onResolved = typeof onResolved === 'function'? onResolved: value => value;
    //向后传递失败的结果  
    //指定默认的失败回调,此处是实现异常穿透的关键点  
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {  
        throw reason  
    }  
    return new Promise(function(resolve, reject){
        function handle(callback) {
            /*  
                1. 如果抛出异常, return的promise就会失败, reason就是error 
                2. 如果回调函数返回不是promise, return的promise就会成功, value就是返回的值 
                3. 如果回调函数返回是promise, return的promise结果就是这个promise的结果 
            */  
            

            try{
                var result = callback(data);
                if(result instanceof Promise){
                    result.then(  
                        // 当result成功时,return的promise成功  
                        value => resolve(value),  
                        // 当result失败时,return的promise失败  
                        reason => reject(reason)  
                    )  
                    //简写方式  
                    //result.then(resolve, reject)  
                }else{
                    //2. 如果回调函数返回不是promise, return的promise就会成功, value就是返回的值 
                    resolve(result);
                }
            }catch(e){
                reject(e);
            }
        }
        try{
            if(self.status === PENDING){
                self.callbacks.push({
                    onResolved() {  
                        handle(onResolved)  
                    },  
                    onRejected() {  
                        handle(onRejected)  
                    } 
                })
            }else if(self.status === RESOLVED){
                handle(onResolved);
            }else{
                handle(onRejected);
            }
        }catch(e){
            rejected(e);
        }
    });
});

// catch方法
Promise.prototype.catch(function(){
    return this.then(undefined, onRejected)  
});

// resolve方法
Promise.resolve(function(value){
    return new Promise((resolve, reject) => {
        if(value instanceof Promise){
            value.then(resolve, reject);
        }else{
            resolve(value);
        }
    });
});

// reject方法
Promise.reject(function(value){
    return new Promise((resolve, reject) => {
        reject(value);
    }); 
});

// race方法
Promise.race = function(promises){
    return new Promise(function(resolve, reject){
        promises.forEach(promise => {
            Promise.resolve(promise).then(
                //由第一个完成的promise的结果决定return的promise的结果  
                value => resolve(value),
                reason => reject(reason)
            );
        });
    });
};

// all方法
Promise.all = function(promises){
    let length = promises.length;
    let count = 0;
    let data = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((value) => {
                count++;
                data[index] = value;
                if(count === length){
                    resolve(data);
                }
            }, (reason) => {
                reject(reason);
            });
        });
    });
};