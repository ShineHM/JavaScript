### 3Js编写的位置

---

1. js代码可以编写在点击事件==onclick==中

	`<button onclick="alert('点我干嘛！')；">点我一下！</button>`

2. js代码可以编写在==超链接==中

	`<a href="javascript:alert('再点一下！')；">再点一下！</a>`

	`<a href="javascript:;">这个超链接点击则无效</a>`

	**这两种方法只有点击可以执行，但是这两种办法与结构耦合，不利于维护，不建议使用**

3. js代码可以编写在==script==标签中

	`<sctript type="text/javascript">alert("我是js内部文件");</sctript>`

4. js代码也可以写在==外部js文件==中使用script标签进行引用，script一旦引入外部文件再写入

	内部js代码则无效，浏览器会忽略，若想使用内部文件则需要重新写script标签

	**推荐使用这种方法，不同页面可以引用外部js文件，也可以利用浏览器的缓存机制**

	`<script type="text/javascript" src="js03.js"></script>`

	js03.js代码如：`elert("我是外部js文件");`

	

