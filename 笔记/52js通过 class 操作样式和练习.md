### 52js通过 class 操作样式和练习

---

**修改元素的 class 属性：**因为通过style属性来修改元素的样式，没修改一个样式，浏览器都需要重新渲染一次界面

​	这样执行的性能就比较差，而且当我们修改多个样式时，也很不方便，我们希望通过一行代码修改多个样式

因此我们可以通过修改元素的 class 属性来间接的修改样式，这样我们只需要修改一次，即可修改多个样式，浏览

器只需要重新渲染页面一次，性能比较好，这种方式使表现和行为进一步的分离了

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			.b1{
				width: 100px;
				height: 100px;
				background-color: red;
			}
			.b2{
				height: 200px;
				background-color: yellow;
			}
		</style>
		<script type="text/javascript">
			window.onload = function(){
				var box1 = document.getElementById("box1");
				var btn01 = document.getElementById("btn01");
				btn01.onclick = function(){
					/*
					 * 通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面
					 * 	这样的执行的性能是比较差的，而且这种形式当我们要修改多个样式时，也不太方便
					 */
					/* box1.style.width = "200px";
					box1.style.backgroundColor = "yellow"; */
					
					/*
					 * 我希望一行代码，可以同时修改多个样式
					 */
					
					//修改box的class属性
					/*
					 * 我们可以通过修改元素的class属性来间接的修改样式
					 * 这样一来，我们只需要修改一次，即可同时修改多个样式，
					 * 	浏览器只需要重新渲染页面一次，性能比较好，
					 * 	并且这种方式，可以使表现和行为进一步的分离
					 */
					
					//addClass(box1,"b2");
					//removeClass(box1,"b2");
					toggleClass(box1,"b2");
					}
				}
					
					
					//定义一个函数，用来向一个元素中添加指定的class属性值
					/*
					 * 参数:
					 * 	obj 要添加class属性的元素
					 *  cn 要添加的class值
					 * 	
					 */
					function addClass(obj , cn){
						if(!hasClass(obj,cn)){
							obj.className += " "+cn;//不指定宽度时，不写加号宽度占100%，字符串中也要写空格，不然会拼串
						} 
					}
					
					/*
					 * 判断一个元素中是否含有指定的class属性值
					 * 	如果有该class，则返回true，没有则返回false
					 * 	
					 */
					function hasClass(obj , cn){
						var reg = new RegExp("\\b" +cn+ "\\b");
						return reg.test(obj.className);
					}
					
					/*
					 * 删除一个元素中的指定的class属性
					 */
					function removeClass(obj , cn){
						var reg = new RegExp("\\b" +cn+ "\\b");
						obj.className = obj.className.replace(reg,"");
					}
					
					/*
					 * toggleClass可以用来切换一个类
					 * 	如果元素中具有该类，则删除
					 * 	如果元素中没有该类，则添加
					 */
					function toggleClass(obj , cn){
						if(hasClass(obj,cn)){
							removeClass(obj,cn);
						}else{
							addClass(obj,cn);
						}
					}
		</script>
	</head>
	<body>
		<br />
		<button id="btn01">点击按钮修改box1的样式</button> <br><br />
		<div id="box1" class="b1"></div>
	</body>
