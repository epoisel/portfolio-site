
var modal = document.querySelector(".modal");
var img = document.querySelector(".picture");
var modalImg = document.querySelector(".modalContent");
var captionText = document.querySelector(".caption");

img.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
};



