	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		unit: "head",
		organic: true,
		organic_price: 2.99,
		category:"Fruit_Veg",
		picture_url: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=818&q=80"
		// source: https://https://unsplash.com/photos/I58f47LRQYM.com/photos/m1t-RJ1iCIU
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		unit: "lbs",
		organic: true,
		organic_price: 2.99,
		category:"Fruit_Veg",
		picture_url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200"
		// source: https://unsplash.com/photos/I58f47LRQYM
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		unit: 'loaf',
		organic: false,
		organic_price: "nil",
		category:"Grain",
		picture_url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200"
		//source: https://unsplash.com/photos/rsWZ-P9FbQ4
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		price: 13.50,
		unit: "lbs",
		organic: true,
		organic_price: 19.99,
		category:"Meat",
		picture_url: "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
		// source: https://unsplash.com/photos/utTJUcvNXXo
	},
	{
		name: "Rice",
		vegetarian: true,
		glutenFree: false,
		price: 1.95,
		unit: '100 gr',
		organic: false,
		organic_price: "nil",
		category:"Grain",
		picture_url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
		//souce: https://unsplash.com/photos/-LdilhDx3sk
	},
	{
		name: "Sparkling Water",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		unit: "case",
		organic: false,
		organic_price: "nil",
		category:"Other",
		picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRflnrxgw_qabuUySpcFoqf2r0cAdWcc-uIPRHcjzqGd-NuNvXP&usqp=CAU"
		//source: https://www.meijer.com/shop/en/beverages/water/sparkling/meijer-sparkling-water-2-liter/p/70882048830
	},
	{
		name: "Coffee Beans",
		vegetarian: true,
		glutenFree: true,
		price: 9.99,
		unit: 'bag',
		organic: true,
		organic_price: 17.99,
		category:"Other",
		picture_url: "https://images.unsplash.com/photo-1529569746116-50b8c3dac4d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200"
		//source: https://unsplash.com/photos/kzkH7Vh11fs
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		price: 8.25,
		unit: "lbs",
		organic: true,
		organic_price: 10.50,
		category:"Meat",
		picture_url: "https://www.tasteofhome.com/wp-content/uploads/2018/06/shutterstock_282580838.jpg"
		//source: https://www.tasteofhome.com/collection/chicken-mistakes/
	},

	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		price: 2.75,
		unit: 'box',
		organic: false,
		organic_price: "nil",
		category:"Grain",
		picture_url: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		// source: https://unsplash.com/photos/SJ7uORconic
	},
	{
		name: "Oatmeal",
		vegetarian: true,
		glutenFree: false,
		price: 5.99,
		unit: "bag",
		organic: false,
		organic_price: "nil",
		category:"Grain",
		picture_url: "https://images.unsplash.com/photo-1586810504230-09dab6b8e01b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200"
		//source: https://unsplash.com/photos/NfZ4133w9Kk
	},
	{
		name: "Gluten Free Vegie Pizza",
		vegetarian: true,
		glutenFree: true,
		price: 8.00,
		unit: 'item',
		organic: false,
		organic_price: "nil",
		category:"Other",
		picture_url: "https://images.unsplash.com/photo-1590518299866-e64873e061be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
		//source: https://unsplash.com/photos/Xj53-WJZtng
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		unit: "lbs",
		organic: true,
		organic_price: 13.99,
		category:"Meat",
		picture_url: "https://cdn3.volusion.com/rdclj.yquej/v/vspfiles/photos/10002686-2.jpg?v-cache=1470730147"
		//spurce:https://www.torontokosher.com/product-p/10002686.htm
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
