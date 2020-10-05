const loadContactInfo = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');
	mainSection.innerHTML = `
		<h2 class="header">Contact</h2>
	`;

	document.body.append(mainSection);
};
export {loadContactInfo};


