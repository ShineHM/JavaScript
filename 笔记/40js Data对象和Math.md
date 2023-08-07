### 40js Date对象和Math

---

==**date对象：**==

​	在js中使用date表示一个时间，若直接使用构造函数创造date对象，则会封装为当前代码执行的时间

 **创建一个date对象：**

```js
var a = new Date();
console.log(a);//会封装为当前代码执行的时间
```

**创建一个指定的时间对象：**需要在构造函数中传递一个表示时间的字符串作为参数

​		日期格式：月份/日/年   时：分：秒

```js
var b = new Date("07/15/2020 14:50:30");
console.log(b);//Wed Jul 15 2020 14:50:30 GMT+0800 (中国标准时间)
```

==date对象的方法：==

​	**getDate（）：**获取当前日期对象是几日

```js
var b = new Date("07/15/2020 14:50:30");
var c = b.getDate();
console.log(c);//15
```

​	**getDay（）：**获取当前日期对象是周几，会返回0-6的值，0表示周日，1表示周一...

```js
var b = new Date("07/15/2020 14:50:30");
var d = b.getDay();
console.log(d);//3表示星期三
```

​	**getMonth（）：**获取当前对象的月份，会返回0-11的值，0表示1月，1表示2月...11表示12月

```js
var b = new Date("07/15/2020 14:50:30");
var e = b.getMonth();
console.log(e);//6  表示七月
```

​	**getFullYear（）：**获取当前日期的年份

```js
var b = new Date("07/15/2020 14:50:30");
var f = b.getFullYear();
console.log(f);//2020
```

​	**getTime（）：**获取当前日期的时间戳，时间戳：指的是从格林威治标准时间的`1970年1月1日0时0分0秒`到当前

​		日期所花费的毫秒数（1秒 = 1000毫秒），计算机底层在保存时间时使用的都是时间戳

```js
var b = new Date("07/15/2020 14:50:30");
var g = b.getTime();
console.log(g);//1594795830000
console.log(g/1000/60/60/24/365/)//  /1000表示秒再/60是分再/60是时再/24是天再/365是年
```

获取当前的时间戳：可以利用时间戳测试代码的性能

```js
var start = Date.now();//获取当前时间
for(var i = 0;i < 100; i++){
	console.log(i);
}
var end = Date.now();
console.log("执行了"+(end - start)+"毫秒");//执行了30毫秒
```

==**Math：**==

​	Math和其他的对象不同，他不是一个函数，他属于一个工具类不用创建对象，它里边封装了数学运算相关的属	性方法

​	**Math.PI：**表示圆周率 `console.log(Math.PI);	//3.141592653589793`

​	**abs（）：**可以用来计算一个数的绝对值`console.log(Math.abs(-2));	//2`

​	**Math.ceil（）：**可以对一个数进行向上取整，小数位只要有值就自动进 1

​		`console.log(Math.ceil(1.1));	//2`

​	**Math.floor（）：**可以对一个数进行向下取整，小数位只要有值就舍去

​		`console.log(Math.floor(1.7));	//1`

​	**Math.round（）:**对一个数四舍五入取整`console.log(Math.round(1.5));	//2	`

​	**Math.random（）：**生成一个0-1之间的随机数`console.log(Math.random());	//0.5025346104325787`

​		生成==0-x==的随机数：`Math.round(Math.random()*x)`

```js
for(var i = 0;i < 10;i++){
	console.log(Math.round(Math.random()*10));
}
```

​		生成==x-y==的随机数：`Math.round(Math.random()*（y-x）+ x)`

```js
for(var i = 0;i < 100;i++){
	console.log(Math.round(Math.random()*5)+1);//生成1-6的随机数
}
```

​	**max（）：**可以获取多个数的最大值

​	**min（）：**可以获取多个数的最小值

```js
var max = Math.max(10,58,2,99);
var min = Math.min(10,58,2,99);
console.log(max);//99
console.log(min);//2
```

​	**Math.pow（x，y）：**返回x的y次幂`console.log(Math.pow(2,3));	//8`

​	**Math.sqrt（）：**对一个数值进行开方运算`console.log(Math.sqrt(9));	//3`