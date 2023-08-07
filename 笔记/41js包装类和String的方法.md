### 41js包装类和String对象的方法

---

**包装类：**

在js中为我们提供了三个包装类（这三个都是构造函数），通过这三个包装类可以将基本数据类型装换为对象

​	String（）：可以将基本数据类型字符串转换为String对象

​	Number（）：可以将基本数据类型字符串转换为Number对象

​	Boolean（）：可以将基本数据类型字符串转换为Boolean对象

==注意：==在实际应用中，不会使用基本数据类型对象，因为使用这种对象，比较时会造成不可预期的结果

```js
var num = new Number(3);
var num2 = new Number(3);
var num3 = 3;
var str = new String("hello");
var bool = new Boolean(true);
console.log(typeof num);//object
console.log(typeof str);//object
console.log(typeof bool);//object
num.hello = "aa";
console.log(num.hello);//aa
console.log(num == num2);//false	比较的是对象，地址不一样
console.log(num2 == num3);//true	做了类型转换再比较
```

方法和属性只能添加给对象，不能添加给基本数据类型，当我们对一些基本数据类型的值去调用属性和方法时，

浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法，调用完后，又将其转换为了基本数据

类型

```js
var b = 123;//临时将b包装成了number对象
b = b.toString();//再调用number对象的toString方法
console.log(b);//123
console.log(typeof b);//string
```

**String对象的方法：**

在底层字符串是以字符数组的形式保存的

​	==length：==可以用来获取字符串的长度

```js
var str = "hello";
console.log(str.length);//5
console.log(str[2]);//l
```

​	==charAt（）：==可以返回字符串中的指定位置的字符，根据索引获取指定的字符

```js
var str = "hello";
var result = str.charAt(1);
console.log(result);//e
```

​	==charCodeAt（）：==获取指定位置字符的字符编码（Unicode编码）

​	==String.fromCharCode（）：==可以根据字符编码去获取字符

```js
var str = "hello";
var result = str.charCodeAt(1);
var result1 = String.fromCharCode(101);
console.log(result);//101
console.log(result1);//e
```

​	==concat（）：==可以用来连接两个或多个字符串，作用和==+==一样

​	==indexof（）：==该方法可以检索一个字符串中是否有指定内容，如果字符串中含有该内容，则会返回第一次出

​			现的索引,如果没有找到指定的内容，则返回 -1  ，可以指定第二个参数，指定开始查找的位置

​	==lastIndexOf（）：==该方法的用法和indexOf（）一样，不同的是indexOf是从前往后找，而lastIndexOf是从后往

​			前找

```js
var str = "hello";
var result = str.concat("苗苗");
console.log(result);//hello苗苗
var result = str.indexOf("h"，1);
console.log(result);//-1
var result = str.lastIndexOf("h",3);
console.log(result);//0
```

​	==slice（）：==可以从字符串中截取指定的内容，不会影响原字符串，而是将截取的内容返回

​			参数：第一个，开始位置的索引（包括开始位置）

​							第二个结束位置的索引（不包括结束位置），如果省略第二个参数，则会截取到后边所有的

​						也可以传一个负值作为参数，负数的话将会从后边计算

​	==substring（）：==可以用来截取一个字符串，和slice（）类似

​			参数：第一个，开始位置的索引（包括开始位置）

​							第二个结束位置的索引（不包括结束位置），不同的是这个方法不能接受负值作为参数，如果传递

​							了一个负值，则默认为 0，他还自动调整参数的位置，若第二个参数小于第一个，则自动交换

​	==substr（）：==用来截取字符串，参数：1.截取开始位置的索引，2.截取的长度

```js
var str = "hello";
var result = str.slice(1,4);
var result1 = str.substring(1,5);
var result2 = str.substr(0,3);
console.log(result);//ell
console.log(result1);//ello
console.log(result2);//hel
```

**和正则表达式`（参考42js正则表达式简介和语法）`相关方法：**	

​	==split（）：==可将一个字符串拆分为一个数组，参数：需要一个字符串作为参数，将会根据该字符去拆分数组

​		方法中也可以传递一个正则表达式作为参数，这样方法将会根据正则表

​		达式去拆分字符串，这个方法不指定全局匹配，也会全部拆分

​	==search（）：==可以搜索字符串中是否含有指定内容，若搜索到指定内容，返回第一次出现的索引，没有搜到

​		返回 -1，他可接收一个正则表达式为参数，再根据正则表达式检索字符串，设置全局匹配也只会查找第一个

​	==match（）：==可以根据正则表达式，从一个字符串中符合条件的内容提取出来，默认情况下match只会找到第

​		一个符合要求的内容，找到后就停止检索，我们可以设置正则表达式为全局模式，这样就会匹配到所有内容

​		可以为一个正则表达式设置多个匹配模式，顺序无所谓，查询到多个或一个结果都会将匹配到的内容封装到数

​		组中保存

​	==replace（）：==可以将字符串中指定内容替换为新的内容，参数：1.被替换的内容（可以接收正则表达式） 

​		2.新的内容	但默认只会替换第一个

```js
var str = "a,b,cd";
var str2 = "a abc a3ec a0f6c 1h2e3l4l5o";
result = str.split(",");
var result1 = str.split(/b/);
var result2 = str2.search(/a[bef]c/);//检查是否含有abc或aec或afc
var result3 = str2.match(/[A-z]/g);
var result4 = str2.replace(/[a-z]/gi，"@"); //如果想删了，用空串代替
console.log(Array.isArray(result));//true
console.log(result.length);//3
console.log(result[2]);//cd
console.log(result1);//"a,", ",cd"
console.log(result2);//2,返回第一次出现的索引a是0，空格是1，abc出现是2
console.log(result3);//"a", "a", "b", "c", "a", "e", "c", "a", "f", "c", "h", "e", "l", "l", "o"
console.log(result4);//@ @@@ @3@@ @0@6@ 1@2@3@4@5@
```

​	==toUpperCase（）：==将一个字符串转换为大写并返回

​	==toLowerCase（）：==将一个字符串转换为小写并返回

```js
var str = "ABCDabcd";
var result = str.toLowerCase();
var result2 = str.toUpperCase();
console.log(result);//abcdabcd
console.log(result2);//ABCDABCD 
```

