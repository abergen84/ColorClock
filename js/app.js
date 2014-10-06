function Time(){

	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	document.getElementbyId("container").innerHTML = h + ":" + m ":" + s;

	var t = setTimeout(function(){
		Time()},1000);

}

Time();

