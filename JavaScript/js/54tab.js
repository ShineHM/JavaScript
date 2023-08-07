var that;
class Tab{
	constructor(id) {
	    //获取元素
			that = this;
			this.main = document.querySelector(id);
			this.add = document.querySelector('.tabadd');
			this.ul = document.querySelector('.fisrstnav ul:first-child');
			this.fsection = document.querySelector('.tabscon');
			this.init();
	}
	//初始化函数
	init(){
		this.updateNode();
		this.add.onclick = this.addTab;
		for(var i = 0;i < this.lis.length;i++){
			this.lis[i].index = i
			this.lis[i].onclick = this.toggleTab;
			this.remove[i].onclick = this.removeTab;
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
			}
		}
		//我们动态添加元素，需要重新获得对应的元素
		updateNode(){
			this.lis = document.querySelectorAll('li');
			this.sections = document.querySelectorAll('section');
			this.remove = document.querySelectorAll('.icon-guanbi');
			this.spans = document.querySelectorAll('.fisrstnav li span:first-child');
			}
	//1.切换功能
	toggleTab(){
		//console.log(this.index);
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive'; 
	}
	//清除样式
	clearClass(){
		for(var i = 0;i < this.lis.length;i++){
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}
	//2.添加功能
	addTab(){
		that.clearClass();
		var random = Math.random();
		var num = 1;
		//创建li元素和section元素，把这两个元素追加到对应的父元素里面
		var li = '<li class="liactive"><span>新测试选项</span><span class="iconfont icon-guanbi"></span></li>'
		var section = '<section class="conactive">新测试 '+ random +'</section>';
		that.ul.insertAdjacentHTML('beforeend',li);
		that.fsection.insertAdjacentHTML('beforeend',section);
		that.init();
	}
	//3.删除功能
	removeTab(e){
		//取消冒泡，防止点击叉号会触发切换功能
		e.stopPropagation();
		var index = this.parentNode.index;
		console.log(index);
		that.lis[index].remove();//remove方法可以直接删除指定元素
		that.sections[index].remove();
		that.init();
		//当我们删除不是选中状态的li时，让选中状态保持不变
		if(document.querySelector('.liactive')) return;
		//当我们删除了选中状态的li，我们让其显示前一个
		index--;
		that.lis[index] && that.lis[index].click();//click()不需要鼠标点击触发的点击事件
	}
	//4.修改功能
	editTab(){
		var str = this.innerHTML;
		//双击禁止选中文字
		window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
		this.innerHTML = '<input type = "text" />';
		var input = this.children[0];
		input.value = str;
		input.select();//让文本框里面的文字处于选中状态
		//当我们离开文本框就把文本框里的文字给span
		input.onblur = function(){
			this.parentNode.innerHTML = this.value;
		}
		//按下回车也可以把文本框里的文字给span
		input.onkeyup = function(e){
			if(e.keyCode  == 13){
				//手动调用表单失去焦点事件，不需要鼠标离开操作
				this.blur();
			}
		}
	}
}
new Tab('#tab');