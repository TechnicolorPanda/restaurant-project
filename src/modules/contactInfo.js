const loadContactInfo = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');

	// insert title

	mainSection.innerHTML = `
		<h2 class = "header">Contact</h2>
		<h3 class = "body">2745 10 Mile Road NE, Rockford, MI 49341, (616) 866-0097</hs>
	`;

	//inserts background image

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
export {loadContactInfo};


