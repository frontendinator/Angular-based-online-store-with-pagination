function bigpictur(event) {
	var overlay = document.getElementById("foroverlay");
	overlay.style.display = "block";
	t = event.target||event.srcElement;
	var bigpicture = document.getElementById("bigpicture-bk");
	bigpicture.style.display = "block";
	bigpicture.innerHTML = "<img src=\"" + t.src + "\"</img>";
	var addcloseImage = document.createElement("IMG");
	addcloseImage.src = "bcimages/closebutton.png";
	addcloseImage.style.cursor = 'pointer';
	addcloseImage.style.width = '30px';
	addcloseImage.style.position = 'relative';
	addcloseImage.style.bottom = '309px';
	bigpicture.appendChild(addcloseImage);
	addcloseImage.onclick = function closebp() {
		overlay.style.display = "none";
		bigpicture.style.display = "none";
	};
};

document.addEventListener('load', bigpictur);

function removeoverlay() {
	var overlay = document.getElementById("foroverlay");
	overlay.style.display = "none";
	var removepicture = document.getElementById("bigpicture-bk");
	removepicture.style.display = "none";
};

document.addEventListener('load', removeoverlay);
