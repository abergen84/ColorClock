function Time(){

	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}


document.getElementbyId("container").innerHTML = h + ":" + m ":" + s;

	var t = setTimeout(Time,1000);

}

Time();

