function Time() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var time2 = h + m + s;

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;


    document.getElementById("container").innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(Time, 1000);

}


//document.body.style.backgroundColor="red";


Time();


var currentColor = "blue";

setInterval(function(){
	
	document.body.style.backgroundColor = currentColor;
	
	currentColor = currentColor === "blue" ? "green" : "blue";
}, 5000);






// var x;

// function changeColors(){
// 	x = 1;
// 	setInterval(change, 1000);
// }

// function change(){
// 	if (x === 1){
// 		color = "red";
// 		x = 2;
// 	} else {
// 		color = "green";
// 		x = 1;
// 	}


// document.body.style.background = color;

// }