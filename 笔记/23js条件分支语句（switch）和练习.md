### 23js条件分支语句（switch）

---

条件分支语句也叫switch语句

==语法：==

​	`switch（条件表达式）{`

​		`case  表达式：`

​			`语句...`

​			`break；`

​		`case  表达式：`

​			`语句...`

​			`break；`

​		`default：`

​			`语句...`

​			`break；`

​	`}`

==执行流程：==

switch...case...语句在执行时会依次将case后的表达式的值和switch后的条件表达式进行全等比较，

​	如果结果为true，则从当前case处开始执行代码，当前case后的所有代码都会执行，可以在case

​	后加一个break关键字，确保只执当前case后的语句，不会执行其他的case。

​	如果结果为false，则继续向下比较，如果所有的结果都为false，则执行default后的语句。

switch语句和if语句功能有重复的，使用switch可以实现if的功能，if也能实现switch的功能（if使用较多）

==switch练习：==

- [ ] 1. `对于成绩大于60分的，输出合格，低于60分的，输出不合格（两种方法）`

	```html
	<script type="text/javascript">
				//第一题代码优化(1)
				var score = prompt("请输入成绩：");
				switch(true){
					case (score >= 60 && score <= 100):
						console.log("合格");
						break;
					default:
						console.log("不合格");
						break;
				}
				//第一题代码优化(2)
				var score = prompt("请输入成绩：");
				switch(parseInt(score/10)){ //parseInt()函数取出整数
					case 10:
					case 9:
					case 8:
					case 7:
					case 6:
						console.log("合格");
						break;
					default:
						console.log("不合格");
						break;
				}
	</script>
	```

	

- [x] 2. `从键盘接收整数参数，如果该数为1-7，打印对应的星期，否则打印非法参数`

	```html
	<script type="text/javascript">
				//第二题我的代码（第一次我的错误原因：因为prompt（）函数返回类型是string，应该将它转换为number）
				var day = +prompt("请入数字1-7：");//改正后
				//从键盘接收整数参数，如果该数为1-7，打印对应的星期，否则打印非法参数
				switch (day){
					case 1:
						console.log("星期一");
						break;
					case 2:
						console.log("星期二");
						break;
					case 3:
						console.log("星期三");
						break;
					case 4:
						console.log("星期四");
						break;
					case 5:
						console.log("星期五");
						break;
					case 6:
						console.log("星期六");
						break;
					case 7:
						console.log("星期七");
						break;
					default:
						console.log("非法数字")
						break; 
				}
	</script>
	```

	



