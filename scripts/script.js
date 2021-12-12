const phil = function () {
	console.log ('hello')
};

const hamburger = document.getElementById("hamburger");

const navmenu = document.getElementById("dropdowntwo");


hamburger.addEventListener("click", function () {

	if (navmenu.className == 'closed') {
		navmenu.className = 'open'
	}

	else {navmenu.className = 'closed';}
})