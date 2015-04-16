var ready;
ready = function() {
		var i;
		var barInfoContent = document.getElementsByClassName("content-type");
		var nTabs = document.getElementById("nav-tabs").getElementsByTagName("li");
		for(i = 0; i < nTabs.length; i++) {
		nTabs[i].style.background = "darkgray";
		nTabs[i].style.color = "black";
		nTabs[0].style.background = "#5D5D5D";
		nTabs[0].style.color = "lightblue";
		}
		for (i = 0; i < barInfoContent.length; i++) {
		barInfoContent[i].style.display = "none";
		barInfoContent[0].style.display = "block";
		}

};

$(document).ready(ready);
$(document).on('page:load', ready);

		var i;
		var barInfoContent = document.getElementsByClassName("content-type");
		for(i = 0; i< barInfoContent.length; i++){
		var musicContent = barInfoContent[0];
		var gamesContent = barInfoContent[1];
		var drinksContent = barInfoContent[2];
		}
		for(i = 0; i< nTabs.length; i++){
		var nTabs = document.getElementById("nav-tabs").getElementsByTagName("li");
		var musicTab = nTabs[0];
		var gamesTab = nTabs[1];
		var drinksTab = nTabs[2];
		}
	musicTab.addEventListener("click", function(){
	for(i = 0; i < nTabs.length; i++) {
		nTabs[i].style.background = "darkgray";
		nTabs[i].style.color = "black";
		nTabs[0].style.background = "#5D5D5D";
		nTabs[0].style.color = "lightblue";
		}
		for (i = 0; i < barInfoContent.length; i++) {
		barInfoContent[i].style.display = "none";
		barInfoContent[0].style.display = "block";
		}
})

	gamesTab.addEventListener("click", function(){
	for(i = 0; i < nTabs.length; i++) {
		nTabs[i].style.background = "darkgray";
		nTabs[i].style.color = "black";
		nTabs[1].style.background = "#5D5D5D";
		nTabs[1].style.color = "lightblue";
		}
		for (i = 0; i < barInfoContent.length; i++) {
		barInfoContent[i].style.display = "none";
		barInfoContent[1].style.display = "block";
		}
})

drinksTab.addEventListener("click", function(){
	for(i = 0; i < nTabs.length; i++) {
		nTabs[i].style.background = "darkgray";
		nTabs[i].style.color = "black";
		nTabs[2].style.background = "#5D5D5D";
		nTabs[2].style.color = "lightblue";
		}
		for (i = 0; i < barInfoContent.length; i++) {
		barInfoContent[i].style.display = "none";
		barInfoContent[2].style.display = "block";
		}
});
