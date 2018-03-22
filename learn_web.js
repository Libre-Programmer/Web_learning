function displayDate()
{
	document.getElementById("demo_datetime").innerHTML=Date();
}

function change_picture()
{
	var x=document.getElementById("beauty_image")
	x.src="/home/shangguan/Pictures/25648291_19.jpg";
	x.width="309";
	x.height="500";
}

function Deal_digit()
{
	var x=document.getElementById('demo_2').value;
	if(x=="" || isNaN(x))
	{
		alert("NOT Numeric")
	}
	else
	{
		alert("YES!")
	}
}

function error_catch()
{
	try
	{
		var x=document.getElementById("demo_4").value;
		if (x=='') throw "empty";
		else if(isNaN(x)) throw "NOT Numeric";
		else if(x>10) throw "too big!"
		else if(x<5) throw 'too small!'
		else alert('Right Input!')
	}
	catch(err)
	{
		var y=document.getElementById("mess");
		y.innerHTML="错误：" + err + "。";
	}
}

function change_element_content()
{
	x=document.getElementById('demo_change_content');
	x.innerHTML="JavaScript has changed my content!"
}

function change_attribute_color()
{
	x=document.getElementById('demo_attribute_color').style
	x.color="red";
}

function change_bulbon_off_and_on()
{
	element=document.getElementById('bulbon_image')
	if(element.src.match('bulbon'))
	{
		element.src='pic_bulboff.gif'
	}
	else
	{
		element.src='pic_bulbon.gif'
	}
}

function validate_form(thisform)
{
	with(thisform)
	{
		if(validate_email(email,"Not a valid e-mail address!")==false)
		{
			email.focus();
			return false;
		}
	}
}

function validate_email(field,alerttxt)
{
	with(field)
	{
		apos=value.indexOf("@")
		dotpos=value.lastIndexOf(".")
		if(apos<1||dotpos-apos<2)
		{
			alert(alerttxt);
			return false;
		}
		else
		{
			return true;
		}
	}
}

function toUpperCase_leave()
{
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}

function mouseOver(obj)
{
	obj.innerHTML="Thanks a lot!";
}

function mouseOut(obj)
{
	obj.innerHTML='put your mouse on this area!';
}

function mouseDown(obj)
{
	obj.style.backgroundColor='#FF0000';
	obj.innerHTML='please release your mouse!'
}

function mouseUp(obj)
{
	obj.style.backgroundColor="#FF00FF";
	obj.innerHTML="please press your mouse!";
}

function input_color_change(obj)
{
	obj.style.background='pink';
}

function onMouseOver(obj)
{
	var x=obj.style
	x.color='red';
	x.fontSize='49px';
}

function onMouseOut(obj)
{
	var x=obj.style
	x.color='violet';
	x.fontSize='32px';
	x.fontWeight='bold';
}


function delElement()
{
	var parent=document.getElementById('del_element');
	var child=document.getElementById("del_p_element");
	parent.removeChild(child);
}

function hideShowElement()
{
	var x=document.getElementById('element_hidden').style.visibility
	if(x=="hidden")
	{
		x='visible';
	}
	else
	{
		x='hidden';
	}
	document.getElementById('element_hidden').style.visibility=x
}


/*
function create_javascript_obj()
{
	person=new Object();
	person.firstname='Bill';
	person.lastname='Gates';
	person.age=56;
	person.eyecolor='blue';
	document.write(person.firstname + " is " + person.age + "years old");

	person={
		firstname:"Bill",
		lastname: "Gates",
		age:56,
		eyecolor:"blue"
	document.write(person.firstname + " is " + person.age + "years old");
	}
}

function person(firstname, lastname, age, eyecolor)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
}
myFather=new person("Bill", "Gates", 56, 'blue');
document.write(myFather.firstname + " is " + myFather.age + " years old.");
this.changeName=changeName;
function changeName(name)
{
	this.lastname=name;
}
myMother=new person("Steve","Jobs",56,"green")
myMother.changeName('Ballmer');
document.write(myMother.lastname);
*/
function javascript_for_in()
{
	var x;
	var txt='';
	var person_obj={
		fname:"Bill",
		lname:"Gates",
		age:56
	};
	for (x in person_obj)
	{
		txt=txt + " " + person_obj[x];
	}
	document.getElementById("id_javascript_for_in").innerHTML=txt;
}

