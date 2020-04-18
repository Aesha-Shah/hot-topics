let navItems = document.querySelectorAll('.nav');
let container = document.querySelector(".container");

let url = "./partials/home.html";

function changePage(e) {
	e.preventDefault();
	let clickedLink = e.target;
	url = clickedLink.href;
	handleAjax();
}

for (let navItem of navItems) {
	navItem.addEventListener("click", changePage);
}

function handleAjax() {
	fetch(url)
		.then(function (rsp) {
			return rsp.text();
		})
		.then(function (data) {
			container.innerHTML = data;
		});
}

console.log(navItems);

handleAjax();
