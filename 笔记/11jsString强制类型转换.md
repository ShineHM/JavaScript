### 11jsString强制类型转换

---

强制类型转换：将一个数据类型强制转换为其他的数据类型

类型转换主要指将其他的类型转换为：==String、Number、Boolean==

将其他类型转换为String：

**隐式：**

​	 任何的数值和字符串做加法运算，都会先转化为字符串然后再和字符串拼串

​	==任意数据类型+一个""==即可转换，这是一种隐式的类型转换*（参考15js运算符）*

**显式：**

+ 调用被转换数据类型的==toString（）==方法     eg：调用a的toString（）方法：a = a.toString();

	此方法不会影响到原变量，他会将转换的结果返回

	==注意：==null和undefined这两个值没有toString（）方法，如果调用则会报错

	```js
	var a = 123;
	a = a.toString();
	console.log(a);
	```

	控制台会输出123，使用typeof检查类型控制台会返回String类型

+ 调用==String（）==函数，并将被转换的数据作为参数传递给函数

	使用String（）函数做强制类型1转换时，对于Number和Boolean实际上就是调用的toString（）方法

	但对于null和undefined，就不会调用toString（）方法

	他会将null直接转换为“null”

	将undefined直接转换为“undefined”

	```
	var b = 456;
	b = String(a);
	console.log(a);
	```

	控制台会输出456，使用typeof检查控制台会返回String类型
	
