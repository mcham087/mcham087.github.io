
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp



function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


function populateListProductChoicesWrapper(slct1, slct2){
	// Wrapper method that changes the tab to products before populating the grocery list
	openInfo(event, 'Products')
	document.getElementById('tab2').className +=" active";

	populateListProductChoices('consumer_info', 'displayProduct')
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {


    var s1 = document.getElementById(slct1);
    var product_table = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    product_table.innerHTML = "";
    var selected_diet_rest=[]
	var diet_rest_elements=document.getElementsByName('dietSelect')
	for (var j=0; j<diet_rest_elements.length; j++) {
		if (diet_rest_elements[j].checked){
			// console.log(diet_rest_elements[j].value)
			selected_diet_rest.push(diet_rest_elements[j].value)
		}
	}



	console.log(selected_diet_rest)
	// // console.log(s1.querySelector('.diet_rest').checked);
	// console.log(s1.querySelector('.org').checked);



		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, selected_diet_rest);

	var sorted_products=optionArray.sort(sort_porduct_price)

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	//Checkboxes are contained within a table to allow for unifrom spacing and style. Allow for organic items to be
	// placed in the same table row as the base item and have all organic item checboxes line up vertically

	for (i = 0; i < sorted_products.length; i++) {
		// create table row  and table data element for the product
		var tr=document.createElement('tr')
		var td=document.createElement("td")
		var product = sorted_products[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		td.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM and
		var label = document.createElement('label')
		label.htmlFor = product;
		label.appendChild(document.createTextNode(product.name + "    [Price: $"+product.price+"/"+product.unit+"]"));
		td.appendChild(label);
		tr.appendChild(td);

		// if the client has requested organic products and the product has an organic version create second td element
		// and make the corresponding checkbox and label
		if ((s1.querySelector('.org').checked) && product.organic){
			// s2.appendChild("&nbsp")
			var td_org=document.createElement("td")
			var checkbox_org = document.createElement("input");
			checkbox_org.type = "checkbox";
			checkbox_org.name = "product";
			checkbox_org.value = "Organic "+product.name;
			td_org.appendChild(checkbox_org);
			var label_org = document.createElement('label')
			label_org.htmlFor = product;
			label_org.appendChild(document.createTextNode("Organic - [Price: $"+product.organic_price+"/"+product.unit+"]"));
			td_org.appendChild(label_org);
			tr.appendChild(td_org)
		// even if there is no organic version, still make a second td element to have a unifrom look to the table
		}else if (s1.querySelector('.org').checked){
			tr.appendChild(document.createElement("td"))
		}

		
		// adding the table row to the table
		product_table.appendChild(tr);
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price
function select_items_wrapper(){
	// Wrapper method that changes the tab to cart when the button is pressed
	openInfo(event, 'Cart')
	document.getElementById('tab3').className +=" active";
	selectedItems()

}

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));

	// listing all the items are an unordered list
	var item_list=document.createElement('ul')

	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			// creating the li elementes for each product selected
			var li_item=document.createElement('li')
			li_item.innerText=ele[i].value;
			item_list.appendChild(li_item)
			// para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
	para.appendChild(item_list)
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is:  $" + getTotalPrice(chosenProducts)));
		
}

function sort_porduct_price(value_a, value_b){
	//Adapted from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
	// Sorting the product items by price (does not consider the price of organic items)
	const price_1 = value_a.price;
	const price_2 = value_b.price;

	let comparison = 0;
	if (price_1 > price_2) {
		comparison = 1;
	} else if (price_1 < price_2) {
		comparison = -1;
	}
	return comparison;
}

function back_to_cart(){
	// method to switch the tabs to the products list when the button is pressed

	openInfo(event, 'Products')
	document.getElementById('tab2').className +=" active";
}

function back_to_info(){
	// method to switch the tabs to the products list when the button is pressed

	openInfo(event, 'Client')
	document.getElementById('tab1').className +=" active";
}

