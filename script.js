function activeClock() {

	var currentTime = new Date ();
	var h = currentTime.getHours ();
	var m = currentTime.getMinutes ();
	var s = currentTime.getSeconds ();
	var t = setTimeout(activeClock,1000);
	var ampm = "AM"


	if (h == 0) {
		h = 12;
	} else if (h > 12){
		h = h - 12;
		ampm = "PM";
	}

	if (h < 10) {
		h = "0" + h
	}

	if (m < 10) {
		m = "0" + m
	}

	if (s < 10) {
		s = "0" + s
	}

var clockDisplay = document.getElementById('clock');
	clockDisplay.innerText = h + ":" + m + ":" + s + ampm;
}

activeClock()