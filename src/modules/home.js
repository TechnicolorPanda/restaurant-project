const loadHome = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');

	//insert restaurant name

	mainSection.innerHTML = `
		<h1 class="header">Thai Fusion</h1>
	`;

	//insert background image

	let style = document.createElement('style');
	style.innerHTML = `
		body{
			background-image: url("images/Thaifusion.jpg");
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}`
	document.head.appendChild(style);

	document.body.append(mainSection);

};

export {loadHome};


