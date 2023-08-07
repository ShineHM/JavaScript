### 44jsDOM增删改查和练习

---

==**DOM方法：**==

- 获取元素节点：通过document对象调用[练习2 DOM查询]()

     1. **getElementById（）：**通过 `id` 属性获取 ` 一个`元素节点对象

     2. **getElementsByTagName（）：**通过`标签名`获取`一组`元素节点对象，会返回一个类数组对象，所有

        查询到的元素都会封装到对象中，即使查询到的就只有一个

     3. **getElementsByName（）：**通过`name`属性获取`一组`元素节点对象

- 获取元素节点的子节点：通过具体的元素节点调用[练习2 DOM查询]()

	1. **getElementsByTagName（）：**方法，返回当前节点的指定标签名后代节点

	2. **childNodes：**属性，表示当前节点的所有子节点，包括文本节点在内的所有节点，根据DOM标准标签间

		空白也会当成文本节点，`注意：`在IE8及以下的浏览器不会把空白文档当成子节点 

	3. **children：**属性，可以获取当前元素的所有子元素

	4. **firstChild：**属性，表示当前节点的第一个子节点（包括空白文本）

	5. **firstElementChild：**属性，可以获取当前元素的第一个子元素，不支持IE8及以下

	6. **lastChild：**属性，表示当前节点的最后一个子节点

- 获取父节点和兄弟节点：通过具体的节点调用[练习2 DOM查询]()

	1. **parentNode：**属性，表示当前节点的父节点
	2. **previousSibling：**属性，表示当前节点的前一个兄弟节点（也会获取空白文本）
	3. **previousElementSibling：**属性，获取前一个兄弟元素，IE8及以下不支持
	4. **nextSibling：**属性，表示当前节点的后一个兄弟节点

- 获取body标签：在document中有一个属性`body`，它保存的是body的引用

	```js
	var body = document.body;
	console.log(body); //<body></body>
	```

- 获取html根标签：在document中有一个属性`documentElement`，它保存的是html根标签

	```js
	var html = document.documentElement;
	console.log(html);//<html></html>
	```

- 获取所有元素：在document中有一个属性`all`，它保存的是所有元素

	```js
	var all = document.all;
	//all = document.getElementsByTagName("*");这种方式也可以获得全部元素
	for(var i = 0;i < all.length; i++){
		console.log(all[i]);
	}
	```

- **getElementsByClassName( )：**根据元素的`class属性值`查询一组元素节点对象，但是IE8及以下不支持

- **document.querySelector（）：**需要一个选择器字符串作为参数，可以根据一个css选择器来查询一个元素节

	点对象，虽然`IE8中没有getElementsByClassName（）但是可以使用querySelector（）代替，`使用该方法总会

	返回唯一的元素，如果满足条件的元素有多个，那么他只会返回第一个

- **document.querySelectorAll( )：**该方法和`document.querySelector（）`类似，不同的是他会将符合条件的元素

	封装到一个数组中返回，只有一个元素也会返回

	

- **document.createElement( )：**可以创建一个`元素节点对象，`他需要一个标签名作为参数，将会根据该标签名

	常见元素节点对象，并将创建好的对象作为返回值返回	`eg：var li = document.createElement("li")；`

- **document.createTextNode( )：**可以用来`创建一个文本节点对象，`需要一个文本内容作为参数，将会根据该

	内容创建文本节点，并将新的节点返回

- **appendChild( )：**向一个父节点中添加一个新的子节点，`用法：父节点.appendChild（子节点）；`

- **insertBefore（）：**可以在指定的子节点迁出如新的节点`语法：父节点.insertBefore（新节点，旧节点）；`

- **replaceChild（）：**可以使用指定的子节点替换已有的子节点`语法：父节点.replaceChild(新节点，旧节点);`

- **removeChild（）：**可以删除一个子节点`语法：父节点.removeChild（子节点）；`

	

`innerHTML `通过这个属性可以获取到元素内部的html代码，但对于自结束标签此属性没有意义

`innerText`该属性可以获取到元素内部的文本内容，和 innerHTML 不同的是它会自动将 html 去除

如果需要读取元素节点属性：直接使用`元素 . 属性名`例子：元素 . id，元素 . name，元素 . value

注意：class属性不能采用这种方式，读取class属性是需要使用`元素 . className`

