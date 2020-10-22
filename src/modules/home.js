const loadHome = function(contentSection) {

	console.log('load home');

	//insert restaurant name

	contentSection.innerHTML =
	`		<h1 class='header'>Thai Fusion</h1>
	`;

	//insert background image

	let style = document.createElement('style');
	style.innerHTML = `
		body{
			background-image: url("images/thaispices.jpg");
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}`

	//append elements to page

	document.head.appendChild(style);
	document.body.append(contentSection);

};

export {loadHome};


