### 7js数据类型

---

数据类型指的就是字面量的类型

js中一共有==六种==数据类型:

+ `String  字符串`

+ `Number  数值`
+ `Boolean  布尔值`
+ `Null  空值`
+ `Undefined  未定义`
+ `Object  对象`

其中String、Number、Boolean、Null、Undefined是==基本数据类型==

而Object属于==引用数据类型==



**String 字符串**

在字符串中我们使用==“ \ ”==作为==转义字符==，当表示一些特殊符号是可以使用==“ \ ”==进行转义

`\"表示"`、`\'表示 '`、`\n表示换行`、`\t表示制表符（相当于按了一下Tab键）`、`\\ 表示 \`

```html
str = "我说："今天天气不错""
console.log(str);
```

此时控制台会报错，需要使用转义字符进行转义，控制台才能完整输出

```html
str = "我说：\"今天天气不错\""
console.log(str);
```

```html
str = "\\\\";
console.log(str);
```

控制台会输出两个\\\

`alert("str");表示输出字面量字符串str`

`alert(str);表示输出变量str`











