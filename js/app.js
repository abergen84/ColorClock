var x = document.getElementbyId("container");
x.style.color = "blue";


var d = new Date(),
	interval = 1000;

var id = setInterval(function() {
	
	d.setTime(d.getTime() + interval);
	
	console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

}, interval);