==**练习：**==

- [x] 1. 图片的切换

	<img src="C:\Users\Lenovo\Pictures\Saved Pictures\图片的切换.jpg" style="zoom:70%;" />

	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<style type="text/css">
				*{
					margin: 0;
					padding: 0;
				}
				#outer{
					width: 300px;
					height: 270px;
					margin: 50px auto;
					background-color: pink;
					text-align: center;
				}
				img{
					width: 280px;
					height: 200px;
				}
				button{
					margin-top: 10px;
				}
			</style>
			<script type="text/javascript">
				window.onload = function(){
					var prev = document.getElementById("prev");
					var next = document.getElementById("next");
					var img = document.getElementsByTagName("img")[0];
					var imgArr = ["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg"];
					var index = 0;
					var info = document.getElementById("info");
					info.innerHTML = "一共有"+imgArr.length+"张图片，当前是"+(index+1)+"张";
					prev.onclick = function(){
						//img.src = "image/1.jpg"
						index--;
						if(index < 0){
							index = imgArr.length-1;
						}
						img.src = imgArr[index];
						info.innerHTML = "一共有"+imgArr.length+"张图片，当前是"+(index+1)+"张";
					}
					next.onclick = function(){
						//img.src = "image/2.jpg";
						index++;
						if(index > imgArr.length-1){
							index = 0;
						}
						img.src = imgArr[index];
						info.innerHTML = "一共有"+imgArr.length+"张图片，当前是"+(index+1)+"张";
					}
					
				}
			</script>
		</head>
		<body>
			<div id="outer">
				<p id="info"></p>
				<img src="image/1.jpg" alt="图片1">
				<button id="prev">上一张</button>
				<button id="next">下一张</button>
			</div>		
		</body>
	</html>
	```

- [x] 2. DOM查询和练习

  - 获取元素节点：通过document对象调用[练习2 DOM查询]()

       1. **getElementById（）：**通过 `id` 属性获取 ` 一个`元素节点对象

       2. **getElementsByTagName（）：**通过`标签名`获取`一组`元素节点对象，会返回一个类数组对象，所有

          查询到的元素都会封装到对象中，即使查询到的就只有一个

       3. **getElementsByName（）：**通过`name`属性获取`一组`元素节点对象

  - 获取元素节点的子节点：通过具体的元素节点调用[练习2 DOM查询]()

  	1. **getElementsByTagName（）：**方法，返回当前节点的指定标签名后代节点

  	2. **childNodes：**属性，表示当前节点的所有子节点，包括文本节点在内的所有节点，根据DOM标准标

  		签间空白也会当成文本节点，`注意：`在IE8及以下的浏览器不会把空白文档当成子节点 

  	3. **children：**属性，可以获取当前元素的所有子元素

  	4. **firstChild：**属性，表示当前节点的第一个子节点（包括空白文本）

  	5. **firstElementChild：**属性，可以获取当前元素的第一个子元素，不支持IE8及以下

  	6. **lastChild：**属性，表示当前节点的最后一个子节点

  - 获取父节点和兄弟节点：通过具体的节点调用[练习2 DOM查询]()

  	1. **parentNode：**属性，表示当前节点的父节点
  	2. **previousSibling：**属性，表示当前节点的前一个兄弟节点（也会获取空白文本）
  	3. **previousElementSibling：**属性，获取前一个兄弟元素，IE8及以下不支持
  	4. **nextSibling：**属性，表示当前节点的后一个兄弟节点

  - `innerHTML `通过这个属性可以获取到元素内部的html代码，但对于自结束标签此属性没有意义

  	`innerText`该属性可以获取到元素内部的文本内容，和 innerHTML 不同的是它会自动将 html 去除

  	

  <img src="C:\Users\Lenovo\Pictures\Saved Pictures\DOM查询.jpg" alt="DOM查询" style="zoom:50%;" />

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title></title>
  		<style type="text/css">
  			body {
  				width: 800px;
  				margin-left: auto;
  				margin-right: auto;
  			}	
  			button {
  				width: 300px;
  				margin-bottom: 10px;
  			}	
  			#btnList {
  				float:left;
  			}
  			#total{
  				width: 450px;
  				float:left;
  			}
  			ul{
  				list-style-type: none;
  				margin: 0px;
  				padding: 0px;
  			}	
  			.inner li{
  				border-style: solid;
  				border-width: 1px;
  				padding: 5px;
  				margin: 5px;
  				background-color: #99ff99;
  				float:left;
  			}	
  			.inner{
  				width:400px;
  				border-style: solid;
  				border-width: 1px;
  				margin-bottom: 10px;
  				padding: 10px;
  				float: left;
  			}
  		</style>
  		<script type="text/javascript">
  			/* 定义一个函数，专门用来为指定元素绑定单击响应函数
  				参数:
  					idstr 要绑定单击响应函数的对象的id属性
  					fun 事件的回调函数,当单击元素时,该函数触发 */
  			function myClick(idStr,fun){
  				var btn = document.getElementById(idStr);
  				btn.onclick = fun;
  			}
  
  			window.onload = function(){
  				var btno1 = document.getElementById("btn01");
  				btno1.onclick = function(){
  					//查找#bj节点
  					var bj = document.getElementById("bj");
  					alert(bj.innerHTML);
  				};
  				
  				var btn02 = document.getElementById("btn02");
  				btn02.onclick = function(){
  					//查找所有li节点
  					var lis = document.getElementsByTagName("li");
  					//alert(lis);
  					//alert(lis.length);
  					for(var i = 0;i < lis.length;i++){
  						alert(lis[i].innerHTML);
  					}
  				}
  						
  				var btn03 = document.getElementById("btn03");
  				btn03.onclick = function(){
  					//查找name=gender的所有节点
  					var gen = document.getElementsByName("gender");
  					//alert(gen);
  					//alert(gen.length);
  					for(var j = 0;j < gen.length;j++){
  						alert(gen[j].value);
  					}
  				}
  							
  				var btn04 = document.getElementById("btn04");
  				btn04.onclick = function(){
  					//查找#city下所有li节点
  					var city = document.getElementById("city");
  					var lis = city.getElementsByTagName("li");
  					//alert(lis);
  					for(var i = 0;i < lis.length;i++){
  						alert(lis[i].innerHTML);
  					}
  				}
  						
  				var btn05 = document.getElementById("btn05");
  				btn05.onclick = function(){
  					//返回#city下的所有子节点
  					var city = document.getElementById("city");
  					var zi = city.childNodes;
  					//alert(zi.length);
  					var cns = city.children;
  					alert(cns.length);
  				}
  						
  				var btn06 = document.getElementById("btn06");
  				btn06.onclick = function(){
  					//返回#phone的第一个子节点
  					var phone = document.getElementById("phone");
  					//alert(phone.children[0].innerHTML) ;IOS
  					//var first = phone.firstChild;
  					var first = phone.firstElementChild;
  					alert(first.innerHTML);//IOS
  				}
  						
  				myClick("btn07",function(){
  					//返回#bj的父节点
  					var bj = document.getElementById("bj");
  					var pn = bj.parentNode;
  					//alert(pn.innerHTML);
  					alert(pn.innerText);
  				});
  							
  				myClick("btn08",function(){
  					//返回#android的前一个兄弟节点
  					var and = document.getElementById("Android");
  					var ps = and.previousSibling;
  					//var ps = and.previousElementSibling;
  					alert(ps);
  				})
  					
  				myClick("btn09",function(){
  					//读取#username的value属性值
  					var un = document.getElementById("username");
  					//文本框的value属性值就是文本框中填写的内容
  					alert(un.value);
  				})
  							
  				myClick("btn10",function(){
  					//设置#username的value属性值
  					var un = document.getElementById("username");
  					un.value = "hello";
  				})
  								
  				myClick("btn11",function(){
  					//返回#bj的文本值
  					var bj = document.getElementById("bj");
  					//alert(bj.innerHTML);北京
  					//alert(bj.innerText);北京
  					/* 获取北京文本节点
  					var fc = bj.firstChild;
  					alert(fc.nodeValue);//因为文本节点的nodeValue就是文本内容 */
  					alert(bj.firstChild.nodeValue);
  				})				
  			}
  		</script>
  	</head>
  	<body>
  		<div id="total">
  			<div class="inner">
  				<p>
  					你喜欢哪个城市？
  				</p>
  				<ul id="city">
  					<li id="bj">北京</li>
  					<li>上海</li>
  					<li>东京</li>
  					<li>首尔</li>
  				</ul>
  				<br>
  				<br>
  				
  				<p>
  					你喜欢哪款单机游戏？
  				</p>
  				<ul id="game">
  					<li id="rl">红警</li>
  					<li>实况</li>
  					<li>极品飞车</li>
  					<li>魔兽</li>
  				</ul>
  				<br />
  				<br />
  				
  				<p>
  					你手机的操作系统是？
  				</p>
  				<ul id="phone">
  					<li>IOS</li>
  					<li id="Android">Android</li>
  					<li>Window Phone</li>
  				</ul>
  			</div>
  			<div class="inner">
  				<br>
  				gender:
  				<input type="radio" name="gender" value="male" />
  				Male
  				<input type="radio" name="gender" value="female" />
  				Female
  				<br>
  				<br>
  				name:
  				<input type="text" name="name" id="username" value="abcde" />
  			</div>
  		</div>
  		<div id="btnList">
  			<div><button id="btn01">查找#bj节点</button></div>
  			<div><button id="btn02">查找所有li节点</button></div>
  			<div><button id="btn03">查找name=gender的所有节点</button></div>
  			<div><button id="btn04">查找#city下所有li节点</button></div>
  			<div><button id="btn05">返回#city下的所有子节点</button></div>
  			<div><button id="btn06">返回#phone的第一个子节点</button></div>
  			<div><button id="btn07">返回#bj的父节点</button></div>
  			<div><button id="btn08">返回#android的前一个兄弟节点</buton></div>
  			<div><button id="btn09">读取#username的value属性值</button></div>
  			<div><button id="btn10">设置#username的value属性值</button></div>
  			<div><button id="btn11">返回#bj的文本值</button></div>
  		</div>
  	</body>
  </html>
  ```

