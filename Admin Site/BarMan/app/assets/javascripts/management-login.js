 function loginWindowFunc(){
	var x = document.getElementById("management-signup-window");
	var x_2 = document.getElementById("event-overlay");
	x.style.display = "block";
	x_2.style.visibility = "visible";
};

function closeManagementLogin(){
	var x = document.getElementById("management-signup-window");
	var x_2 = document.getElementById("event-overlay");
	x.style.display = "none";
	x_2.style.visibility = "hidden";
}