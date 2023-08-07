### 26js嵌套的for循环和练习

---

==练习：== 

通过程序在页面输出如下图形

(1)`* * * * *`                          (2)`*`

​	`* * * *`                                  `* *`

​	`* * *`                                      `* * *`

​	`* *`                                          `* * * *`

​	`*`                                              `* * * * *`

通过一个for循环输出图形

外部for循环执行几次，图形的高度就是多少，他可以用来控制图形的高度

在外部在创建一个循环，用来控制图形的宽度

- [x] (1)(2)

```js
//(1)
for(var i = 0;i < 5;i++){
	for(var j = 0;j < i+1;j++){
		document.write("*&nbsp");
		}
		document.write("<br />");
}
```

```js
//(2)
for(var i = 0;i < 5;i++){
  for(var j = 0;j < 5-i;j++){
    document.write("*&nbsp");
  }
  document.write("<br/>");
}
```

- [x] (3)`打印99乘法表：`

​	`1*1=1`

​	`1*2=2	2*2=4`

​	`1*3=3	2*3=6	3*3=9`

​	`........................9*9=81`

```html
    //第三题我的代码
		<script type="text/javascript">
			for(var i = 1;i <= 9;i++){
				for(j = 1;j <= i;j++){
					document.write("<span>"+j+"*"+i +"="+i*j+"</span>");//span用来让乘法表更好看
				}
				document.write("<br/>");
			}
		</script>
		<style type="text/css">
			span{
				display: inline-block;
				width: 60px;
			}
		</style>
```

- [x] (4)`打印出1-100之间所有的质数`

```js
		 //第四题我的代码
			for(var i = 1;i < 100;i++){
				var flag = true;
				for(var j = 2;j < i;j++){
					if(i%j==0){
						flag = false;
					}
				}
				if(flag){
					console.log(i);
				}
			}
```

