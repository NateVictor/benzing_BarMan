function parallax(){
	var handPhone = document.getElementById('hand-phone');
	var pgYPos = window.pageYOffset;
	handPhone.style.bottom = (-70 + (window.pageYOffset/1.75)) +'%';
	handPhone.style.right = (-35 + 10*(Math.log(window.pageYOffset))) + '%';
	if (pgYPos >= 115.5){
		handPhone.style.bottom = - 0.75 + "%";
		handPhone.style.right = 24 + "%";
		window.removeEventListener("scroll", parallax, false);
	}
}
window.addEventListener("scroll", parallax, false);
