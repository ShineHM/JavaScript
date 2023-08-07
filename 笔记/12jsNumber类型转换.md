### 12jsNumber类型转换

---

将其他类型转换为Number：

**隐式：**

+ 利用任何值做==-    *     /==运算时都会自动转换Number这一特性做隐式的类型转换，可以通过一个

​    值==-0==   ==*1==    ==/1==来将其转换为Number原理和Number（）函数一样（*参考15js运算符*）

```js
var x = "1" - 0;
console.log(x);
```

控制台会输出1，使用typeof检查类型会返回number

 + 可以对一个其他数据类型使用==+（正号）==，来将其转换为Number，原理和Number（）一样

	null和false转换为0、true转换为1、undefined转换为NaN、

```js
var y = + "3";
console.log(y);
```

此时控制台输出3，使用typeof检查类型会返回number

**显式：**

+ 方式一：

	使用==Number（）==函数

	+ 字符串——>数字

		**1.**如果是==纯数字==的字符串，则直接转换为**数字**

		```js
		var a = "123";
		a = Number(a);
		console.log(a);
		```

		控制台会输出123，使用typeof检查类型会返回number

		**2.**如果字符串中==有非数字==的内容，则转换为**NaN**

		```js
		var b = "ab12";
		a = Number(a);
		console.log(a);
		```

		控制台会输出NaN，使用typeof检查类型会返回number

		**3.**如果字符串是一个==空串==（""）或是一个==全是空格==（"      "）的字符串，则转换为**0**

		```js
		var c = "";
		c = Number();
		console.log();
		```

		控制台会输出0，使用typeof检查类型会返回number

	+ 布尔——>数字

		==true转换为1，false转换为0==

	+ Null——>数字        ==转换为0==

	+ Undefined——>数字     ==转换为NaN==

+ 方式二

	+ 调用parseInt（）函数转换为Number，

		它可以将一个字符串中有效的==整数内容==取出来，转换为number

		若 ==d = “123ps”==使用此函数转换时会转换为数字123，

		若 ==d = “ps123”==使用此函数转换时会返回NaN

		但使用typeof检查类型时都会返回number

		```js
		var d = "123ps";
		d = parseInt(d);
		console.log(d);
		```

		控制台会输出123

+ 方式三

	+ 调用parseFloat（）

		它的作用和parseInt（）类似，不同的是它可以获取==有效的小数==

		若 ==e = “123.456ps”==会转换为123.456

		若 ==e = “123.456.789ps”==也转换为123.456

		若 ==e = “ps123.456”==会转换为NaN

		```js
		var e= "123.456ps";
		d = parseFloat(e);
		console.log(e);
		```

		控制台输出123.456，使用typeof检查会返回number

		

		

		

		