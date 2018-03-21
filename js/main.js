"use strict";



window.onload = function () {
	alert ("Хочу обратить внимание проверяющего на то, что кнопка 'Удалить контакт' работает неисправно, при добавлении нового контакта - все удаленные вернутся.Так же хочу добавить, что ,до этого момента, на JS я никогда не писал, мой уровень - это подключение и настройка готовых плагинов, а так же написание простейших скриптов на Jquery(показать - скрыть блок и т.п.). При реализации этого задания я активно пользовался интернетом! На данный момент учу JS.");
	
	var contact = [];
	
	document.getElementById("add_contact").onclick = function () {
		var initial_n = document.getElementById("add_name").value.charAt(0);
		var initial_s = document.getElementById("add_surename").value.charAt(0);
		var name = document.getElementById("add_name").value;
		var sname = document.getElementById("add_surename").value;
		var phone = document.getElementById("add_phone").value;
		var contacttemp = {};
		contacttemp.name = name;
		contacttemp.sname = sname;
		contacttemp.phone = phone;
		contacttemp.initial_n = initial_n;
		contacttemp.initial_s = initial_s;
		var i = contact.length;
		contact[i] = contacttemp;
		out ();
		del ();
	};

	
	
	
	function out(){
		var out = "";
		for (var key in contact){
			out += '<div class="added_contacts_wrapper" ><div class="initial">' + '<span id="initial_name" >' + contact[key].initial_n + '</span>'  + '<span id="initial_surename" >' + contact[key].initial_s + '</span></div>' + '<span id="name" class="name">' + contact[key].name + '</span><span id="surename" class="surename">' + contact[key].sname + '</span>' + '<a href="tel:{% phone %}"><span class="phone">' + contact[key].phone + '</span></a>'  + '<button id="delet" class="delet" type="submit" >Удалить контакт</button></div>'; 
		};
		document.getElementById("added_contacts").innerHTML = out;
	};
	

	function del() {
		var a;
		var delet = document.getElementsByClassName("delet");
		for (a = 0; a<delet.length; a++) {
			delet[a].onclick = function () {
				var asd = this.parentElement;
				asd.remove();
			};
		};
	};
};