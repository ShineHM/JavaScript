### 22js条件判断语句（if）

---

**流程控制语句：**

​	js中的程序是从上到下一行一行执行的，通过流程控制语句可以控制程序执行顺序

​	使程序可以根据一定的条件来选择执行

**语句的分类：**

​	1. 条件判断语句

​	2. 条件分支语句

 3. 循环语句

	

+ 条件判断语句：

​	使用条件判断语句可以在执行某个语句之前进行判断，若条件成立才执行，不成立不执行

​	==if语句：==

​	`语法一：`

​		`if（条件表达式）`

​				`语句`

​	*if语句在执行时，会先对条件表达式进行求值判断，如果条件表达式的值为true，则执行if后的语句*

​	*如果条件表达式的值为false，则不会执行if后的语句, if  语句只能控制紧随其后的那个语句，如果*

   *希望它控制多个语句，可以将这些语句统一放在代码块中。if语句后的代码块不是必须的，但在开*

​    发中尽量写上，即使只有一条语句。*

​	`语法二：`

​		`if（条件表达式）{`

​			`语句...`

​		`}else{`

​			`语句...`

​		`}`

*if...else...语句，当语句执行时，会先对if后的条件表达式进行判断，为true会执行if后的语句，为false*

​	*会执行else后的语句*

​	`语法三:`

​		`if(条件表达式){`

​			`语句...`

​		`}else if(条件表达式){`

​			`语句...`

​		`}else if(条件表达式){`

​			`语句...`

​		`}else{`

​			`语句...`

​		`}`

*if...else if...else,当该语句执行时，会从上到下依次对条件表达式进行求值判断，如果为true，则执行*

​	*当前语句如果为false则继续向下判断，入过所有语句都不满足则执行最后else后的语句，该语句中*

​	*只有一个代码块执行，一旦执行了，则直接结束语句。*

==if语句练习:==

- [ ] 1. <img src="C:\Users\Lenovo\Pictures\Saved Pictures\if练习1.jpg" alt="if练习1" style="zoom:50%;" />

		 **prompt()***可以弹出一个提示框，该提示框会带有一个文本框，用户可以在文本输入一些内容,*

		*该函数需要一个字符串作为参数,该字符串会做为提示框的提示文字,用户输入的内容会作为函数*

		*的返回值返回,可以定义一个变量来接收该内容* 

```html
<script type="text/javascript">
  		//第一题优化代码
			var score = prompt("请输入你的成绩：")
			//判断是否输入正确的成绩分数
			if(score > 100 || score == 0 || isNaN(score)){
				console.log("请输入正确成绩！");
			}else{
				if(score == 100){
					console.log("奖励一辆BMW");
				}else if(score >= 80){
					console.log("奖励一台iphone15s");
				}else if(score >= 60){
					console.log("奖励一本参考书");
				}else{
					console.log("没有奖励"); 
				}
			}
</script>
```



- [x] 1. <img src="C:\Users\Lenovo\Pictures\Saved Pictures\if练习2.jpg" alt="if练习2" style="zoom:40%;" />

```html
<script type="text/javascript">
     //第二题代码优化
			var tall = prompt("请输入身高（cm）：");
			var money = prompt("请输入存款（万）：");
			var face = prompt("请输入颜值（px）：");
			if(tall >= 180 && money >= 1000 && face >= 500){
				console.log("我一定要嫁给他");
			}else if(tall >= 180 || money >= 1000 || face >= 500){
				console.log("嫁吧，比上不足，比下有余");
			}else{
				console.log("不嫁"); 
			}
</script>
```



- [ ] 3. <img src="C:\Users\Lenovo\Pictures\Saved Pictures\if练习3.jpg" alt="if练习3" style="zoom:50%;" />

```html
<script type="text/javascript">
     //第三题代码优化
     //prompt()函数的返回值类型是string，应转换为number
			var num1 = +prompt("请输入第一个数字：");
			var num2 = +prompt("请输入第二个数字：");
			var num3 = +prompt("请输入第三个数字：");
			//num1为最大值时
			if (num1 > num2 && num1 > num3){
				if (num2 > num3){
					console.log(num3,num2,num1);
				}else{
					console.log(num2,num3,num1);
				}
			}else if (num2 > num1 && num2 > num3){
				if (num1 > num3){
					console.log(num3,num1,num2);
				}else{
					console.log(num1,num3,num2);
				}
			}else if(num3 > num1 && num3 > num2){
				if (num1 > num2){
					console.log(num2,num1,num3); 
				}else{
					console.log(num1,num2,num3);
				}
			}
</script>
```

