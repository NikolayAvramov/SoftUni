function attachEvents() {
	const loadBtn = document.getElementById("btnLoadPosts");
	const viewBtn = document.getElementById("btnViewPost");
	const postList = document.getElementById("posts");
	const ulComments = document.getElementById("post-comments");
	const titleEl = document.getElementById("post-title");
	const postBody = document.getElementById("post-body");

	loadBtn.addEventListener("click", loadPosts);
	viewBtn.addEventListener("click", viewPost);
	async function loadPosts() {
		postList.innerHTML = "";
		let res = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
		let data = await res.json();

		Object.values(data).forEach((c) => {
			let optionEl = document.createElement("option");
			optionEl.value = c.id;
			optionEl.textContent = `${c.title}`;
			postList.appendChild(optionEl);
		});
	}

	async function viewPost() {
		let selectedPost =
			document.getElementById("posts").selectedOptions[0].value;

		//body
		const body = await fetch(`http://localhost:3030/jsonstore/blog/posts/`);

		const dataBody = await body.json();

		let postTitleAndBody = Object.values(dataBody);
		postTitleAndBody = postTitleAndBody.filter(
			(post) => post.id == selectedPost
		);

		titleEl.textContent = postTitleAndBody[0].title;
		postBody.textContent = postTitleAndBody[0].body;

		//comments
		ulComments.innerHTML = "";
		const res = await fetch(
			`http://localhost:3030/jsonstore/blog/comments/`
		);

		const data = await res.json();

		let arr = Object.values(data).filter((c) => c.postId === selectedPost);
		//console.log(arr);
		arr.forEach((el) => {
			let li = document.createElement("li");
			li.textContent = el.text;
			li.setAttribute("id", `${el.id}`);
			//console.log(el);
			ulComments.appendChild(li);
		});
	}
}
attachEvents();
