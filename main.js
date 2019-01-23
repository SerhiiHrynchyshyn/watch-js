let getId = function (a) {
	return document.getElementById(a);
}

window.onload = function () {
	setInterval(fSec, 1000);
	let sec = 0;
	let min = 0;
	let hour = 0;

	function fSec() {
		document.getElementById('sec').style.transform = 'rotate(' + sec + 'deg)';
		document.getElementById('min').style.transform = 'rotate(' + min + 'deg)';
		document.getElementById('hour').style.transform = 'rotate(' + hour + 'deg)';
		if (sec + 6 == 366) {
			sec = 0;
			min += 6;
			hour += 0.5;
		}
		sec += 6;
	}
}