const loadHome = function(contentSection) {

	//insert tabs

	const sectionTabs = document.createElement ('section1');

	console.log(sectionTabs.childElementCount);

	if(sectionTabs.childElementCount==0) {		
		sectionTabs.innerHTML = `
			<nav class = 'header'>
				<ul>
					<li id = 'home'>Home</a></li>
					<li id = 'menu'>Menu</a></li>
					<li id = 'contacts'>Contacts</a></li>
				</ul>
			</nav>
			`
	} else {
		console.log('next');
	};

	//insert restaurant name

	contentSection.innerHTML = `
		<h1 class='header'>Thai Fusion</h1>
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
	document.body.append(sectionTabs);
	document.body.append(contentSection);

};

export {loadHome};


