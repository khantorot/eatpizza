loadPage()

function loadPage() {
	const product_container = document.querySelector('.product_container');
	const total_count = document.querySelector('.total_count');
	const catolog_content = document.querySelector('body');

	if (localStorage.getItem('good_group') != null)
		good_group = JSON.parse(localStorage.getItem('good_group'));
	else
		good_group = 'popular';

	document.querySelectorAll('.catolog_elem').forEach(element => {
		if (element.getAttribute('data-name') == good_group) {
			document.querySelector('.product_title').innerHTML = element.innerHTML;
		}
	});

	loadGoods(product_container, data, good_group);
	countGoods(total_count);
	choosenCatologElem(good_group);

	product_container.addEventListener("click", tuneCart);
	catolog_content.addEventListener('click', getGroup);
	window.addEventListener('load', hidePreloader);

	new Glide(".glide_banner", config_banner).mount();
}


function getGroup(e) {
	if (e.target.classList.contains('catolog_elem')) {
		let name = e.target.getAttribute('data-name');

		localStorage.setItem('good_group', JSON.stringify(name));
		loadPage();
	}
}

function choosenCatologElem(group) {
	const catolog_elem = document.querySelectorAll('.catolog_elem');

	catolog_elem.forEach(element => {
		if (element.dataset.name == group)
			element.classList.add('choosen_catolog_elem');
		else
			element.classList.remove('choosen_catolog_elem');
	});
}