</html>
```

- [ ] 二级菜单练习

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title></title>
	    <style type="text/css">
	      *{
	        margin: 0;
	        padding: 0;
	        list-style: none;
	      }
	      a,img{
	        border: 0;
	        text-decoration: none;
	      }
	      body{
	        font: 12px/180% Arial,Helvetica, sans-serif,"新宋体";
	      }
	      div.sdmenu{
	        width: 150px;
	        margin: 0 auto;
	        font-family: Arial, sans-serif;
	        font-size: 12px;
	        padding-bottom: 10px;
	        background: url(image/bottom.gif) no-repeat right bottom;
	        color: #fff;
	      }
	      div.sdmenu div{
	        background: url(image/title.gif) repeat-x;
	        overflow: hidden;
	      }
	      div.sdmenu div:first-child{
	        background: url(./image/toptitle.gif) no-repeat;
	      }
	      div.sdmenu div.collapsed{
	        height: 25px;
	      }
	      div.sdmenu div span{
	        display: block;
	        height: 15px;
	        line-height: 15px;
	        overflow: hidden;
	        padding: 5px 25px;
	        font-weight: bold;
	        color:white;
	        background: url(image/expanded.gif) no-repeat 10px center;
	        cursor: pointer;
	        border-bottom: 1px solid #ddd;
	      }
	      div.sdmenu div.collapsed span{
	        background-image: url(./image/collapsed.gif);
	      }
	      div.sdmenu div a{
	        padding: 5px 10px;
	        background: #eee;
	        display: block;
	        border-bottom: 1px solid #ddd;
	        color: #066;
	      }
	      div.sdmenu div a.current{
	        background: #ccc;
	      }
	      div.sdmenu div a:hover{
	        background: #066 url(image/linkarrow.gif) no-repeat right center;
	        color: #fff;
	        text-decoration: none;
	      }
	
	    </style>
	    <script type="text/javascript" src="tools.js"></script>
	    <script type="text/javascript">
	      window.onload = function(){
	        /* 我们的每一个菜单都是一个div，当div具有collapsed这个类时，div就是折叠的
	        没有时就是展开的 */
	
	        /* 点击菜单来切换状态 */
	        var menuSpan = document.querySelectorAll(".menuSpan");
					//定义一个变量来表示当前打开的div
					var openDiv = menuSpan[0].parentNode;
	        for(var i = 0;i < menuSpan.length;i++){
	          menuSpan[i].onclick = function(){
	            //this代表我当前点击的span
	            //获取当前的父元素
	            var parentDiv = this.parentNode;
							//切换菜单的显示状态
							taggleMenu(parentDiv);
							
							/* //在切换类之前，获取元素的高度
							var begin = parentDiv.offsetHeight;
	            toggleClass(parentDiv,"collapsed");
							//在切换类之前，获取元素的高度
							var end = parentDiv.offsetHeight;
							
							//console.log("begin:"+begin+"，end："+ end);
							//动画执行效果就是讲高度从begin向eng过度,将元素的高度重置为begin
							parentDiv.style.height = begin + "px";
							//执行动画
							move(parentDiv,"height",end,10,function(){
								//动画执行完毕删除内联样式
								parentDiv.style.height = "";
							}) */
							
							
							//判断openDiv和parentDiv是否相同
							if(openDiv != parentDiv && !hasClass(openDiv,"collapsed")){
								/* 打开菜单以后，应该关闭之前的div,为了统一动画过度效果，我们希望
								 将addClass改为toggleClass，此处的toggleClass不需要有移除的功能,我们做个判断*/
								//addClass(openDiv,"collapsed");
								taggleMenu(openDiv);
							}
							openDiv = parentDiv;
	          }
	        }
					
					//抽取为函数,用来切换菜单的折叠和展开的状态
					function taggleMenu(obj){
						//在切换类之前，获取元素的高度
								var begin = obj.offsetHeight;
						    toggleClass(obj,"collapsed");
								//在切换类之前，获取元素的高度
								var end = obj.offsetHeight;
								
								//console.log("begin:"+begin+"，end："+ end);
								//动画执行效果就是讲高度从begin向eng过度,将元素的高度重置为begin
								obj.style.height = begin + "px";
								//执行动画
								move(obj,"height",end,10,function(){
									//动画执行完毕删除内联样式
									obj.style.height = "";
								})
						}
					}
		</script>
	</head>
	<body>
	    <div id="my_menu" class="sdmenu">
	      <div>
	        <span class="menuSpan">在线工具</span>
	        <a href="#">图像优化</a>
	        <a href="#">收藏夹图标生成器</a>
	        <a href="#">邮件</a>
	        <a href="#">htaccess密码</a>
	        <a href="#">梯度图像</a>
	        <a href="#">按钮生成器</a>
	      </div>
	      <div class="collapsed">
	        <span class="menuSpan">支持我们</span>
	        <a href="#">推荐我们</a>
	        <a href="#">链接我们</a>
	        <a href="#">网络资源</a>
	      </div>
	      <div class="collapsed">
	        <span class="menuSpan">合作伙伴</span>
	        <a href="#">Javascripr工具包</a>
	        <a href="#">css驱动</a>
	        <a href="#">CodingForums</a>
	        <a href="#">css例子</a>
	      </div>
	      <div class="collapsed">
					<span class="menuSpan">测试电流</span>
					<a href="#">Current or not</a>
					<a href="#">Current or not</a>
					<a href="#">Current or not</a>
					<a href="#">Current or not</a>
				</div>
	    </div>
	    </body>
	</html>
	```
	
