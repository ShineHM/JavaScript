### 49jsBOM对象

---

**BOM：**浏览器对象模型，BOM可以让我们通过js来操作浏览器，在BOM中为我们提供了一组对象，用来完成浏览器

​	的操作

​	1. window：代表整个浏览器的窗口，同时window也是全局网页中的全局对象

​	2. Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器

​	3. Location：代表当前浏览器的地址栏信息，可以获取地址栏信息，或者操控浏览器跳转页面

​	4. History：代表浏览器的历史记录，可以通过该对象操作浏览器的历史记录，由于隐私原因，该对象不能获取

到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次有效

​	5. Screen：代表用户的屏幕信息，通过该对象可以获取到用户的显示器的相关信息（用不上）

`这些BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用也可以直接使用`

- ==Navigator：==代表当前浏览器的信息，通过该对象可以识别不同的浏览器，由于历史原因这个对象中的大部分

  属性已经不能帮助我们识别浏览器了，一般我们只会使用==userAgent==来判断浏览器信息，他就是一个字符串，

  这个字符串中包含有用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title></title>
  		<script type="text/javascript">
  			window.onload = function(){
  				console.log(navigator.userAgent);
  				/* - 谷歌的userAgent：Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) 
  															Chrome/83.0.4103.97 Safari/537.36
  - 					火狐的userAgent：Mozilla/5.0 (Windows NT 6.1; W0W64; rv: 50.0) Gecko/20100101 Firefox/50. O 
  						IE8的userAgent：Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C;
  														.NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; LCTE)
  						IE11的userAgent：Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727;
  														.NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; LCTE; rv:11.0) like Gecko
  								在IE11中已经将微软和IE相关的标识去除了，我们基本不能通过userAgent来识别浏览器是不是IE了*/
  				var ua = navigator.userAgent;
  				console.log(ua);
  				if(/firefox/i.test(ua)){
  					alert("你是火狐");
  				}else if(/chrome/i.test(ua)){
  					alert("你是谷歌");
  				}else if(/mise/i.test(ua)){
  					alert("你是IE");
  				}else if("ActiveXObject" in window){
  					alert("你是IE11");
  				}
  				
  				/* 如果通过userAgent不能判断，还可以通过一些浏览器特有的对象来判断浏览器，比如：ActiveXObject */
  				/* if(window.ActiveXObject){ //IE11已经发现很多人使用这个属性进行对IE进行判断，它作了修改，修改他的Boolean值，即使有这个属性也返回false
  					alert("你是IE");
  				}else{
  					alert("你不是IE");
  				} */
  				
  				/* if("ActiveXObject" in window){ //in检查师傅哦含有这个属性
  					alert("你是IE");
  					}else{
  						alert("你不是IE");
  					} */
  			}
  		</script>
  	</head>
  	<body>
  	</body>
  </html>
  ```

-  ==History：==可以是浏览器向前向后翻页

	​	length：属性，可以获取到当前访问的链接数量，只是当次的

	​	back（）：方法，可以回退到上一个页面，作用和浏览器的回退按钮一样

	​	forward（）：方法，可以跳转到下一个页面，作用和浏览器的前进按钮一样

	​	go（）：方法，可以用来跳转到指定的页面，需要一个整数作为参数：

	​						1：表示向前跳转一个页面，相当于forward（）

	​						2：表示向前跳转两个页面

	​						- 1：表示向后跳转一个页面

​								 - 2：表示向后跳转两个页面

- ==Location：==如果直接打印 Location则可以获取到地址栏的信息（当前页面的完整路径），如果直接将location

	属性修改为一个完整的路径或者相对路径，则我们页面会自动跳转到该路径，并且会生成相应的历史记录

	​	assign（）：方法，用来跳转到其他页面，作用和直接修改location一样

	​	reload（）：方法，用于重新加载当前页面，作用和刷新按钮一样，如果传一个==true==作为参数，则会强制清

	​								空缓存刷新页面

	​	replace（）：方法，可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，不会生成历史记录，不

	​								能使用回退按钮

