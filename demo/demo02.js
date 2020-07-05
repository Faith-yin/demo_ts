/*
 * @Date: 2020-05-19 15:17:44
 * @information:
 */
// 001：函数类型
function add(x, y) {
    console.log(x + y);
    return x + y;
}
// add(2, 3)
// 002: 可选参数(可选参数必须跟在必须参数后面) 、 默认参数 、 剩余参数
function buildName(firstName, lastName, age) {
    if (age === void 0) { age = 20; }
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    console.log(firstName + "-" + (lastName ? lastName : 'default') + " - " + rest.join(" "));
    return firstName + "-" + (lastName ? lastName : 'default') + " - " + age + " - " + rest.join(" ");
}
buildName('Bob', '', 18, '男', '1996-09');
