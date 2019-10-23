document.addEventListener("DOMContentLoaded", function() {
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	//console.log(nut);
	//nut tra ve 1 mang nut.
	
	//bat su kien click cho tung nut:
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click', function() {
			// console.log(this)
			// bo tat ca mau den o nut di.
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('dangkichhoat');
			}
			// chuyen nut bi click thanh mau den.
			this.classList.add('dangkichhoat');
			// het phan xu ly chuyen mau nut.

			// xu ly phan tinh vi tri.

			// gan' phan tu dang click vao bien nutkichhoat.
			var nutkichhoat = this;
			//khai bao 1 bien de luu vi tri.
			var vitrinut = 0;
			//dung vong for để gán nút đang đc click quay ngược lại về null, vòng for dừng và trả về giá trị vitrinut.
			//tức cứ sau mỗi vòng for thì nutkichhoat sẽ lùi trở lại 1 cho đến khi = null thì dừng lại.
			for (var vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
				//console.log("bien i: " + i);
				//console.log("phan tu nut kich hoat la: " + nutkichhoat);
			}

			// sau khi tim duoc vi tri nut dang kich hoat thi cho an cac slide di.
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('duockichhoat');

				//roi cho slide o vi tri tuong ung voi nut hien thi ra.
				slides[vitrinut].classList.add('duockichhoat');
			}

		})
	}// Het su kien nut

	// viet ham autoslide

	autosl();

	function autosl() {
		var thoigian = setInterval( function() {
		var vitrislidehientai = 0;
		var slidehientai = document.querySelector('.cacslide ul li.duockichhoat');
		//tinh xem dang o slide nao.
		for (var vitrislidehientai = 0;slidehientai = slidehientai.previousElementSibling; vitrislidehientai++) {	}
		//neu chua den lide cuoi tuc la vitrislidehientai <= slides.length.
		//dieu kien thuc hien binh thuong
		if (vitrislidehientai<(slides.length-1)) {
			//cho an tat ca slide di
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('duockichhoat');
				nut[i].classList.remove('dangkichhoat');

			}
			slides[vitrislidehientai].nextElementSibling.classList.add('duockichhoat');
			nut[vitrislidehientai].nextElementSibling.classList.add('dangkichhoat');
		}
		//khi vuot qua' thi cho ve ptu thu 0.
		else {
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('duockichhoat');
				nut[i].classList.remove('dangkichhoat');

			}
			slides[0].classList.add('duockichhoat');
			nut[0].classList.add('dangkichhoat');
		}
		
	}, 5000)
	}

})