document.addEventListener("DOMContentLoaded", function() {
	var khoangthoigiankhoi2dunglai = 1530 // gia tri px ma khoi tin thu 2 noi dung phai dung lai.
	var nuttimkiem = document.querySelector('.search');
	var otimkiem = document.querySelector(".otimkiem");
	var menudo = document.querySelector('.menu-top');
	var trangthaimenudo = 'duoi100';
	var khoitinngang = document.querySelector('.nd-trai-khoi-2-tren');
	var khoitinngangtrai = document.querySelector('.data-trai');
	var khoitinnganggiua = document.querySelector('.data-giua');
	var khoitinngangphai = document.querySelector('.data-phai');
	var vitritinngang = "chuakichhoat";
	var khoitinduoi = document.getElementsByClassName('nd-trai-khoi-2-duoi');
	var khoangcachtinngang = khoitinngang.offsetTop;
	//console.log(khoangcachtinngang);
	var khoi2dichuyen = document.querySelector('.nd-phai-khoi-2');
	var vitrindphaikhoi2 = khoi2dichuyen.offsetTop*2 - 1755;
	var diemdungkhoi2 = vitrindphaikhoi2 + khoangthoigiankhoi2dunglai;
	var trangthaikhoi2 = "chuakichhoat";
	//console.log(vitrindphaikhoi2);

	//khai bao phan hien xem chi tiet tin tuc
	var nenden = document.querySelector('.den');
	var thoatkhoitin = document.querySelector('.thoat-khoi-tin');
	var nutxemchitiet = document.getElementsByClassName('nut-xem-ct');
	//console.log(nutxemchitiet);
	var tintrongoden = document.getElementsByClassName('den-tin');
	//console.log(tintrongoden);

	// Viet ham thuc hien hien thi xem chi tiet tin tuc
	thoatkhoitin.onclick = function () {
		nenden.classList.remove('hienra');
		for (var i = 0; i < tintrongoden.length; i++) {
					tintrongoden[i].classList.remove('den-tin-hien-ra');
				}
	}
	

	for (var m = 0; m < nutxemchitiet.length; m++) {
		
			nutxemchitiet[m].onclick = function(){
				for (var i = 0; i < tintrongoden.length; i++) {
					tintrongoden[i].classList.remove('den-tin-hien-ra');
				}
				tinhienra = this.getAttribute("data-tin");
				//console.log(tinhienra);
				ndtinhienra = document.getElementById(tinhienra);
				//console.log(ndtinhienra);
				ndtinhienra.classList.add('den-tin-hien-ra');
				nenden.classList.add('hienra');
			}
	
		
	}

	nuttimkiem.onmouseover = function () {
		otimkiem.classList.add('hienotimkiemra');
	}
	nuttimkiem.onmouseout = function () {
		otimkiem.classList.remove('hienotimkiemra');
	}


	window.addEventListener('scroll', function() {

		// Lam menu theo cuon chuot.
		if (window.pageYOffset > 100) {
			if (trangthaimenudo == 'duoi100') {
				trangthaimenudo = 'tren100';
				menudo.classList.add("menuden");
			}
		}
		else if (window.pageYOffset < 100) {
			if (trangthaimenudo == 'tren100') {
				trangthaimenudo = 'duoi100';
				menudo.classList.remove("menuden");
			}
		}

		// Hieu ung load noi dung trai khoi 2 tren.
		if (window.pageYOffset > (khoangcachtinngang - 100)) {
			if (vitritinngang == "chuakichhoat") {
				vitritinngang = "dakichhoat";
				khoitinngangtrai.classList.add("tutraisang");
				khoitinnganggiua.classList.add("tutrenxuong");
				khoitinngangphai.classList.add("tuphaisang")
			}
			
		}
		else {
			vitritinngang = "chuakichhoat";
			khoitinngangtrai.classList.remove("tutraisang");
			khoitinnganggiua.classList.remove("tutrenxuong");
			khoitinngangphai.classList.remove("tuphaisang");
		};

		// Hieu ung load noi dung trai khoi 2 duoi.
		var khoangcachtinduoi = 0;
		for (var i = 0; i < khoitinduoi.length; i++) {
			khoangcachtinduoi = khoitinduoi[i].offsetTop;
			if (window.pageYOffset > (khoangcachtinduoi - 100)) {
				khoitinduoi[i].classList.add('tuduoilen');
			}
			else {
				khoitinduoi[i].classList.remove("tuduoilen");
			}
		}


		// hieu ung khoi 2 di theo.
		if ((window.pageYOffset > vitrindphaikhoi2) && (window.pageYOffset < diemdungkhoi2)) {
			if (trangthaikhoi2 == "chuakichhoat") {
				trangthaikhoi2 = "dakichhoat";
				khoi2dichuyen.classList.add("khoidichuyen");
			}
			
		}
		else if ((window.pageYOffset < vitrindphaikhoi2) || (window.pageYOffset > vitrindphaikhoi2)) {
			if (trangthaikhoi2 == "dakichhoat") {
				trangthaikhoi2 = "chuakichhoat";
				khoi2dichuyen.classList.remove("khoidichuyen");

			}
		}

	})


})