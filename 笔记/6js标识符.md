### 6js标识符

---

 在js中所有可以==自主命名==的都称为标识符

eg：变量名、函数名、属性名都属于标识符

==标识符命名规则：==

1. 标识符必须由英文字母开头，不能由数字开头使用esEsES

2. 标识符可以包含数字、_ 、$

	`var a_$ = 123;`

	若写`var a@ = 456;`则会报错

3. 标识符不能使用ES中的关键字和保留字

	<img src="C:\Users\Lenovo\Pictures\Saved Pictures\1.jpg" alt="关键字和保留字" style="zoom:40%;" /> 

	`var if = 678;`会报错

4. 标识符一般都采用驼峰命名方法——首字母小写，每个单词首字母大写

	eg：helloWord  xxxYyyZzz

*js底层保存标识付时实际上是采用Unicode编码，*

   *所以理论上所有的utf-8中含有的内容都可以作为标识符*