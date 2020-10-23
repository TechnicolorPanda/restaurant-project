const loadContactInfo = function(contentSection) {

	// insert title

	contentSection.innerHTML = 	`
		<h2 class = "header">Contact Us</h2>
		<h3 class = "header">10 Mile Road Location</h3>
		<h4 class = "body">
			<dl>
				<dt><a>2745 10 Mile Road NE</a></dt>
				<dt><a>Rockford, MI 49341</a></dt>
				<dt><a>(616) 866-0097</a></dt>
			<dl>
		</h4>
		<h3 class = "header">Northland Drive Location</h3>
		<h4 class = "body">
			<dl>
				<dt><a>5260 Northland Dr NE STE D</a></dt>
				<dt><a>Grand Rapids, MI 49525</a></dt>
				<dt><a>(616) 272-4128</a></dt>
			<dl>
		</h4>
		<h3 class = "header">Broadmoor Center Location</h3>
		<h4 class = "body">
			<dl>
				<dt><a>3097 Broadmoor Ave SE</a></dt>
				<dt><a>Kentwood, MI 49512</a></dt>
				<dt><a>(616) 301-8883</a></dt>
			<dl>
		</h4>
	`;

	//inserts background image

	let style = document.createElement('style');
	style.innerHTML = `
		body{
			background-image: url("images/thairestaurant.jpg");
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}`

	document.head.appendChild(style);
	document.body.append(contentSection);
};

export {loadContactInfo};