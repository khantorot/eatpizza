loadPage()

function loadPage(){
	const product_container = document.querySelector('.product_container');
	const total_count = document.querySelector('.total_count');
	const catolog_content = document.querySelector('.catolog_content');
	// const food_content = document.querySelector('.food_content');
	// const catolog = document.querySelector('.catolog');
	// const menu_btn = document.querySelector('.menu_btn');
	// const menu = document.querySelector('.menu');

	// countGoods(total_count);
	// loadGoods(food_content, data, 'popular');
	// new Glide(".glide_catolog", config_catolog).mount();
	// new Glide(".glide_banner", config_banner).mount();

	if (localStorage.getItem('good_group') != null)
		good_group = JSON.parse(localStorage.getItem('good_group'));
	else
		good_group = 'popular';

	loadGoods(product_container, data, good_group);
	countGoods(total_count);
	choosenCatologElem(good_group);

	product_container.addEventListener("click", tuneCart);
	catolog_content.addEventListener('click', getGroup);

	// food_content.addEventListener('click', tuneCart);
	// catolog.addEventListener('click', getGroup);
	// menu_btn.addEventListener('click', showMenu);
	// menu.addEventListener('click', getGroup);
	window.addEventListener('load', hidePreloader);

	new Glide(".glide_banner", config_banner).mount();
}


function getGroup(e) {
	if (e.target.classList.contains('catolog_elem')) {
		let name = e.target.getAttribute('data-name');

		localStorage.setItem('good_group', JSON.stringify(name));
		
		document.querySelectorAll('.catolog_list .catolog_elem').forEach(element => {
			if (element.getAttribute('data-name') == name) {
				document.querySelector('.product_title').innerHTML = element.innerHTML;
			}
		});
		loadPage();
	}
}

function choosenCatologElem(group) {
	const catolog_elem = document.querySelectorAll('.catolog_elem');

	catolog_elem.forEach(element => {
		if(element.dataset.name == group)
			element.classList.add('choosen_catolog_elem');
		else
			element.classList.remove('choosen_catolog_elem');
	});
}