/*
 * @Author: nanyang.yang
 * @Date: 2020-03-26 18:37:34
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 19:56:01
 * @Descripttion: 深拷贝
 */
function deepClone(obj){
    if(obj instanceof Date){
        return new Date(obj);
    }
    if(obj instanceof RegExp){
        return new RegExp(obj);
    }
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }
    let isArray = obj instanceof Array? true: false;
    let objCopy = isArray? []: {};
    if (isArray) {
        for(let i = 0; i < obj.length; i++){
            objCopy[key] = deepClone(obj[i]);
        }
    } else {
        for(let key in obj){
            if(obj.hasOwnPrototype(key)){
                objCopy[key] = deepClone(obj[key]);
            }
        }
    }
}

// 如果有循环引用的可以如何处理,就是加入一个缓存
function deepClone(obj, hash = new WeekMap()) {
    if(obj instanceof Date){
        return new Date(obj);
    }
    if(obj instanceof RegExp){
        return new RegExp(obj);
    }
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }
    if(hash.has(obj)){
        return hash.get(obj);
    }
    if(hash.has(obj)){
        return hash.get(obj);
    }
    let isArray = obj instanceof Array? true: false;
    let objCopy = isArray? []: {};
    hash.add(obj, objCopy);
    if (isArray) {
        for(let i = 0; i < obj.length; i++){
            objCopy[key] = deepClone(obj[i]);
        }
    } else {
        for(let key in obj){
            if(obj.hasOwnPrototype(key)){
                objCopy[key] = deepClone(obj[key]);
            }
        }
    }
}