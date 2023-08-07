### 8jsNumber

---

* 在js中所有的数值都是Number类型

	包括整数和浮点数（小数）

	==数字123：==var a = 123；

	==字符串123：==var b = "123";

	但是如果使用console.log()输出a和b，控制台都输出“123”、“123”，因此可以检查变量的类型。

* js中可以使用一个运算符==typeof==来检查一个变量的类型

	语法：**typeof   变量**，eg:

	```
	var c = 1;
	console.log("typeof c");
	```

	此时控制台输出的内容为number，检查字符串时会返回String，检查数值时会返回Number。

* 在js中可以表示数字的最大值==Number.MAX_VALUE==——>1.7976931348623157e+308

	也可以表示数字的最小值==Number.MIN_VALUE==——>5e-324

	如果用Number表示得值超过了最大值（如**Number.MAX_VALUE * Number.MAX_VALUE**），则会返回一个

	==Infinity==表示正无穷，==-Infinity==表示负无穷，使用typeof检查Infinity也会返回number。

	用Number表示**大于0**的最小值（如**Number.MIX_VALUE * Number.MIX_VALUE**），则会返回一个**NaN**

	==NaN==是一个特殊的数字，表示**Not A Number**，使用typeof检查类型也会返回number。

* 在js中==整数的运算==基本可以保证精确

	```
	var c = 123 + 456;
	console.log(c);
	```

	控制台会输出计算结果579

* 如果使用js进行==浮点数的运算==，可能得到一个不精确的结果，所以千万不要1使用js进行对精度要求高

	的运算（比如钱）

	```
	var d = 0.1 + 0.2
	console.log(d);
	```

	控制台输出的结果是0.30000000000000004



