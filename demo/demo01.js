/*
 * @Date: 2020-05-18 11:54:45
 * @information: https://www.tslang.cn/index.html
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getHello(val) {
    console.log("Hello, " + val.firstName + " " + val.lastName + " !");
}
var params1 = { firstName: 'Jane', lastName: 'User' };
function getUser(val) {
    var user = { name: 'default', sex: '男' };
    val.name && (user.name = val.name);
    console.log(user);
    return user;
}
var params2 = { name: 'ypf', age: 20 };
var p1 = { x: 10, y: 20 };
var func;
func = function (src, sub) {
    var result = src.search(sub);
    console.log(result);
    return result === -1;
};
var myArray = ["Bob", "Tom"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        console.log(">>>>>\u5F53\u524D\u65F6\u95F4\uFF1A" + h + "\u70B9" + m + "\u5206<<<<<");
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
        console.log('传入进去的时间是: ', this.currentTime);
    };
    return Clock;
}());
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) {
        console.log('counter -->', start);
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log('reset');
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 456;
console.log(c.interval);
/**
 * 接口继承类
 */
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// 错误：“Image2”类型缺少“state”属性
// class Image2 implements SelectableControl {
//   select() {}
// }
