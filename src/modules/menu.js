const loadMenu = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');
	mainSection.innerHTML = `
		<h2 class="header">Menu</h2>
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
document.head.appendChild(style);

	document.body.append(mainSection);
};
export {loadMenu};


