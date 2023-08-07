### 53JSON

---

==JSON：==`JavaScript	Object	Notation`在js中的对象只有js认识，其他语言都不认识，JSON就是特殊格式的字符

​	串，这个字符串可以被任意的语言识别，并且可以转换为任意语言中的对象，JSON在开发中主要用于不同语言

​	的数据的交互

JSON和JS语法一致，只不过JSON字符串中的**属性名必须加双引号，**其他和JS一致

**JSON分类：**1. 对象 { }	2. 数组 [ ]

**JSON允许的值：**字符串	数值	布尔值	null	对象	数组	（6个）

**将JSON字符串转换为JS中的对象：**在JS中为我们提供了一个工具类，就叫JSON，这个对象可以帮助我们将一

​	个JSON转换为JS对象，也可以将一个JS对象转换为JSON

**JSON.parse( )：**`可以将JSON字符串转换为JS对象，`他需要一个JSON字符串作为参数，会将该字符串转换为JS对象

**JSON.stringify( )：**`可以将JS对象转换为JSON字符串，`需要一个JS对象作为参数，会返回一个JSON字符串

**注意：**JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错

**eval（）：**这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回，如果使用eval（）执行的字符串

​	中含有 { } ，他会将 { } 当成是代码块，如果不希望将其当成代码块解析则需要在字符串前后各加一个（），这个

​	函数的功能很强大，可以直接执行一个字符串中的JS代码，但是在开发中尽量不要使用，首先它的执行性能比较

​	差，然后他还具有安全隐患

==如果要兼容IE7及以下浏览器可以引入一个外部的js文件==

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<!--
			如果需要兼容IE7及以下的JSON操作，则可以通过引入一个外部的js文件来处理
		-->
		<script src="js/json.js" type="text/javascript"></script>
		<script type="text/javascript">
			
			/*
			 * JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错
			 * eval()其他浏览器也兼容
			 * 	- 这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
			 * 	- 如果使用eval()执行的字符串中含有{},它会将{}当成是代码块
			 * 		如果不希望将其当成代码块解析，则需要在字符串前后各加一个()
			 * 
			 * 	- eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码，
			 * 		但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患
			 */
				var str = 'alert("hello")';
				//eval(str);//hello  因为他会将字符串中的代码执行
				var json = '{"name":"苗苗","age":20,"gender":"女"}';
				console.log(eval("("+json+")"));//{name: "苗苗", age: 20, gender: "女"}
			
			
			/*
			 * JSON
			 * 	- JS中的对象只有JS自己认识，其他的语言都不认识
			 * 	- JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别，
			 * 		并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互
			 * 	- JSON
			 * 		- JavaScript Object Notation JS对象表示法
			 * 		- JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号
			 * 			其他的和JS语法一致
			 * 		JSON分类：
			 * 			1.对象 {}
			 * 			2.数组 []
			 * 
			 * 		JSON中允许的值：
			 * 			1.字符串
			 * 			2.数值
			 * 			3.布尔值
			 * 			4.null
			 * 			5.对象,不能是函数对象
			 * 			6.数组
			 */
			
			/* var obj = {"name":"苗苗","age":20,"gender":"女"};
			console.log(obj); */
			
			var json = '{"name":"苗苗","age":20,"gender":"女"}';
			var arr = '[1,2,3,"hello",true]';
			var obj2 = '{"arr":[1,2,3]}';
			var arr2 = '[{"name":"苗苗","age":20,"gender":"女"}]';
			console.log(typeof obj);//string
			/*
			 * 将JSON字符串转换为JS中的对象
			 * 	在JS中，为我们提供了一个工具类，就叫JSON
			 * 	这个对象可以帮助我们将一个JSON转换为JS对象，也可以将一个JS对象转换为JSON
			 */
			console.log(JSON);
			/*
			 * json --> js对象
			 * 	 JSON.parse()
			 * 		- 可以将以JSON字符串转换为js对象
			 * 		- 它需要一个JSON字符串作为参数，会将该字符串转换为JS对象并返回
			 */
			console.log(JSON.parse(json).name);//苗苗
			console.log(JSON.parse(arr));//[1, 2, 3, "hello", true]
			
			/*
			 * JS对象 ---> JSON
			 * 	JSON.stringify()
			 * 		- 可以将一个JS对象转换为JSON字符串
			 * 		- 需要一个js对象作为参数，会返回一个JSON字符串
			 */
			var obj = {name:"苗苗",age:20,gender:"女"};
			console.log(JSON.stringify(obj));//{"name":"苗苗","age":20,"gender":"女"}
			console.log(typeof JSON.stringify(obj));//string
			
		</script>
	</head>
	<body>
	</body>
</html>
```



 