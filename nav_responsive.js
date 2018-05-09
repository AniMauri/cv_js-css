var button = document.getElementById("icon_hamburger");
var link = document.getElementById("menu_links");
var menu = document.getElementById("responsive_menu");

function displayOk() {
	$("#responsive_menu").fadeIn(200);
	menu.style.display = "block";
	menu.style.position = "fixed";
	menu.style.zIndex = "1500";
	menu.style.width = "35%";
	menu.style.height = "2000px";
}

function displayNone() {
	$("#responsive_menu").fadeOut(200);
	//menu.style.display = "none";
}

button.addEventListener("click", displayOk);
link.addEventListener("click", displayNone);