let navbar = document.querySelector('nav');
let prevScrollpos = window.pageYOffset;
let width = screen.width;
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementsByTagName("nav")[0].style.top = "0";
		if (width > 700) {
			if(window.pageYOffset > 0){
				navbar.classList.add('scrolled');
			} else if(window.pageYOffset <= 0) {
				navbar.classList.remove('scrolled');
			}
		} else {
			navbar.classList.add('scrolled');
		}
		
	} else {
		if( width <= 700){
			if (navbar.classList.contains("responsive") && !navbar.classList.contains("scrolled")) {
				navbar.classList.add('scrolled');
			}
		} else {
			navbar.classList.remove('scrolled');
			document.getElementsByTagName("nav")[0].style.top = "-50px";
		}
	}
	prevScrollpos = currentScrollPos;
}

function showNav(){
	if(navbar.classList.contains("responsive")){
		navbar.classList.remove('responsive');
	} else {
		navbar.classList.add('responsive');
		navbar.classList.add('scrolled');
	}
}

function viewProfile(){
	document.location = '#about';
	return false;
}

// Modal Section



function openModal(modalName){
	let modal = document.getElementById(modalName);
	let span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