- [x] 3. 全选练习

	![全选练习](C:\Users\Lenovo\Pictures\Saved Pictures\全选练习.jpg)

	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<script type="text/javascript">
				window.onload = function(){
					var checkedAllBtn = document.getElementById("checkedAllBtn");
					var checkedAllBox = document.getElementById("checkedAllBox");
					checkedAllBtn.onclick = function(){
						//1.#checkedAllBtn全选按钮
						var items = document.getElementsByName("items");
						for(var i = 0;i < items.length;i++){
							//通过多选框的checked属性可以获取或设置多选框的选中状态
							items[i].checked = true;
						}
						checkedAllBox.checked = true;
					}
					
					var checkedNoBtn = document.getElementById("checkedNoBtn");
					var checkedAllBox = document.getElementById("checkedAllBox");
					checkedNoBtn.onclick = function(){
						//2.#checkedNoBtn
						var items = document.getElementsByName("items");
						for(var i = 0;i < items.length;i++){
							items[i].checked = false;
						}
						checkedAllBox.checked = false;
					}
					
					var checkedRevBtn = document.getElementById("checkedRevBtn");
					var items = document.getElementsByName("items");
					checkedRevBtn.onclick = function(){
						//3.#checkedRevBtn
						checkedAllBox.checked = true;
						for(var i = 0;i < items.length;i++){
							/* if(items[i].checked){
								items[i].checked = false;
							}else{
								items[i].checked = true;
							} */
							items[i].checked = !items[i].checked;
							if(!items[i].checked){
								//一旦进入判断则证明不是全选状态，将checkedAllBox设置为没选中状态
								checkedAllBox.checked = false;
							}
						}
					}
					
					var sendBtn = document.getElementById("sendBtn");
					sendBtn.onclick = function(){
						//4.#sendBtn
						var items = document.getElementsByName("items");
						for(var i = 0;i < items.length;i++){
							if(items[i].checked){
								alert(items[i].value);
							}
						}
					}
					
					var checkedAllBox = document.getElementById("checkedAllBox");
					checkedAllBox.onclick = function(){
						//5.#checkedAllBox
						//alert(this === checkedAllBox);//true,在事件的响应函数中，响应函数是给谁绑定的this就是谁
						var items = document.getElementsByName("items");
						for(var i = 0;i < items.length;i++){
							items[i].checked = this.checked;
							
						}
					}
					//6.items
					/* 如果四个全选框都选中,则checkedAllBox也应该选中
					如果四个全选框没都选中,则checkedAllBox也不应该选中 */
					//为四个多选框分别绑定单击响应函数
					//6.items
					var items = document.getElementsByName("items");
					for(var i = 0;i < items.length;i++){
						items[i].onclick = function(){
							checkedAllBox.checked = true;
							for (var j = 0;j<items.length;j++){
								//判断四个多选框是否全选
								//只要有一个没选中则就不是全选
								if(!items[j].checked){
									//一旦进入判断则证明不是全选状态，将checkedAllBox设置为没选中状态
									checkedAllBox.checked = false;
									//一旦进入判断，则已经得出结果，不用再继续执行循环
									break;
								}
							}
						}
					}
				}
			</script>
		</head>
		<body>
			<form action="" method="post">
				你爱好的运动是？<input type="checkbox" id="checkedAllBox" />全选/全不选
				<br />
				<input type="checkbox" name="items" id="" value="足球" />足球
				<input type="checkbox" name="items" id="" value="篮球" />蓝球
				<input type="checkbox" name="items" id="" value="羽毛球" />羽毛球
				<input type="checkbox" name="items" id="" value="乒乓球" />乒乓球
				<br/>
				<input type="button" name="" id="checkedAllBtn" value="全 选" />
				<input type="button" name="" id="checkedNoBtn" value="全不选" />
				<input type="button" name="" id="checkedRevBtn" value="反 选" />
				<input type="button" name="" id="sendBtn" value="提 交" />
			</form>
		</body>
	</html>
	```

- [x] 4. DOM增删改练习

	- **document.createElement( )：**可以创建一个`元素节点对象，`他需一个标签名作为参数，将会根据该标签

		名常见元素节点对象，并将创建好的对象作为返回值返回	`eg：var li = document.createElement("li")；`

	- **document.createTextNode( )：**可以用来`创建一个文本节点对象，`需要一个文本内容作为参数，将会根据

		该内容创建文本节点，并将新的节点返回

	- **appendChild( )：**向一个父节点中添加一个新的子节点，`用法：父节点.appendChild（子节点）；`

	- **appendChild( )：**向一个父节点中添加一个新的子节点，`用法：父节点.appendChild（子节点）；`

	- **insertBefore（）：**可在指定的子节点迁出如新的节点`语法：父节点.insertBefore（新节点，旧节点);`

	- **replaceChild（）：**可使用指定的子节点替换已有的子节点`语法：父节点.replaceChild(新节点，旧节点);`

	- **removeChild（）：**可以删除一个子节点`语法：父节点.removeChild（子节点）；`

		

	<img src="C:\Users\Lenovo\Pictures\Saved Pictures\DOM增删改练习.jpg" alt="DOM增删改练习" style="zoom:60%;" />

	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<style type="text/css">
			body{
				width: 600px;
				margin: 0 auto;
			}
			#total{
				width: 300px;
				border: black 1px solid;
				float: left;
				margin-top: 10px;
				padding-left: 10px;
			}
			ul{
				list-style: none;
				padding: 0;
				margin: 0;
			}
			li{
				float: left;
				border: black 1px solid;
				margin: 5px;
				padding: 5px;
				background-color: chartreuse;
			}
			#btnList{
				margin-left: 10px;
				float: left;
			}
			button{
				width: 250px;
				margin-top: 10px;
			}
		</style>
		<script type="text/javascript">
			//DOM增删改练习
			window.onload = function(){
				function myClick (idStr, fun){
					var btn = document.getElementById(idStr);
					btn.onclick = fun;
				}
				
				//建一个“广州”节点，添加到#city下(法1)
				myClick("btn01",function(){
					//创建li元素节点
					var li = document.createElement("li");
					//创建广州文本节点
					var gzText = document.createTextNode("广州");
					li.appendChild(gzText);
					//获取id为city的节点
					var city = document.getElementById("city");
					city.appendChild(li);
				})
				
				
				//建一个“广州”节点，添加到#city下(法2)
				myClick("btn07",function(){
					var city = document.getElementById("city");
					/* 使用innerHTML也可以实现完成DOM的增删改操作,但他是将所有的li都重新建立,动作太大
					我们一般两种方式结合使用 */
					//city.innerHTML = "<li>广州</li>";
					//结合两种方法(推荐使用)
					var li = document.createElement("li");
					li.innerHTML = "广州";
					city.appendChild(li);
				})
				
				//将“广州”节点插入到#bj前面
				myClick("btn02",function(){
					var bj = document.getElementById("bj");
					var li = document.createElement("li");
					var gzText = document.createTextNode("广州");
					li.appendChild(gzText);
					//获取city
					var city = document.getElementById("city");
					city.insertBefore(li,bj);
				})
				
				//使用“广州”节点替换#bj节点
				myClick("btn03",function(){
					var bj = document.getElementById("bj");
					var li = document.createElement("li");
					var gzText = document.createTextNode("广州");
					li.appendChild(gzText);
					var city = document.getElementById("city");
					city.replaceChild(li,bj);
				})
				
				//删除#bj节点
				myClick("btn04",function(){
					var bj = document.getElementById("bj");
					var city = document.getElementById("city");
					//city.removeChild(bj);
					bj.parentNode.removeChild(bj);//常用
				})
				
				//读取#city内的HTML代码
				myClick("btn05",function(){
					var city = document.getElementById("city");
					alert(city.innerHTML);
				})
				
				//设置#bj内的HTML代码
				
				myClick("btn06",function(){
					var bj = document.getElementById("bj");
					bj.innerHTML = "郑州";
				})
			}
		</script>
		</head>
		<body>
			<div id="total">
				<div class="inner">
					<p>
						你喜欢那个城市？
					</p>
					<ul id="city">
						<li id="bj">北京</li>
						<li>上海</li>
						<li>东京</li>
						<li>首尔</li>
					</ul>
				</div>
			</div>
			<div id="btnList">
				<div><button id="btn01">建一个“广州”节点，添加到#city下(法1)</button></div>
				<div><button id="btn07">建一个“广州”节点，添加到#city下(法2)</button></div>
				<div><button id="btn02">将“广州”节点插入到#bj前面</button></div>
				<div><button id="btn03">使用“广州”节点替换#bj节点</button></div>
				<div><button id="btn04">删除#bj节点</button></div>
				<div><button id="btn05">读取#city内的HTML代码</button></div>
				<div><button id="btn06">设置#bj内的HTML代码</button></div>
			</div>
		</body>
	</html>
	```

