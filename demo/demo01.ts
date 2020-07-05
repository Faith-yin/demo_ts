/*
 * @Date: 2020-05-18 11:54:45
 * @information: https://www.tslang.cn/index.html
 */ 

// 001: hello world
interface Hello {
  firstName: string,
  lastName: string,
}

function getHello(val: Hello) {
  console.log(`Hello, ${val.firstName} ${val.lastName} !`)
}

let params1 = {firstName: 'Jane', lastName: 'User'}
// getHello(params1)


// 002: 接口中的可选属性
interface User {
  name: string,
  age?: number,
}

function getUser(val: User): {name: string, sex: string} {
  let user = {name: 'default', sex: '男'}
  val.name && (user.name = val.name)
  console.log(user);
  return user
}

let params2 = {name: 'ypf', age: 20}
// getUser(params2)


// 003: 接口中的只读属性
interface Point {
  readonly x: number,
  readonly y: number,
}

let p1: Point = {x: 10, y: 20}
// p1.x = 5 // Cannot assign to 'x' because it is a read-only property.ts(2540)


// 004：接口中的函数类型
interface Func {
  (source: string, substring: string): boolean
}

let func: Func
func = function(src: string, sub: string): boolean {
  let result = src.search(sub)
  console.log(result);
  return result === -1
}

// func('qwertyuiop', '/ypf/')


// 005: 接口中的可索引的类型
interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ["Bob", "Tom"]
// console.log(myArray[0])


// 006: 类类型
interface   ClockInterface {
  currentTime: Date,
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
    console.log('传入进去的时间是: ',this.currentTime)
  }
  constructor(h: number, m: number) {
    console.log(`>>>>>当前时间：${h}点${m}分<<<<<`)
  }
}

// let clock = new Clock(13, 57)
// clock.setTime(new Date())


// 007: 继承接口
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}
interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0
// console.log(square);


// 008: 接口继承类
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() { }
// }

// class Location {

// }
















