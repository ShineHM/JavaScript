### 35js垃圾回收和  this

---

==**垃圾回收（GC）：**==

 当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象

在js中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，我们不需要也不能进行垃圾回收的操作

我们需要做的只是将我们不再使用的对象设置为null即可`eg：obj = null；`

==**this：**==

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的函数就是==this==

this 指向的是一个对象，这个对象我们称为函数执行的上下文对象，根据函数调用方式的不同，

this会指向不同的对象：

 1. `以函数的形式调用时，this永远都是window`

	```js
	function fun(){
		console.log(this);
	}
	fun();//window
	```

 2. `以方法的形式调用时，this就是调用方法的那个对象`

	```js
	function fun(){
		console.log(this.name);
	}
	var name = "我是全局的name";
	var obj = {
		name:"韩苗",
		age:20,
		sayName:fun
	}
	obj.sayName();//韩苗   因以方法的形式调用，this是调用方法的对象
	fun();//"我是全局的name"    因以函数形式调用，this就是window
	```

 3. `以构造函数的形式调用时，this就是新建的那个对象`

 4. `使用call（）和apply（）调用时，this是指定的那个对象`