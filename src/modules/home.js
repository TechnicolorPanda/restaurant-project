const loadHome = function() {

	//insert tabs

	const sectionTabs = document.createElement ('section1');
	sectionTabs.classList.add('section-content');
	console.log("section tabs");
	sectionTabs.innerHTML = `
		<nav class = 'header'>
			<ul>
				<li><a href = '#home'>Home</a></li>
				<li><a href = '#menu'>Menu</a></li>
				<li><a href = '#contacts'>Contacts</a></li>
			</ul>
		</nav>
		`

	//insert restaurant name

	const mainSection = document.createElement('section2');
	mainSection.classList.add('section-content');
	mainSection.innerHTML = `
		<h1 class='header'>Thai Fusion</h1>
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

	document.body.append(sectionTabs);
	document.body.append(mainSection);

};

export {loadHome};


