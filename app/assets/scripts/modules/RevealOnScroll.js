import throttle from 'lodash/throttle'; //vid50
import debounce from 'lodash/debounce'; //vid51

class RevealOnScroll {
	constructor(els, thresholdPercent) {
		this.thresholdPercent = thresholdPercent;
		this.itemsToReveal = els; //document.querySelectorAll('.feature-item'); vid51 12.20
		this.browserHeight = window.innerHeight;
		this.hideInitially();
		this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
		this.events();
	}

	events() {
		window.addEventListener('scroll', this.scrollThrottle);
		window.addEventListener(
			'resize',
			debounce(() => {
				console.log('resized');
				this.browserHeight = window.innerHeight;
			}, 333)
		);
	}

	calcCaller() {
		console.log('scroll func ran');
		this.itemsToReveal.forEach((el) => {
			if (el.isRevealed == false) {
				this.calculateIfScrolledTo(el);
			}
		});
	}

	calculateIfScrolledTo(el) {
		if (
			window.scrollY + this.browserHeight >
			el.offsetTop /* kollar om elementets topp är på skärmen */
		) {
			console.log('element was calculated');
			let scrollPercent =
				(el.getBoundingClientRect().y / this.browserHeight) * 100;
			if (scrollPercent < this.thresholdPercent) {
				el.classList.add('reveal-item--is-visible');
				el.isRevealed = true;
				if (el.isLastItem) {
					window.removeEventListener('scroll', this.scrollThrottle);
				}
			}
		}
	}

	hideInitially() {
		this.itemsToReveal.forEach((el) => {
			el.classList.add('reveal-item');
			el.isRevealed = false;
		});
		this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
	}
}

export default RevealOnScroll;
