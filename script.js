var scheck=false;
function toggle(parametr) {
	document.getElementsByClassName('mnulvl')[0].style.transition = 'all 0.4s ease';
	document.getElementsByClassName('mnulvl')[1].style.transition = 'all 0.4s ease';
	if (parametr===true) {
		document.getElementsByClassName('mnulvl')[0].style.width = '60px';
		document.getElementsByClassName('mnulvl')[0].style.background = '#1E242A';
		document.getElementsByClassName('mnulvl')[1].style.width = '180px';	
		document.getElementsByName('section-name')[0].style.color = 'transparent';
		document.getElementsByName('section-name')[1].style.color = 'transparent';
	} else {
		document.getElementsByClassName('mnulvl')[0].style.width = '240px';
		document.getElementsByClassName('mnulvl')[0].style.background = '#333D47';
		document.getElementsByClassName('mnulvl')[1].style.width = '0px';
		document.getElementsByName('section-name')[0].style.color = 'inherit';
		document.getElementsByName('section-name')[1].style.color = 'inherit';
	}
}

function check(menu, label) {
	switch(menu) {
		case 1: 
			toggle(false);
			scheck=false;
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		case 2:
			toggle(true);
			scheck=true;
			document.getElementsByClassName('cont-menu')[0].style.display = 'block';
			document.getElementsByClassName('cont-menu')[1].style.display = 'none';
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		case 3:
			toggle(true);
			scheck=true;
			document.getElementsByClassName('cont-menu')[1].style.display = 'block';
			document.getElementsByClassName('cont-menu')[0].style.display = 'none';
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		case 2.1: case 2.2: case 2.3: 
		case 3.1: case 3.2: case 3.3:
			document.getElementsByTagName('h1')[0].innerHTML = label;
			break;
		default:
			if (scheck===true) {toggle(true);}; 
	}
}


function another(im) {
	switch(im) {
		case 2.1:
			document.getElementById('elem2.1').checked = 'true';
			document.getElementById('pic').src = 'images/users.jpg';
			break;
		case 2.2:
			document.getElementById('pic').src = 'images/groups.jpg';
			break;
		case 2.3:
			document.getElementById('pic').src = 'images/roles.jpg';
			break;
		case 3.1:
			document.getElementById('elem3.1').checked = 'true';
			document.getElementById('pic').src = 'images/documents.jpg';
			break;
		case 3.2:
			document.getElementById('pic').src = 'images/workspaces.jpg';
			break;
		case 3.3:
			document.getElementById('pic').src = 'images/trash.jpg';
			break;
		default: return;
	}
}
// ========================================== LAYOUT POSITION ==========================================

function hide(act) {
	if (window.innerWidth > 1024) {
		switch(act) {
			// OPEN LEFT SIDEBAR
			case 1.1:
				document.getElementsByClassName('side-menu')[0].style.width = '0';
				document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
				document.getElementsByClassName('burger')[0].style.display = 'block';
				break;
			// CLOSE LEFT SIDEBAR
			case 1.2:
				document.getElementsByClassName('side-menu')[0].style.width = '240px';
				document.getElementsByClassName('main-wrapper')[0].style.padding = '0 0 0 240px';
				document.getElementsByClassName('burger')[0].style.display = 'none';
				break;
			// OPEN RIGHT SIDEBAR
			case 2.1:
				document.getElementById('right-side').style.width = '0';
				document.getElementById('content').style.marginRight = '30px';
				document.getElementsByClassName('burger')[1].style.display = 'block';
				break;
			// CLOSE LEFT SIDEBAR
			case 2.2:
				document.getElementById('right-side').style.width = '300px';
				document.getElementById('content').style.marginRight = '330px';
				document.getElementsByClassName('burger')[1].style.display = 'none';
				break;
			default: return;
		}
	}
	else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
		switch(act) {
			case 1.1:
				document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
				document.getElementsByClassName('side-menu')[0].style.width = '0';
				document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
				document.getElementsByClassName('burger')[0].style.display = 'block';
				break;
			case 1.2:
				document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper clicked';
				document.getElementsByClassName('side-menu')[0].style.width = '240px';
				document.getElementsByClassName('main-wrapper')[0].style.padding = '0 0 0 0';
				document.getElementsByClassName('burger')[0].style.display = 'none';
				break;
			case 2.1:
				document.getElementById('right-side').style.width = '0';
				document.getElementById('content').style.marginRight = '20px';
				document.getElementsByClassName('burger')[1].style.display = 'block';
				break;
			case 2.2:
				document.getElementById('right-side').style.width = '300px';
				document.getElementById('content').style.marginRight = '320px';
				document.getElementsByClassName('burger')[1].style.display = 'none';
				break;
			default: return;
		}	
	}
	else if (window.innerWidth <= 768) {
		switch(act) {
			case 1.1:
				document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
				document.getElementsByClassName('side-menu')[0].style.width = '0';
				document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
				document.getElementsByClassName('burger')[0].style.display = 'block';
				break;
			case 1.2:
				document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper clicked';
				document.getElementsByClassName('side-menu')[0].style.width = '240px';
				document.getElementsByClassName('main-wrapper')[0].style.padding = '0 0 0 0';
				document.getElementsByClassName('burger')[0].style.display = 'none';
				// CLOSE RIGHT SIDEBAR
				document.getElementById('right-side').style.width = '0';
				document.getElementById('content').style.marginRight = '10px';
				document.getElementsByClassName('burger')[1].style.display = 'block';
				break;
			case 2.1:
				document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
				document.getElementById('right-side').style.width = '0';
				document.getElementById('content').style.marginRight = '10px';
				document.getElementsByClassName('burger')[1].style.display = 'block';
				break;
			case 2.2:
				document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper clicked';
				document.getElementById('right-side').style.width = '300px';
				//document.getElementById('content').style.marginRight = '330px';
				document.getElementsByClassName('burger')[1].style.display = 'none';
				break;
			default: return;
		}	
	}
}

window.onresize = (e) => {
	if (window.innerWidth < 768) {
		document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
		document.getElementsByClassName('side-menu')[0].style.width = '0';
		document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
		document.getElementsByClassName('burger')[0].style.display = 'block';
		document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
		document.getElementById('right-side').style.width = '0';
		document.getElementById('content').style.marginRight = '10px';
		document.getElementsByClassName('burger')[1].style.display = 'block';
	}
	else if (window.innerWidth < 1024) {
		document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
		document.getElementsByClassName('side-menu')[0].style.width = '0';
		document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
		document.getElementsByClassName('burger')[0].style.display = 'block';
	}
}

if (window.innerWidth < 768) {
	document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
	document.getElementsByClassName('side-menu')[0].style.width = '0';
	document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
	document.getElementsByClassName('burger')[0].style.display = 'block';
	document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
	document.getElementById('right-side').style.width = '0';
	document.getElementById('content').style.marginRight = '10px';
	document.getElementsByClassName('burger')[1].style.display = 'block';
}
else if (window.innerWidth < 1024) {
	document.getElementsByClassName('main-wrapper')[0].className = 'main-wrapper';
	document.getElementsByClassName('side-menu')[0].style.width = '0';
	document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
	document.getElementsByClassName('burger')[0].style.display = 'block';
}