- [x] 5. 向表格中添加和删除记录练习

	<img src="C:\Users\Lenovo\Pictures\Saved Pictures\添加和删除员工练习.jpg" alt="向表格中添加和删除记录练习" style="zoom:70%;" />
	
	```html
	
	```
<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<style type="text/css">
				#employeeTable{
					width: 300px;
					margin: 0 auto;
					border-spacing: 1px;
					background-color: black;

				}
				#formDiv{
					margin: 50px auto;
					width: 250px;
					border: #000000 1px solid;
					padding: 20px;
				}
				td,th{
					background-color: white;
				}
			</style>
			<script type="text/javascript">
				
				/* 删除tr的响应函数  我们在新添加了员工之后点击删除会没有效果，因为点击的响应函数已经执行完了
					因此我们还需要在添加新员工功能中添加删除响应函数，因此我们把删除响应函数代码提取出来，
					在下方直接调用*/
				function delA(){
					//点击超链接后，删除所在行员工的信息
					var tr = this.parentNode.parentNode;
							
					//获取要删除员工的名字(两种)
					//var name = tr.getElementsByTagName("td")[0].innerHTML;
					var name = tr.children[0].innerHTML;
	
					//alert("确认删除吗？")这个alert会弹出只能确认的窗口
					/* confirm()用于弹出一个带有确认和取消按钮的提示框,
					需要一个字符串作为参数,会作为提示文字显示 ,如果用户点击确认会返回true，点击取消会返回false*/
					var flag = confirm("确认删除"+name+"吗");
					if(flag){
						tr.parentNode.removeChild(tr);
					}
							
					/* 点击超链接以后,超链接会跳转页面,这个是超链接的默认行为
					但此时我们不想让他跳转,可以在响应函数最后return false;取消,或者href="javascript:;" */
					return false;
				}
				
				window.onload = function(){
					/* 删除功能实现 */
					var allA = document.getElementsByTagName("a");
	       /* for循环会在页面加载完成之后立即执行，而allA的onclick响应函数会在点击超链接时才执行
						当响应函数执行时，for循环早已执行完毕，
						当使用另一种方法在for循环写allA的onclick响应函数时：
						for(var i = 0;i < allA.length;i++){
						allA[i].onclick = function(){
				本来this和allA[i]是一样的，但for循环执行完了i的值已经变了，allA[i]的值是循环体执行完了的i的值
							var tr = this.parentNode.parentNode;
							..........
						};
					} */
					for(var i = 0;i < allA.length;i++){
						allA[i].onclick = delA;
					}


​					
					/* 添加员工功能 (两种方法)*/
					var addEmpButton = document.getElementById("addEmpButton");
					addEmpButton.onclick = function(){
						var name = document.getElementById("empName").value;
						var salary = document.getElementById("salary").value;
						var email = document.getElementById("email").value;
						
						/* //(方法一)需要将我们获取到的信息添加到tr中
						var tr = document.createElement("tr");
						var nameTd = document.createElement("td");
						var emailTd = document.createElement("td");
						var salaryTd = document.createElement("td");
						var aTd = document.createElement("td");
						var a = document.createElement("a");
						var nameText = document.createTextNode(name);
						var emailText = document.createTextNode(email);
						var salaryText = document.createTextNode(salary);
						var delText = document.createTextNode("Delete");
						nameTd.appendChild(nameText);
						emailTd.appendChild(emailText);
						salaryTd.appendChild(salaryText);
						a.appendChild(delText);
						aTd.appendChild(a);
						tr.appendChild(nameTd);
						tr.appendChild(emailTd);
						tr.appendChild(salaryTd );
						tr.appendChild(aTd);
						a.href = "javascript:;";
						a.onclick = delA; */
						
						//(推荐方法二)需要将我们获取到的信息添加到tr中
						var tr = document.createElement("tr");
						tr.innerHTML = "<td>"+name+"</td>"+
													 "<td>"+email+"</td>"+
													 "<td>"+salary+"</td>"+
													 "<td><a href='javascript:;'>Delete</a></td>";
						var a = tr.getElementsByTagName("a")[0];
						a.onclick = delA;
						
						var employeeTable = document.getElementById("employeeTable");
						//浏览器会添加自动给table添加tbody,因此我们要获取employeeTable的tbody
						var tbody = employeeTable.getElementsByTagName("tbody")[0];
						//将tr添加到tbody中，也可以使用innerHTML添加但是他会将内容全部更新，也会导致超链接无效
						/* (不建议使用)tbody.innerHTML += "<tr>"+
																						"<td>"+name+"</td>"+
																						 "<td>"+email+"</td>"+
																						 "<td>"+salary+"</td>"+
																						 "<td><a href='javascript:;'>Delete</a></td>"
																					+"</tr>"; */
						tbody.appendChild(tr);//(建议使用)
					}
				}
			</script>
		</head>
		<body>
			<table id="employeeTable">
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Salary</th>
					<th>&nbsp</th>
				</tr>
				<tr>
					<td>Tom</td>
					<td>tom@tom.com</td>
					<td>5000</td>
					<td><a href="javascript:;">Delete</a></td>
				</tr>
				<tr>
					<td>Jerry</td>
					<td>jerry@sohu.com</td>
					<td>8000</td>
					<td><a href="deleteEmp?id=002">Delete</a></td>
				</tr>
				<tr>
					<td>Bob</td>
					<td>bob@tom.com</td>
					<td>10000</td>
					<td><a href="deleteEmp?id=003">Delete</a></td>
				</tr>
			</table>
			<div id="formDiv">
				<h4>添加新员工</h4>
				<table >
					<tr>
						<td class="word">name:</td>
						<td class="inp">
							<input type="text" name="empName" id="empName">
						</td>
					</tr>
					<tr>
						<td class="word">email:</td>
						<td class="inp">
							<input type="text" name="email" id="email">
						</td>
					</tr>
					<tr>
						<td class="word">salary:</td>
						<td class="inp">
							<input type="text" name="salary" id="salary">
						</td>
					</tr>
					<tr>
						<td colspan="2" align="center">
							<button id="addEmpButton" value="abc">Submit</button>
						</td>
					</tr>
				</table>
			</div>
		</body>
	</html>
	```


​	