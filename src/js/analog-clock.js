'use strict';

setInterval(function(){
	let date = new Date();
	showTime(date);
	turnHands(date);
	showQuote(date);
}, 1000);

let showTime = (date) => {
	let clock = document.querySelector('.timer');
	let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	clock.innerHTML = time;
}

let turnHands = (date) => {
	let secHand = document.querySelector('.clock__hand--second');
	let minHand = document.querySelector('.clock__hand--minute');
	let hrHand = document.querySelector('.clock__hand--hour');
	secHand.style.transform = "translate(-50%, -100%)" + " rotate(" + date.getSeconds() * 6 + "deg)";
	minHand.style.transform = "translate(-50%, -100%)" + "rotate(" + ((date.getMinutes() * 6) + (date.getSeconds() * 0.1)) + "deg)";
	hrHand.style.transform = "translate(-50%, -100%)" + "rotate(" + ((date.getHours() * 30) + (date.getMinutes() * 0.5) + (date.getSeconds() * (30 / 3600))) + "deg)";
}

let randomizeQuote = () => {
	quoteElement.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
}

let showQuote = (date) => {
	if ( date.getSeconds() === 0 && (date.getMinutes() === 0 || date.getMinutes() === 30) ) {
		randomizeQuote();
	}
}

let quoteElement = document.querySelector('.quote');
let quotes = [
	"Turning up the volume is like zooming in, but with sound",
	"Typo’s aren’t my biggest problem – Thinko’s are.",
	"Ever stop to think, and forget to start again?",
	"A hangover is the wrath of grapes.",
	"I Have a Degree in Liberal Arts; Do You Want Fries With That?",
	"A picture is worth a thousand words, but it uses up three thousand times the memory.",
	"Two wrongs don’t make a right, but three lefts do.",
	"In theory, theory is the same as practice, but not in practice.",
	"If everything seems to be going well, you have obviously overlooked something.",
	"Eagles may soar, but weasels don’t get sucked into jet engines.",
	"Monday is an awful way to spend 1/7th of your life.",
	"I don’t like spinach, and I’m glad I don’t, because if I liked it I’d eat it, and I just hate it.",
	"There has been an alarming increase in the number of things you know nothing about.",
	"I only changed one line and it was a comment…",
	"If it ain’t fix, don’t broke it!",
	"h",
	"Objects in mirror are closer than they appear.",
	"If God had intended Man to Smoke, He would have set him on Fire.",
	"Is the glass half empty, half full, or twice as large as it needs to be?",
	"I’d rather have a bottle in front of me than a frontal lobotomy"
];

randomizeQuote();
