	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli Cutes",
		vegetarian: true,
		glutenFree: true,
		price: 2.50,
		unit: "head",
		organic: true,
		organic_price: 4.99
	},
	{
		name: "Italien Bread",
		vegetarian: true,
		glutenFree: false,
		price: 4.00,
		unit: 'loaf',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "AAA Steak",
		vegetarian: false,
		glutenFree: true,
		price: 20.99,
		unit: "lbs",
		organic: true,
		organic_price: 20.99
	},
	{
		name: "Sushi Rice",
		vegetarian: true,
		glutenFree: false,
		price: 2.95,
		unit: '100 gr',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Olivia Water",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		unit: "case",
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Coffee Lavaza",
		vegetarian: true,
		glutenFree: true,
		price: 10.99,
		unit: 'bag',
		organic: true,
		organic_price: 20.00
	},
	{
		name: "Chicken Breast",
		vegetarian: false,
		glutenFree: true,
		price: 8.25,
		unit: "lbs",
		organic: true,
		organic_price: 10.50
	},
	{
		name: "Pasta Organic",
		vegetarian: true,
		glutenFree: false,
		price: 1.75,
		unit: 'box',
		organic: true,
		organic_price: 12.00
	},
	{
		name: "Pasta Gluten free",
		vegetarian: true,
		glutenFree: true,
		price: 2.75,
		unit: 'box',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Oatmeal Plus",
		vegetarian: true,
		glutenFree: false,
		price: 10.99,
		unit: "bag",
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Gluten Free Pizzaria",
		vegetarian: true,
		glutenFree: true,
		price: 12.00,
		unit: 'item',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Smoked Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 12.00,
		unit: "lbs",
		organic: true,
		organic_price: 13.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let filtered_product_list = [];
	let product_prices=[];
	// for (let i=0; i<prods.length; i+=1) {
	// 	if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
	// 		product_names.push(prods[i].name);
	// 	}
	// 	else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
	// 		product_names.push(prods[i].name);
	// 	}
	// 	else if (restriction == "None"){
	// 		product_names.push(prods[i].name);
	//
	// 	}
	// }

	for (let i=0; i<prods.length; i+=1) {
		// if a product does not meet the required restrictions then it is not added to th eproduct list
		if ((restriction.includes('Veg')) && (prods[i].vegetarian == false)){
			continue;}
		else if ((restriction.includes('Glut')) && (prods[i].glutenFree == false)){
			continue;}
		else {
			filtered_product_list.push(prods[i]);

		}
	}
	return filtered_product_list;


}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		// check for organic products
		}if (chosenProducts.indexOf('Organic ' + products[i].name) > -1) {
			totalPrice += products[i].organic_price;
		}
	}
	// rounding to two decimal places
	return totalPrice.toFixed(2);
}