function startTime()
{
	var today=new Date()
	var hour=today.getHours()
	var minute=today.getMinutes()
	var second=today.getSeconds()

	minute=checkTime(minute) // add a zero in front of numbers<10
	second=checkTime(second)
	document.getElementById('show_time_clock').innerHTML=hour+":"+minute+":"+second
	t = setTimeout('startTime()', 100)
}

function checkTime(i)
{
	if (i<10)
	{
		i = '0' + i
	}
	return i
}

function re_g()
{
	var patt1=new RegExp("e","g");
	do
	{
	result=patt1.exec("The best things in life are free");
	document.write(result);
	}
	while (result!=null) 	
}

function broswer_width_height()
{
	var w=window.innerWidth
	||	document.documentElement.clientWidth
	||	document.body.clientWidth;

	var h=window.innerHeight
	||	document.documentElement.clientHeight
	||	document.body.clientHeight

	x=document.getElementById("demo");
	x.innerHTML="浏览器的内部窗口宽度：" + w + "，高度：" + h + "。"
	return w, h
}

function newDoc_1()
{
	window.location.assign("https://www.baidu.com")
}

function newDoc_2()
{
	window.location.assign("https://www.sina.com")
}

function goBackBroswer()
{
	window.history.back()
}

function goForwardBroswer()
{
	window.history.forward()
}

function show_confirm()
{
	var r=confirm("Press a button!");
	if (r==true)
	{
		alert("You press OK!");
	}
	else
	{
		alert("You press Cancel!")
	}
}

function disp_prompt()
{
	var name=prompt("please input your name:", 'Bill Gates')
	if(name!=null && name!="")
	{
		document.write("Hello! " + name + " How is going today?")
	}
}

function timed_alert()
{
	var t=setTimeout("alert('这个框是1 秒才后显示的！')", 1000)
}

var timed_count_1s=0
var delay_time
function timedCount()
{
	document.getElementById('timed_count_unlimited').value = timed_count_1s + 's';
	timed_count_1s = timed_count_1s + 1;
	delay_time = setTimeout("timedCount()",1000)
}
/*
setTimeout() 方法会返回某个值。在上面的语句中，值被储存在名为 t 的变量中。假如你希望取消这个 setTimeout()，你可以使用这个变量名来指定它。
setTimeout() 的第一个参数是含有 JavaScript 语句的字符串。这个语句可能诸如 "alert('5 seconds!')"，或者对函数的调用，诸如 alertMsg()"。
第二个参数指示从当前起多少毫秒后执行第一个参数。
*/
function stopTimeCount()
{
	timed_count_1s = 0;
	setTimeout("document.getElementById('timed_count_unlimited').value=0", 0)
	clearTimeout(delay_time) // 取消这个 setTimeout(),用这个delay_time来指定它
}

function getCookie(c_name)
{
	if (document.cookie.length>0)
	{ 
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1 
			c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
			return unescape(document.cookie.substring(c_start,c_end))
		} 
	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie=c_name+ "=" +escape(value)+
					((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
	console.log(document.cookie)  //output the cookie to console
}

/*
function checkCookiesEnable()
{
	if(navigator.cookieEnable==true)
	{
		alert('已启用 cookie')
	}
	else
	{
		alert("未启用 cookie")
	}
}
*/

function checkCookieExist()
{
	username=getCookie('username')
	if (username!=null && username!="")
  	{
  		alert('Welcome again '+username+'!')
  	}
	else 
  	{
  		username=prompt('Please enter your name:',"")
  		if (username!=null && username!="")
   		{
   			console.log(username)  // write to the console(press F12 to see!)
   			setCookie('username',username,365)
   		}
	}
}
