### 24js循环语句（while）

---

循环语句：通过循环语句可以反复的执行一段代码多次

==while循环：==

​	语法：

​		`while（条件表达式）{`

​			`语句...`

​		`}`

​	执行流程：

​	***while语句在执行时，先对条件表达式进行判断，***  *如果为true，则执行循环体，循环体执行完毕后，*

​	*继续对表达式进行判断，如果为true，则继续执行循环体，以此类推，如果为false，则终止。*

==死循环：==

​	像这种条件表达式写死为true的循环叫死循环，他不会停止除非关闭浏览器，在开发中慎用，可用break终止

```js
var n = 1;
while(true){
	console.log(n++);
}
```

==do...while循环==

​	语法：

​		`do{`

​			`语句...`

​		`}while（条件表达式）`

​	执行流程：

​	***do...while语句在执行时，会先执行循环体***  *循环执行完毕后，在对while后的条件进行判断*

​	*如果为true则继续执行循环体，执行完继续判断以此类推，如果为false，则终止循环。*

实际上这两个语句功能相似，==不同的是while是先判断后执行，do...while先执行后判断==

do...while可以保证循环体至少执行一次，而while不能

**创建一个循环，往往需要三个步骤：**

1. 创初始化一个变量：`var i = 0;`
2. 在循环中设置一个条件表达式：`while(i < 10){console.log(i);`
3. 定义一个更新表达式，每次更新初始化变量：`i++;}`

==练习：==

- [x] 1. `假如投资的年利润为5%，试求从1000块增长到5000块，需要花费多少年`

	```js
	var money = 1000;
	var count = 0;//记录年数
	while(money < 5000){
	  money *= 1.05;//1.05表示本金加上利润
	  count++；
	}
	console.log("需要"+count+"年");//循环结束在输出，写在循环外面
	```

- [x] 2.  

	```js
	//第二题if练习一优化
				while(true){
				var score = prompt("请输入成绩：");
					if(score >= 0 && score <= 100){
						break;
					}else{
						score = prompt("请输入正确成绩：");
						break;
					}
					
				}
					if(score == 100){
						console.log("奖励一辆BMW");
					}else if(score >= 80){
						console.log("奖励一台iphone15s");
					}else if(score >= 60){
						console.log("奖励一本参考书");
					}else{
						console.log("没有奖励"); 
					}
	```
	
	



