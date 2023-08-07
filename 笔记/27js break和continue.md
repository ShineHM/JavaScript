### 27js break和continue

---

break关键字可以用来退出switch或循环语句，不能在==if语句中使用break和continue==

break关键字会立即终止离他最近的循环语句

```html
<script type="text/javascript">
			for(var i = 0;i < 5;i++){
				console.log("外层循环"+1);
				for(var j = 0;j < 5;j++){
					break;//终止内层循环
					console.log("内层循环"+j);
				}
			}
		</script>
```

continue关键字可以用来==跳过当次循环==，默认只会对离他最近的循环起作用

```js
for(var i = 0;i < 5;i++){
	console.log("外层循环"+i);
	for(var j = 0;j < 5;j++){
		continue;//跳过当次循环
		console.log("内层循环"+j);
	}
}
```

终止外层循环：可以为循环创建一个label，标识当前循环----==label:循环语句==

 使用break或continue时，在break或continue后跟着一个label，这样break或continue会终止指定或跳过

 当次的循环，而不是最近的

```js
outer:
			for(var i = 0;i < 5;i++){
				console.log("外层循环"+i);
				for(var j = 0;j < 5;j++){
					break outer;//或者continue outer
					console.log("内层循环"+j);
				}
			}
```

==质数练习优化：==

```js
//开启一个计时器：console.time("计时器名字")，他需要一个字符串做参数，来做计时器的标识
console.time("test");
for(var j = 1;j < 100;j++){
	var flag = true;
	for(var j = 2;j < Math.sqrt(i);j++){
		if(i%j == 0){
		flag = false;
		break;//结束内层循环,可以提高运行时间，可以在计时器中看写break和不写的时间区别 
		}
	}
	if(flag){
		console.log(i);
	}
}
var result = Math.sqrt(97);//开方
console.timeEnd("test");//关闭计时器
```

