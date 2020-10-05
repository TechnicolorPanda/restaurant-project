const loadMenu = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');
	mainSection.innerHTML = `
		<h2 class="header">Menu</h2>
	`;
	//const image = document.createElement('image'); 
    //image.src="../dist/images/Thaifusion.jpg";
    //document.body.append(image);

	document.body.append(mainSection);
};
export {loadMenu};


