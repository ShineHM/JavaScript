### 46js事件（event）对象(鼠标)

---

**事件对象：**当事件的响应函数被触发时，浏览器每次都会将一个事件作为实参传递进响应函数，

​	在事件对象中封装了当前事件相关的一切信息，比如：鼠标的坐标、键盘哪个被按下、鼠标滚轮滚动的方向...

- ==clientX和clientY：==可以获取鼠标指针的水平或垂直坐标

- ==pageX和pageY：==可以获取鼠标相对于当前页面的坐标，但IE8中不支持，需要兼容时不要使用

	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<style type="text/css">
				#areaDiv{
					width: 300px;
					height: 100px;
					border: 1px black solid;
				}
				#showMsg{
					width: 300px;
					height: 20px;
					margin-top: 10px;
					border: 1px black solid;
				}
			</style>
			<script type="text/javascript">
				window.onload = function(){
					/* 当鼠标在areaDiv中移动时，在showMsg中显示鼠标的坐标 */
					var areaDiv = document.getElementById("areaDiv");
					var showMsg = document.getElementById("showMsg");
					//onmousemove此事件会在鼠标在元素中移动时触发
					areaDiv.onmousemove = function(){
						/* 在IE8中，响应函数被触发时，浏览器不会传递事件对象
							在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的（但火狐中没放在window）*/
						/* if(!event){
							event = window.event;
						} */
						//解决事件的兼容性问题
						event = event || window.event;
						var x = event.clientX;
						var y = event.clientY;
						//alert("x="+x+",y="+y);
						showMsg.innerHTML = "x="+x+",y="+y;
					}
				}
			</script>
		</head>
		<body>
			<div id="areaDiv"></div>
			<div id="showMsg"></div>
		</body>
	</html>
	```

- [x] Div跟随鼠标移动练习

	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<style type="text/css">
				#box1{
					width: 100px;
					height: 100px;
					background-color: red;
					/* 开启决定定位 */
					position: absolute;
				}
			</style>
			<script type="text/javascript">
				window.onload = function(){
					var box1 = document.getElementById("box1");
					document.onmousemove = function(event){
						event = event || window.event;
						//获取滚动条的滚动的距离
						var st = document.documentElement.scrollTop;
						var sl = document.documentElement.scrollLeft;
						 /* clientX和clientY用于获取鼠标在当前的可见窗口的坐标，但div的偏移量是相当于整个页面的
								pageX和pageY可以获取鼠标相对于当前页面的坐标，但IE8中不支持，需要兼容时不要使用*/
						var left = event.clientX;
						var top = event.clientY;
						box1.style.left = left + sl + "px";
						box1.style.top = top + st + "px";
					}
				}
			</script>
		</head>
		<body style="height: 1000px; width: 2000px;">
			<div id="box1"></div>
		</body>
	</html>
	```

