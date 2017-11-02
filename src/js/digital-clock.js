'use strict'

let loopNumbers = () => {
	let clock = document.querySelector('.digital-clock');
	let i = 9,

	delayLoop = function() {
		if ( i >= 0 ) {
			if ( i <= 6 && i > 3 ) {
				clock.style.color = "green";
			} 
			else if ( i <= 3 && i > 0 ) {
				clock.style.color = "orange";
			}
			else if ( i == 0 ) {
				clock.style.color = "red";
			}

			clock.innerHTML = i;

			i--;
			setTimeout(delayLoop, 1000);
		}
	};
	setTimeout(delayLoop, 1000);
}
loopNumbers();
