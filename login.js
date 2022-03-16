window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	var Ausername = document.forms["myLogin"]["username"];
	var Apassword = document.forms["myLogin"]["password"];

	if(username != Ausername.value){
		alert("Your username or password is WRONG !!!");
		return false;
	}
	else if(password != Apassword.value){
		alert("Your username or password is WRONG !!!");
		return false;
	}
	else{alert("LOG IN SUCCESS!!!")}
}