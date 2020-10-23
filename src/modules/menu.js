//const contentSection = document.createElement('section1');

const loadMenu = function(contentSection) {

	//create box for content

	let box = document.createElement('div');
	
	contentSection.innerHTML = `
		<h2 class="header">Appetizers</h2>
		<h3 class = "body">
			<dl>
				<dt><a>6 Piece Fried Tofu $4.99</a></dt>
				<dd><a>Great for vegetarians, fresh tofu lightly battered and fried until crispy served with our Thai peanut sauce.</a></dd>
				<dt><a>6 Piece Wonton Kickers $5.99</a></dt>
				<dd><a>Crab wonton's with a kick! Minced imitation crab meat and cream cheese with a kick of chopped jalapenos served with sweet and sour sauce.</a></dd>
				<dt><a>Chicken Roll $3.99</a></dt>
				<dt><a>Tofu Pad Thai $8.75</a></dt>
				<dt><a>2 Fusion Fresh Rolls $6.99</a></dt>
				<dd><a>A healthy and delightful appetizer hand wrapped in rice paper filled with rice noodles, shrimp, roasted pork, lettuce, avocado, green onions, carrots and cilantro served with our homemade fusion peanut sauce.</a></dd>
				<dt><a>Fried Calamari $6.99</a></dt>
				<dd><a>A classic! Lightly battered calamari served with a slice of lemon and served with our signature spicy Thai sauce.</a></dd>
				<dt><a>Combo Appetizer $12.99</a></dt> 
				<dt><a>2 Spring Rolls $3.99</a></dt>
				<dd><a>Our delicious vegetarian spring rolls are filled with shredded cabbage, carrots, green onions, vermicelli noodles, seasonedand individually hand wrapped in a spring roll skin, fried until golden crispy and served with a side of sweet and sour sauce.</a></dd>
				<dt><a>4 Baked Mussels $5.99</a></dt>
				<dd><a>A chef's special! Mussels on a half shell baked with our spicy Thai sauce and topped off with a slice of lemon, roe and chives.</a></dd>
				<dt><a>5 Thai Chicken Wings $6.99</a></dt>
				<dd><a>An American classic with a Thai twist! Whole chicken wings marinated in spices and fried until golden served with our sweet Thai chili sauce.</a></dd>
			<dl>
		</h3>
		<h2 class="header">Soups</h2>
		<h3 class = "body">
			<dl>
				<dt><a>Tom Kha Soup $3.00</a></dt>
				<dd><a>Fresh spinach. A perfect blend of Thai's hot and sour broth with coconut milk, water chestnuts, bamboo shoots, baby corn, green onions and your choice of meat.</a></dd>
				<dt><a>Tofu Soup $3.00</a></dt>
				<dt><a>Chicken Soup $3.00</a></dt>
				<dt><a>Calamari Soup $3.50</a></dt>
				<dt><a>Tom Yum Noodle Soup $3.25</a></dt>
				<dd><a>Thai's famous hot and sour broth with lemon grass, galanga, kaffir lime leaves, celery, mushrooms, onions, tomatoes and your choice of meat.</a></dd>
				<dt><a>Tom Yum Soup $3.25</a></dt>
				<dd><a>Fresh spinach. Thai's famous hot and sour broth with lemon grass, galanga, kaffir lime leaves, celery, mushrooms, onions, tomatoes and your choice of meat.</a></dd>
				<dt><a>Vegetable Soup $3.00</a></dt>
				<dt><a>Seafood Soup for 2 $9.99</a></dt>
				<dd><a>Seafood lovers! Our hot and sour broth infused with a sea of shrimp, imitation crabmeat, calamari, mussels, mushrooms, celery, onions, tomatoes, lime juice and fresh chili served in a traditional Thai hot pot.</a></dd>
				<dt><a>Shrimp Soup $3.50</a></dt>
			<dl>
		</h3>
		<h2 class="header">Salads</h2>
		<h3 class = "body">
			<dl>
				<dt><a>Laab Chicken Salad $7.99</a></dt>
				<dd><a>Cold dish.</a></dd>
				<dt><a>Soup and Salad Combo $10.99</a></dt>
				<dd><a>A small Thai salad with peanut vinaigrette and your choice of tom yum or tom kha soup paired off with a side of jasmine rice, 2 of our signature crispy shrimp and sweet Thai chili dipping sauce.</a></dd>
				<dt><a>Chicken Salad $6.99</a></dt>
				<dt><a>Shrimp Salad $7.99</a></dt>
				<dt><a>Thai Salad $5.25</a></dt>
				<dd><a>Crisp iceberg lettuce, carrots, greenhouse cucumbers, red onions, tomatoes, tofu, pineapple, bean sproutsand crunchy glass noodles topped off with our peanut vinaigrette dressing.Papaya Salad$7.99Freshly shredded papaya, spiced to your liking, tossed with garlic, tomatoes, lime juice, tamarind and Thai spices served on a bed of iceberg lettuce and greenhouse cucumbers.</a></dd>
				<dt><a>Laab Beef Salad $8.99 </a></dt>
				<dd><a>Cold dish.</a></dd>
			<dl>
		</h3>
		<h2 class="header">Fried Rice</h2>
		<h3 class = "body">
			<dl>
				<dt><a>Pork Fried Rice $7.50</a></dt>
				<dt><a>Calamari Fried Rice $9.99</a></dt>
				<dt><a>Beef Fried Rice $9.00</a></dt>
				<dt><a>Scallops Fried Rice $9.99</a></dt>
				<dt><a>Shrimp Fried Rice $9.99</a></dt>
				<dt><a>Tofu Fried Rice $8.50</a></dt>
			<dl>
		</h3>
		<h2 class="header">Noodles</h2>
		<h3 class = "body">
			<dl>
			<dt><a>Vegetable Noodle $8.50</a></dt>
			<dt><a>Shrimp Noodle $9.99</a></dt>
			<dt><a>Tofu Noodle $8.50</a></dt>
			<dt><a>Pork Noodle $9.00</a></dt>
			<dt><a>Beef Noodle $9.00</a></dt>
			<dt><a>Calamari Noodle $9.99</a></dt>
				<dl>
				</h3>
				<h2 class="header">Duck</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Gang Duck $13.99</a></dt>
					<dd><a>Bamboo strips, mushrooms, red and green red bell peppers in a red Thai curry sauce with coconut milk topped over half a roasted duck.</a></dd>
					<dt><a>Curry Duck $13.99</a></dt>
					<dd><a>Half a roasted duck topped off with carrots, tomatoes, pineapples, red and green bell peppers in a yellow Thai curry sauce.</a></dd>
					<dt><a>Bangkok Flamed Duck $13.99</a></dt>
					<dd><a>Half a roasted duck served on a sizzling hot plate and topped off with mushrooms, carrots, Spanish onions, red and green bell peppers in a chef' duck sauce.</a></dd>
				<dl>
				</h3>
				<h2 class="header">Seafood</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Sea of Fusion $16.25</a></dt>
					<dd><a>Chunks of lightly breaded catfish, shrimp, bay scallops, calamari, mussels, broccoli, snow peas, zucchini, mushrooms, carrots, eggplant and fresh Thai basil in a red Thai curry sauce with coconut milk.</a></dd>
					<dt><a>Pla Jien $15.50</a></dt>
					<dd><a>Shrimp, calamari, carrots, mushrooms, Spanish onions, fresh ginger, red and green bell peppers served over a lightly battered catfish fillet in a chef's ginger sauce.</a></dd>
					<dt><a>Pla Dook Pad Ped $11.25</a></dt>
					<dd><a>Eggplant, Spanish onion, mushrooms, red and green bell peppers in a Thai red curry sauce with coconut milk served over a lightly battered catfish fillet.</a></dd>
					<dt><a>Pla la Prik $11.25</a></dt>
					<dd><a>Spanish onions, mushrooms, red and green peppers stir fried with a chef's special brown sauce and served over a lightly batter catfish fillet.</a></dd>
					<dt><a>Chiang Mai Seafood $14.99</a></dt>
					<dd><a>Shrimp, bay scallops, calamari, imitation crab meat, snow peas, broccoli, mushrooms, carrots, water chestnuts and bamboo strips in a chef's special sauce served on a sizzling hot plate.</a></dd>
					<dt><a>Fisherman's Boat $13.99</a></dt>
					<dd><a>Shrimp, bay scallops, calamari, mussels and imitation crabmeat stir fried with Spanish onions, mushrooms, zucchini, red and green bell peppers in a chef's brown sauce.</a></dd>
					<dt><a>Pla Choo Chee $11.25</a></dt>
					<dd><a>A lightly battered catfish fillet topped off with green and red bell peppers with a sweet chili paste, in a red Thai curry sauce.</a></dd>
				<dl>
				</h3>
				<h2 class="header">Fusion Specials</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Pepper Steak $11.99</a></dt>
					<dd><a>Tender slices of beef marinated and grilled with spices, stir fried with mushroom, Spanish onions, red and green bell pepper in a chef's brown sauce.</a></dd>
					<dt><a>Sesame Chicken (Breaded Chicken) $11.99</a></dt>
					<dd><a>Lightly breaded strips of tender chicken breasts stir fried with bamboo shoots, mushroom, carrots, Spanish and green onions in a Thai sesame sauce.</a></dd>
					<dt><a>Shrimp $10.99</a></dt>
					<dt><a>Pork $9.99</a></dt>
					<dt><a>Tofu $9.75</a></dt>
					<dt><a>Curry Steak $12.99</a></dt>
					<dt><a>Fusion House Special $12.99</a></dt> 
					<dd><a>Shrimp, chicken, beef and pork stir fried with celery, bamboo shoots, carrots, mushrooms and water chestnuts in a house special brown sauce topped with roasted peanuts.</a></dd>
					<dt><a>Vegetable $9.75</a></dt>
					<dt><a>Chicken $9.75</a></dt>
					<dt><a>Scallops $10.99</a></dt>
					<dt><a>Three's Company $10.25</a></dt>
					<dd><a>Shrimp, beef and pork sauteed with zucchini, snow peas, carrots, mushrooms, baby corns and bamboo shoots in a chef's special brown sauce.</a></dd>
					<dt><a>Thai Steak $11.99</a></dt>
					<dd><a>Tender slices of beef marinated and grilled with spices and served with a medley of assorted vegetables and topped off with a Thai garlic steak sauce.</a></dd>
					<dt><a>Beef $9.99 </a></dt>
					<dt><a>Calamari $10.99</a></dt>
				<dl>
				</h3>
				<h2 class="header">Entrees (Dinner)</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Tofu Dinner $9.25</a></dt>
					<dt><a>Pad Curry Dinner $0.75</a></dt>
					<dd><a>Broccoli, mushrooms, bamboo shoots, water chestnuts, string beans, snow peas, carrots, zucchini, red and green bell peppers stir fried in a red Thai curry sauce w- coconut milk and your choice of meat. fusion it! make it a basil curry, add Thai basil.</a></dd>
					<dt><a>Beef Dinner $9.50</a></dt>
					<dt><a>Pork Dinner $9.50</a></dt>
					<dt><a>Vegetable Dinner $9.25</a></dt>
					<dt><a>Calamari Dinner $10.25</a></dt>
					<dt><a>Scallops Dinner $10.25</a></dt>
					<dt><a>Shrimp Dinner $10.25</a></dt>
					<dt><a>Chicken Dinner $9.25</a></dt>
				<dl>
				</h3>
				<h2 class="header">Entrees (Lunch)</h2>
				<h3 class = "body">
					<dl>
					<dd><a>Lunch is served with complimentary while supplies lasts and dinner is served with complimentary shrimp flavored chips.</a></dd>
					<dt><a>Chicken Lunch $6.75</a></dt>
					<dt><a>Scallops Lunch $8.99</a></dt>
					<dt><a>Pad Curry Lunch $0.75</a></dt>
					<dd><a>Broccoli, mushrooms, bamboo shoots, water chestnuts, string beans, snow peas, carrots, zucchini, red and green bell peppers stir fried in a red Thai curry sauce with coconut milk and your choice of meat. Fusion it! Make it a basil curry, Thai basil.</a></dd>
					<dt><a>Calamari Lunch $7.99</a></dt>
					<dt><a>Vegetable Lunch $6.75</a></dt>
					<dt><a>Shrimp Lunch $7.99</a></dt>
					<dt><a>Pork Lunch 7.25</a></dt>
					<dt><a>Tofu Lunch $6.75</a></dt>
					<dt><a>Beef Lunch $7.25</a></dt>
				<dl>
				</h3>
				<h2 class="header">Extras</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Steamed Jasmine Rice 1.50</a></dt>
					<dt><a>Beef $2.00</a></dt>
					<dt><a>Side Fried Rice $4.00 Pint.</a></dt>
					<dt><a>Pork $2.00</a></dt>
					<dt><a>Tofu $1.50</a></dt>
					<dt><a>Entree $2.75</a></dt>
					<dd><a>Sauce on the side.</a></dd>
					<dt><a>Chicken $2.00</a></dt>
					<dt><a>Rice Noodles $9.25</a></dt>
					<dt><a>4 Shrimps $3.00</a></dt>
					<dt><a>Vegetable $1.50</a></dt>
					<dt><a>Thai Basil, Cashews, Almonds, Peanuts, Sweet and Sour Sauce, Peanut Sauce $0.75</a></dt>
					<dt><a>4 Piece Calamari $2.50</a></dt>
				<dl>
				</h3>
				<h2 class="header">Kid's Meals</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Kids Pint Small Fried Rice, Steamed Assorted Vegetables, Crab Wonton (1) and Soft Drink $5.99</a></dt>
					<dt><a>Kids Pint Small Fried Rice, Satay (1), Crab Wonton (1) and Soft Drink $5.99</a></dt>
					<dt><a>Kids Small Pad Thai, Crab Wonton (1) and Soft Drink $5.99</a></dt>
					<dt><a>Kids Sweet and Sour Chicken, Steamed Rice, Crab Wonton (1), and Soft Drink $5.99</a></dt>
				<dl>
				</h3>
				<h2 class="header">Desserts</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Coconut Ice Cream $3.25</a></dt>
					<dd><a>Homemade coconut ice cream topped off with real coconut milk and a butter coconut cookie.</a></dd>
					<dt><a>Fried Banana $5.99 </a></dt>
					<dd><a>A famous Thai dessert! Sliced plantain bananas battered and deep fried until golden crispy, sprinkled with powdered sugar. Fusion it! Add a scoop of homemade coconut ice cream.</a></dd>
					<dt><a>Thai Gems $3.99</a></dt>
					<dd><a>A medley of exotic Thai fruits in sweet milk.</a></dd>
				<dl>
				</h3>
				<h2 class="header">Beverages</h2>
				<h3 class = "body">
					<dl>
					<dt><a>Diet Coke 2.00</a></dt>
					<dt><a>Coke $2.00</a></dt>
					<dt><a>Coconut Juice $2.25</a></dt>
					<dt><a>Minute Maid Lemonade $1.75</a></dt>
					<dt><a>Freshly Brewed Jasmine Iced Tea $1.75</a></dt>
					<dt><a>Mr. Pibb $1.75</a></dt>
					<dt><a>Fanta Orange $1.75</a></dt>
					<dt><a>Freshly Brewed Jasmine Hot Tea $1.50</a></dt>
					<dt><a>Thai Iced Tea $2.50</a></dt>
					<dt><a>Thai Iced Coffee $2.25</a></dt>
					<dt><a>Sprite $1.75</a></dt>
					<dt><a>Guava Juice $2.25 </a></dt>
				<dl>
	`;		

	box.appendChild(contentSection);

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
	document.body.append(box);
};

export {loadMenu};


