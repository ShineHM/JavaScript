### 34js全局(scope)和函数作用域

---

作用域：指一个变量作用的范围

在js中一共有两个作用域：

 1. **全局作用域**

	`直接编写在script标签中的js代码，`都在全局作用域

	全局作用域在页面打开时创建，在页面关闭时销毁

	在全局作用域中有一个`全局变量window`，我们可以直接使用

	​	他代表的是一个浏览器的窗口，他有浏览器创建我们直接使用

	在全局作用域中：

	​	==创建的变量都会作为window对象的属性保存==

	​			`console.log(window);//输出对象`

	```js
	var a = 10;
	var b = "hello"
	console.log(window.a);//10
	console.log(window.b);//hello		
	```

	​	==创建的函数都会作为window对象的方法保存==

	​			`window.alert("hello");//弹出hello窗口`

	```js
	function fun(){
		console.log("我是fun函数");
	}
	window.fun();//我是fun函数
	```

	全局作用域的变量都是全局变量，在页面的任何部分都可以访问到

	​	变量的提前声明：

	​		*使用var关键字声明的变量。会在所有的代码执行之前被声明（但不会赋值），但如果声明变量时不使用*

	​		*var关键字，则变量不会被提前声明*

	```js
	console.log(a);//这时控制台会报错，说a没有被定义
	a = 123;
	```

	```js
	console.log(a);//这时控制台不会报错，但会返回undefined，因写了var关键字，变量a被提前定义了，但是没有赋值
	var a = 123;
	```

	​	函数的提前声明：

	​		*使用函数声明形式创建的函数*`function	函数（）{	}`*会在所有的代码执行之前被创建，所以我们*

	​		*可以在函数声明前来调用函数，但使用函数表达式创建的函数不会被提前声明，所以不要在声明前调用*

	```js
	fun1();//输出hello1
	fun2();//报错说fun2不是一个函数
	function fun1(){	//在所有代码执行前被创建，所以fun1（）可以在声明前被调用
		console.log("hello1");
	}
	var fun2 = function(){	//不会提前创建
		console.log("hello2");
	}
	```

	2. **函数作用域**

	*调用函数时创建函数作用域，函数执行完后，函数作用域销毁，每调用一次函数就会创建一个新的函数作用域，他们之间是互相独立的  ，*`在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量，`*当函数作用域操作一个对象时，他会在自身作用域中寻找，如果有就直接使用，如果没有则向上一级作用域中寻找，直到找到全局作用域，如果全局作用域中也没有，就会报错 ReferenceError，*==在函数中访问全局变量可以使用window对象==

	```js
	var a = 10;
	function fun(){
		var b = 20;
		console.log(a);
	}
	fun();
	console.log(b);//报错，不能访问局部变量
	```

	```js
	var a = 10;
	function fun(){
		var a = "我是函数作用域a"
		var b = 20;
		console.log(a);
	}
	fun();//输出"我是函数作用域a"，先在自身作用域寻找
	```

	```js
	var a = 10;
	function fun(){
		var a = "我是函数作用域a"
		var b = 20;
		function fun2(){
			console.log(a);
		}
		fun2();//fun2中没有a会去上一级寻找
	}
	fun();//输出"我是函数作用域a"，如果想输出全局的a变量fun2中改为	console.log(window.a);
	```

	在函数作用域中也有声明提前的特性：使用var关键字声明的变量，会在函数中所有的代码执行之前被声明

	```js
	function fun3(){
		console.log(a);//var 提前声明了变量但没被赋值
		var a = 30;
	}
	fun3();//undefined
	```

	在函数中不适用 var 关键字声明的变量都会成为全局变量

	```js
	var a = 50;
	function fun4(){
		console.log(a)
		a = 60;
	}
	fun4();//50  因局部没有声明变量a，在全局找
	console.log(a);//60  因他会往上找，a = 60；没有用var声明，会成为全局变量
	```

	定义形参相当于在函数作用域中声明了变量

	```js
	function fun4(a){
		console.log(a);
	}
	fun4(90);//输出90
	```

	

