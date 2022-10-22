function create(words) {
	for (let word of words) {
		let div = document.createElement("div");
		let p = document.createElement("p");
		p.style.display = "none";
		p.textContent = word;
		div.appendChild(p);
		div.addEventListener("click", onClick);
		document.getElementById("content").appendChild(div);
	}
	function onClick(event) {
		let paragrph = event.target.children[0];
		paragrph.style.display = "block";
	}
}
