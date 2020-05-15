/*
 * @Author: nanyang.yang
 * @Date: 2020-04-10 10:34:31
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-10 11:42:20
 * @Descripttion: js中多种继承方式
 */

// 1.原型链继承=============================================
// 将父类SuperType的实例，作为子类SubType的原型。
// 这样就是父类的原型属性还在父类的prototype上，子类通过_proto_，
// 找到SubType.prototype，SubType.prototype而这个此时偏偏指向了父类的实例，
// SubType.prototype上面是存在SuperType的实例属性的，
// 这样通过父类的_proto_找到父类的原型。就实现了继承。
// 首先定义一个父类如下：
function SuperType () {
    this.name = 'SuperType';
}
SuperType.prototype.sayName = function() {
    return this.name;
};
function SubType () {
    this.subName = "SubType";
};
// 原型链继承关键
SubType.prototype = new SuperType();
SubType.prototype.saySubName = function () {
    return this.subName;
};

// 优点：继承了父类的模板，也就是实例属性，也继承了父类的原型对象。
// 缺点：
// * 无法实现多继承
// * 来自原型对象的所有属性被所有实例共享，更改 SuperType 引用类型属性时，
// 会使 SubType 所有实例共享这一更新。基础类型属性更新则不会.
// * 创建子类实例时，无法向父类构造函数传参，或者说是，
// 没办法在不影响所有对象实例的情况下，向超类的构造函数传递参数。说
// 白了就是如果是修改了SuperType上面的属性的话，会影响下面的实例。



// 2.构造函数继承=============================================
// 使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
// 父类
function SuperType (name) {
    this.name = name; 
}
SuperType.prototype.sayName = function () { 
    return this.name;
};
function SubType(name, subName){
    SuperType.call(this, name); // 关键
    this.subName = subName;
}
// 优点：
// * 解决了1中子类实例共享父类引用对象的问题，实现多继承，创建子类实例时，可以向父类传递参数
// 缺点：
// * 实例并不是父类的实例，只是子类的实例
// * 只能继承父类的实例属性和方法，不能继承原型属性/方法
// * 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能



// 3.组合继承=============================================
// 优点：
// * 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法，不存在引用属性共享问题，可传参，可复用
// 缺点：
// * 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
function SuperType (name) {
    this.colors = ["red", "blue", "green"];
    this.name = name; 
}
SuperType.prototype.sayName = function () { 
    return this.name;
};

function SubType(name, subName) {
    SuperType.call(this, name);
    this.subName = subName;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.saySubName = function () { 
    return this.subName;
}


// 4.寄生组合式继承=============================================
// 优点：
// * 只调用一次 SuperType 构造函数，只创建一份父类属性
// * 原型链保持不变
// * 能够正常使用 instanceof 与 isPrototypeOf
function SuperType (name) {
    this.colors = ["red", "blue", "green"];
    this.name = name; 
}
SuperType.prototype.sayName = function () { 
return this.name;
};
function SubType (name, subName) {
    SuperType.call(this, name); 
    this.subName = subName;
};
// ----第一次调用 SuperType，继承原型属性，关键点----
SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;


// 多继承=============================================
function SuperType () {}
function OtherSuperType () {}
function AnotherType () {
  SuperType.call(this) 
  OtherSuperType.call(this) 
}
AnotherType.prototype = Object.create(SuperType.prototype);
Object.assign(AnotherType.prototype, OtherSuperType.prototype);
AnotherType.prototype.constructor = AnotherType;
AnotherType.prototype.myMethod = function() {
};
let instance = new AnotherType()
