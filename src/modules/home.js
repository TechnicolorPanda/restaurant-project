const loadHome = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');
	mainSection.innerHTML = `
		<h1 class="header">Thai Fusion</h1>
	`;
	//const image = document.createElement('image'); 
    //image.src="../dist/images/Thaifusion.jpg";
    //document.body.append(image);

	document.body.append(mainSection);
};
export {loadHome};


