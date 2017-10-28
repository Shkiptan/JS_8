// Задание. Разработайте скрипт, который получает из input введенный url адрес. 
//Адрес обрабатывается таким образом, что введенные имена приводятся к виду:
//     Ввели
// 	   •    http://primer.ua
//     •	http://www.primer.ua
//     •	https://primer.ua
//     Получили: primer (удаляются протоколы и локальные зоны)
// Затем введенная строка обрабатывается по правилам:
//     •	все символы о или О заменяются на 0 (нуль)
// •	l заменяются на единицу (символ эль на единицу)
// •	все символы «i» заменяются на 3
// •	все буквы s заменяются на 5
// •	к результирующей строке добавляется случайный набор из 4-х символов.
//     Результат – выводится на экран.


$ (document).ready (function () {

	$ ('#ok').on ('click', function chikUrl (){

		var adress = $('#adress').val ();
		


		if ( ~ adress.indexOf("http://")) {
			if (~ adress.indexOf ("www.")) { 
			adress = adress.slice (11);
		}
			else {
			adress = adress.slice (7);
		}
	}
		else if ( ~ adress.indexOf("https://")) {
			if (~ adress.indexOf("https://www.")) {
			adress = adress.slice (12);
	}
			else { adress = adress.slice (8);
		}
	}
		else if ( ~ adress.indexOf("www.")) {
		adress = adress.slice (4);
	}

	adress = adress.substr (0, adress.indexOf('.'));
	

	adress = adress.replace('o', '0');
    adress = adress.replace('O', '0');
    adress = adress.replace('l', '1');
    adress = adress.replace('i', '3');
    adress = adress.replace('s', '5');

    

    adress = adress.concat(randAbc());

    $('#out').text(adress);

});
	
	function randAbc(){ 
  		var s ='', abd ='abcdefghijklmnopqrstuvwxyz0123456789', aL = abd.length;
 		 while(s.length < 4)
    	s += abd[Math.random() * aL|0];
  		return s;
} 
});


