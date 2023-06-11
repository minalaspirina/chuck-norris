let loadJokeButton = document.querySelector(".loadJokeButton");
let form = document.querySelector("#chuckForm");

let categories = [
"animal",
"career",
"celebrity",
"dev",
"explicit",
"fashion",
"food",
"history",
"money",
"movie",
"music",
	"political",
"religion",
"science",
	"sport",
"travel",
];

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let currentCategory = document.querySelector("select[name=chuckTypes]").value;
	
	let url = "https://api.chucknorris.io/jokes/random";

	if (currentCategory != "") {
		url += `?category=${currentCategory}`;
	}

	function thenCallback(response) {

		if (response.status === 200) {
			return response.json();
		}
	}

	function catchCallback(error) {
		console.log(error);
	}

	function finalCallback(data) {
	
		//data.categories = currentCategory;
		console.log(data);
		document.querySelector(".chuckString").innerHTML = data.value;

		let myLink = document.querySelector("#chuckLink");

		myLink.href = data.url;
		myLink.innerHTML = data.url;
	}

	fetch(url).then(thenCallback).then(finalCallback).catch(catchCallback);
});


let copyButton = document.querySelector(".copyButton");

copyButton.addEventListener("click", function (e) {
	e.preventDefault();
	// Costruisce il paragrafo
	let paragraph = document.querySelector("p");
	let el = document.createElement("textarea");
	
	el.value = paragraph.textContent;
	
	el.style.position = "absolute";
	el.style.left = "-9999px";
	
	document.body.appendChild(el);
	
	el.select();
	
	document.execCommand("copy");
	
	document.body.removeChild(el);
});
