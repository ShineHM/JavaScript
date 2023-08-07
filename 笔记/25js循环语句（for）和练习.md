### 25js循环语句（for）和练习

---

for语句也是一个循环语句，也称为for循环，在for中为我们提供了专门的位置来放三个表达式：

1. `初始化表达式`
2. `条件表达式`
3. `更新表达式`

==for循环的语法：==

​	`for（1. 初始化表达式；2. 条件表达式；3. 更新表达式）{`

​		`语句...`

​	`}`

==for循环的执行流程：==

1. 执行初始化表达式，初始化变量

2. 执行条件表达式，判断是否执行循环

	如果为true，则执行循环

	如果为false，则终止循环

3. 执行更新表达式，更新表达式执行完毕继续执行 2

```js
//创建一个执行10次的while循环
var i = 10;
for(i = 0;i < 10;i++){
  console.log(i);
}
```

for循环中的三个部分都可以省略，也可以写在外部

```js
var i = 10;
for(;i < 10;){
  console.log(i);
}
```

==死循环：==

​	如果在for循环中不写任何表达式，只写两个`；；`此时循环是一个死循环，会一直执行下去慎用

```js
var i = 10;
for(;;){
  console.log(i);
}
```

==练习：==

- [x] 1. `打印1-100之间所有奇数之和`

	```html
	<script type="text/javascript">
	  //第一题我的代码
				for(var i = 1,count = 0;i <= 100;i++){
					if(i % 2 != 0){
						count += i;
					}
				}
				console.log(count);
	</script>
	```

- [x] 2. `打印1-100之间所有7的倍数的个数及总和`

	```html
	<script type="text/javascript">
	  //第二题我的代码
	  for(var i = 1,count = 0,num = 0;i <= 100;i++){
					if(i % 7 == 0){
						count++;
						num += i;
					}
				}
				console.log("7的倍数个数为"+count+"总和"+num);
	</script>
	```

- [x] 3. `水仙花数--指一个3位数，他的每个位上的数字的 3 次幂之和等于他本身`

		`eg:1^3 + 5^3 + 3^3 = 153 ,请打印所有的水仙花数`

	```html
	<script type="text/javascript">
	  //第三题我的代码
				for(var i = 100;i < 1000;i++){
					var b = parseInt(i/100);//这里i除100是一个小数，eg：153/100=1.53，parseInt（）函数取小数点前整数
					var s = parseInt((i%100)/10);
					var g = i % 10;
					if(i == b*b*b + s*s*s + g*g*g){
						console.log(i);
					}
				}
	</script>
	```

	

- [ ] 4. `在界面接收一个用户输入的数字，判断该数是否是质数`

		`质数：只能被 1 和他自身整除的数，1 不是质数也不是合数，质数必须是大于 1 的自然数`

	```html
	<script type="text/javascript">
	  //第四题我的代码
				var flag = true;
				var num = prompt("请输入一个整数：");
				if(isNaN(num) || num <= 1){
					num = prompt("该数不合法，请重输：");
				}else{
					for(var i = 2;i < num;i++){
						if(num % i == 0){
							flag = false;
						} 
					}
					if(flag){
						console.log("是质数");
					}else{
						console.log("不是质数");
					}
				}
	</script>
	```

	