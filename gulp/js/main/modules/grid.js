const grid = {

	ui: {},

	init() {
		this.bindUI();
		this.bindEvents();
	},

	bindUI() {
		this.ui.grid = document.querySelector('.js-dev-grid');
		this.ui.btn  = document.querySelector('.js-dev-grid-btn');
	},

	bindEvents() {
		this.ui.btn.addEventListener('click', this.toggleGrid.bind(this));
	},

	toggleGrid() {
		this.ui.grid.classList.toggle('is-hidden');
	}

};

module.exports = grid;
