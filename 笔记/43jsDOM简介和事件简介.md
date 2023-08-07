### 43jsDOM简介和事件简介

---

==**DOM简介：**==全称Document	Object	Model文档对象模型模型，js中通过DOM来对html文档进行操作

​	文档：表示整个html网页文档

​	对象：表示将网页中的每一个部分都转换为一个对象

​	模型：使用模型来表示对象之间的关系，方便我们获取对象

**节点（Node）：**是构成我们网页的最基本的组成结构，网页中的每一个部分都可以称为一个节点

1. 文档节点（document）：整个HTML文档，网页中的所有节点都是他的子节点，通过document对象我们可以

	在整个文档访问内查找节点对象，并可以通过该对象创建各种节点对象

2. 元素节点（element）：（最常用）HTML文档中的HTML标签，浏览器会将所有标签转换为一个元素节点，

	可通过document的方法来获取元素节点：`eg：document.getElementById（）根据属性值获取一个元素节点对象`

3. 属性节点（attr）一般不用：元素的属性，表示的是标签中的一个一个属性，属性节点不是元素节点的子节

	点，而是元素节点一部分，可通过元素节点获取指定的属性节点：`元素节点.getAttributrNode（"属性名"）;`

4. 文本节点：HTML标签中的文本内容

**简单操作：**

```html
<body>
		<button type="button" id="btn">我是一个按钮</button>
		<script type="text/javascript">
			var btn = document.getElementById("btn");
			console.log(btn);
			console.log(btn.innerHTML);
			btn.innerHTML = "I'm Button";
		</script>
	</body>
```

==**事件的简介：**==事件就是文档和浏览器窗口中发生的以些特定的交互瞬间，js和html之间的交互都是通过事件实现

​	的，对于web应用来说，有一些代表性的事件：点击某个元素、将鼠标移动到某个元素上方、按下键盘某个键等

​	我们可以在事件对应的属性中设置一些 js 代码，这样当事件被触发时，这些代码会执行

```html
<body>
		<button type="button" id="btn" onclick="">我是一个按钮</button>
		<script type="text/javascript">
			document.getElementById("btn");
			btn.onclick = function(){	//单击响应函数
				alert("点一下");
			}		
		</script>
</body>
```

`为什么把`==script==`代码写在了`==body==`中？`

​	因为浏览器在加载一个页面时，是按照自上而下的顺序加载的，读到一行运行一行，如果将script标签写到页面

​	的上边，在执行代码时，页面还没有加载，DOM也没有加载，如果想写在 head 标签中可以为==window==添加

==onload事件==

```html
<head>
		<meta charset="utf-8">
		<title></title>
		<script type="text/javascript">
			window.onload = function(){
				document.getElementById("btn");
				btn.onclick = function(){	
					alert("点一下");
				}
			}
		</script>
	</head>
	<body>
		<button type="button" id="btn" onclick="">我是一个按钮</button>	
	</body>
```