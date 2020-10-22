//const contentSection = document.createElement('section1');

const loadMenu = function(contentSection) {

	contentSection.innerHTML = `
		<h2 class="header">Menu</h2>
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
	document.body.append(contentSection);
};

export {loadMenu};


