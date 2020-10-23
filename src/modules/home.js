const loadHome = function(contentSection) {

	console.log('load home');

	//insert restaurant name

	contentSection.innerHTML = `		
		<h1 class='header'>Thai Fusion</h1>
		<h3 class = 'intro'>Come join us for some fresh and authentic Thai cuisine.</h3>
		<h2 class = 'header'>Hours</h2>
		<h4 class = 'body'>
			<dl>
				<dt><b>Monday through Friday 11am to 9 pm</b></dt>
				<dt><b>Saturday 12pm to 9pm</b></dt>
				<dt><b>Sunday closed</b></dt>
			<dl>
		</h4>
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


