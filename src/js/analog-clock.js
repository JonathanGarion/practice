console.log("clock.js");

setInterval(function(){
	var date = new Date();
	showTime(date);
	turnHands(date);
}, 1000);

function showTime(date) {
	var clock = document.querySelector('.timer');
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	clock.innerHTML = time;
}

function turnHands(date) {
	var secHand = document.querySelector('.clock__hand--second');
	var minHand = document.querySelector('.clock__hand--minute');
	var hrHand = document.querySelector('.clock__hand--hour');
	secHand.style.transform = "translate(-50%, -100%)" + " rotate(" + date.getSeconds() * 6 + "deg)";
	minHand.style.transform = "translate(-50%, -100%)" + "rotate(" + date.getMinutes() * 6 + "deg)";
	hrHand.style.transform = "translate(-50%, -100%)" + "rotate(" + date.getHours() * 30 + "deg)";
}



