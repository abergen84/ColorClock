function Time(){

	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	if (h < 10) h = "0" + h;
	if (m < 10) m = "0" + m;
	if (s < 10) s = "0" + s;

//m = checkTime(m);
//s = checkTime(s);

	document.getElementById("container").innerHTML = h + ":" + m + ":" + s;

	var t = setTimeout(Time,1000);



//function checkTime(i) {
//   if (i<10) {i = "0" + i};
//   return i;


}


Time();

