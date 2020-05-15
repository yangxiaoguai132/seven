/*
 * @Author: nanyang.yang
 * @Date: 2020-04-08 19:30:12
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 19:42:39
 * @Descripttion: 发布订阅模式-----观察者模式
 */
var event = {
    //缓存列表，存放订阅者的回调函数
    clientList: [],
    //增加订阅者, key:事件名，fn:回调函数
    listen: function(key, fn){
        if(!this.clientList[key]){
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    //发布消息
    trigger: function(){
        // 取出消息类型
        var key = Array.prototype.shift.call(arguments)
            // 取出消息类型对应的回调函数集合
            fns = this.clientList[key]
        // 如果没有订阅该消息，则返回
        if(!fns || fns.length === 0) {
            return false
        }
        for(var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    },
    //取消订阅
    remove: function(key, fn) {
        var fns = this.clientList[key]
        // 如果对应的消息没人订阅，直接返回
        if(!fns) {    
            return false
        }
        // 如果没有传入回调函数，表示取消key对应消息的所有订阅
        if(!fn){    
            fns && (fns.length = 0)
        } else {
            for(var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    fns.splice(l, 1)
                }
            }
        }
    }
}

var salesOffices = {}
// 给对象安装发布-订阅功能
var installEvent = function(obj){
    for(var i in event){
        obj[i] = event[i]
    }
}
installEvent(salesOffices)


salesOffices.listen('squareMeter88', fn1 = function(price){
    console.log('价格1：'+price)
})

salesOffices.listen('squareMeter87', fn2 = function(price){
    console.log('价格2：'+price)
})    

salesOffices.trigger('squareMeter88', 20000) // 价格1: 20000

salesOffices.remove('squareMeter88')

salesOffices.trigger('squareMeter88', fn1)  // 打印结果为空