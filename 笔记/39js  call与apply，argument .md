### 39js  call与apply，argument

---

==call（）和apply（）：==这两个方法，需要通过函数对象来调用，当对函数调用call（）和apply（）都会调用函数

​	执行

```js
function fun(){
  console.log("hello");
}
fun.call();//hello
fun.apply();//hello
```

在调用call（）和apply（）可将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this,可以修改

this对象，想让this是谁就指定谁

```js
function fun(){
	console.log(this);
}
var obj ={}
fun.call(obj);//object
fun.apply(obj);//object
fun();//window
```

call（）方法可以将实参在对象之后传递，apply（）方法需要将实参封装到一个数组中统一传递

```js
function fun(a,b){
	console.log(a);
	console.log(b);
}
var obj ={ };
fun.call(obj,2,3);//2,3
fun.apply(obj,[4,5]);//4,5 需要封装到数组
```

**this 情况：**

	1. 以函数形式调用时，this 是window
 	2. 以方法形式调用时，this 是调用方法的对象
 	3. 以构造函数调用四，this 是新创建的那个对象
 	4. 以call（）和 apply（）调用时，this是指定的那个对象

==arguments：==在调用函数时，浏览器每次都会传递进两个隐含的参数

 1. 函数的上下文对象 this

 2. 封装实参的对象 arguments

	arguments 是一个类数组对象，也可以通过索引来操控数据，也可以获取长度，在调用函数时，我们所传递

	的实参都会在arguments中保存，`arguments.length`可以用来获取实参的长度，即使不定义形参，也可以通过
	
	arguments来使用实参，但比较麻烦，`arguments[0]表示第一个实参，arguments[1]表示第二个实参，`他里面有
	
	一个属性叫`callee`这个属性对应一个函数对象，就是当前正在指向的函数的对象

```js
function fun(a,b){
	console.log(arguments instanceof Array);//false
	console.log(Array.isArray(arguments));//false
	console.log(arguments.length);//0
	console.log(arguments[0]);//hello  第一个实参
	console.log(arguments.callee);//函数
}
fun("hello",true);
```