- [x] 鼠标拖拽练习

	onmousedown

	onmousemove

	onmouseup

	setCapture（）为元素绑定捕获，只有IE支持，但在火狐中调用会报错，谷歌中不会

	releaseCapture(    )为元素取消捕获

	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<style type="text/css">
				#box1{
					width: 100px;
					height: 100px;
					background-color: red;
					position: absolute;
				}
				#box2{
					width: 100px;
					height: 100px;
					background-color: yellow;
					position: absolute;
					left: 200px;
					top: 200px;
				}
			</style>
			<script type="text/javascript">
				window.onload = function(){
					/* 拖拽box1元素
							流程：
								1.当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
								2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
								3.当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
					 */
					
					var box1 = document.getElementById("box1");
					var box2 = document.getElementById("box2");
					drag(box1);
					drag(box2);
					
					
					/* box1.onmousedown = function(event){
						//设置box1捕获所有鼠标按下的事件
						 //setCapture（）为box1绑定后不管点击什么都会相当于点击box1只有IE支持，但在火狐中调用会报错，谷歌中不会
						 //if(box1.setCapture){
							//box1.setCapture();
						//} 
						box1.setCapture && box1.setCapture();
						event = event || window.event;
						 //div的偏移量：鼠标.clentX - 元素.offsetLeft
							//div的偏移量：鼠标.clentY - 元素.offsetTop
						var ol = event.clientX - box1.offsetLeft;
						var ot = event.clientY - box1.offsetTop;
						document.onmousemove = function(event){
							event = event||window.event;
							//鼠标坐标减去偏移量
							var left = event.clientX - ol;
							var top = event.clientY - ot;
							box1.style.left = left + "px";
							box1.style.top = top + "px";
						}
					}
					document.onmouseup = function(){
						document.onmousemove = null;
						document.onmouseup = null;
						//取消捕获
						box1.releaseCapture && box1.releaseCapture();
					}
					
					当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，此时
					 会导致拖拽功能异常，这个是浏览器提供的默认行为，如果不希望发生这个行为
					 则可以通过return false来取消默认行为，但他对IE8不起作用
					 return false;
				} */ 
				
				//提取专门用来拖拽的函数
				function drag(obj){
					obj.onmousedown = function(event){
							obj.setCapture && obj.setCapture();
							event = event || window.event;
							var ol = event.clientX - obj.offsetLeft;
							var ot = event.clientY - obj.offsetTop;
							document.onmousemove = function(event){
								event = event||window.event;
								//鼠标坐标减去偏移量
								var left = event.clientX - ol;
								var top = event.clientY - ot;
								obj.style.left = left + "px";
								obj.style.top = top + "px";
							}
						}
						document.onmouseup = function(){
							document.onmousemove = null;
							document.onmouseup = null;
							//取消捕获
							obj.releaseCapture && obj.releaseCapture();
						}
						 return false;
					}
				}
			</script>
		</head>
		<body>
			我是一段文字
			<div id="box1"></div>
			<div id="box2"></div>
		</body>
	</html>
	```

- [x] 鼠标滚轮事件练习

	==event.wheelDelta==可以获取鼠标滚轮滚动的方向正值向上，负值向下，但火狐不支持，在火狐中使用

	==event.detail==或获取滚动方向，负值向上，正值向下

	==onmousewheel==鼠标滚轮事件，会在滚轮时触发，但火狐不支持，火狐中使用==DOMMouseScroll==来绑定滚轮

	事件，但该事件需要通过==addEventListener( )==函数来绑定

	浏览器的默认行为，如果不希望发生可使用==return false;==取消，使用==addEventListener（）==方法绑定的响应

	函数，取消默认行为不能用return false; 要用==event.preventDefault();==取消，但是IE8不支持，如果调用会报错

	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<style type="text/css">
				#box1{
					width: 100px;
					height: 100px;
					background-color: red;
					position: absolute;
				}
			</style>
			<script type="text/javascript">
				window.onload = function(){
					/* 当滚轮向下滚动时，box1变长，当滚轮向上滚动时，box1变短 */
					var box1 = document.getElementById("box1");
					//onmousewheel鼠标滚轮事件，会在滚轮时触发，但火狐不支持
					//火狐中使用DOMMouseScroll来绑定滚轮事件，但该事件需要通过addEventListener()函数来绑定
					/* box1.onmousewheel = function(){
						alert(1);
					}
					bind(box1,"DOMMouseScroll",function(){
						alert(1);
					}) */
					
					/* function fun(){
						alert(1);
					}
					box1.onmousewheel = fun;
					bind(box1,"DOMMouseScroll",fun); */
					
					box1.onmousewheel = function(event){
						event = event || window.event;
						//event.wheelDelta可以获取鼠标滚轮滚动的方向，但火狐不支持
						//向上180，向下-180，我们不看大小，只看正负
						//alert(event.wheelDelta);
						
						//在火狐中使用event.detail或获取滚动方向，向上-3，向下3
						//alert(event.detail);
						
						//判断滚轮方向
						if(event.wheelDelta > 0 || event.detail < 0){
							//当滚轮向上滚动时，box1变短
							box1.style.height = box1.clientHeight - 10 + "px";
						}else{
							//当滚轮向下滚动时，box1变长
							box1.style.height = box1.clientHeight + 10 + "px";
						}
						
						/* 使用addEventListener（）方法绑定的响应函数，取消默认行为不能用return false;
						 要用event.preventDefault();取消，但是IE8不支持，如果调用会报错*/
						 event.preventDefault && event.preventDefault();
						
						/* 当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，
						 这是浏览器的默认行为，如果不希望发生可使用return false;取消*/
						 return false;
					}
					ind(box1,"DOMMouseScroll",box1.onmousewheel);
				}
				function bind(obj,eventStr,callback){
					if(obj.addEventListener){
						obj.addEventListener(eventStr,callback,false);
					}else{
						obj.attachEvent("on" + eventStr,callback,function(){
							//解决this问题，在匿名函数中调用回调函数
							callback.call(obj);
						});
					}
				}
			</script>
		</head>
		<body style="height: 2000px;">
			<div id="box1"></div>
		</body>
	</html>
	```

	