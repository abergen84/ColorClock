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


var currentColor = "#9B0BEF";

setInterval(function(){
	
	document.body.style.backgroundColor = currentColor;
	
	currentColor = currentColor === "#9B0BEF" ? "#6C09A5" : "#9B0BEF";
}, 5000);



div.textContent = time2.join(":");

        body.style['background-color'] =
            "rgb(" +
            convertTimeToRGB(time2).join(',') +
            ")";



function convertTimeToRGB(times) {

        var ranges = [24, 60, 60],
            result = [];

        times.forEach(function(time, index) {
            result[index] = ~~ (time / ranges[index] * 255);
        });

        return result;
    }



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