// get a random integer (this is used to return a random element from an array)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function clearRestaurant() {
	restaurant = document.getElementById("restaurant")
	restaurant.innerHTML = "";
}



function setRestaurant () {
	 food = setInterval(function(){ addRestaurant(); }, 500);
}

function addRestaurant() {

  	restaurantArray = ["Nando", "KFC", "Wendy's", "Banana leaf"];
  	arrayLength = restaurantArray.length;
  	rand = getRandomInt(0, arrayLength);
  	console.log(rand);

  	colorArray = ["green", "blue", "red", "purple"]
  	colorLength = colorArray.length;
  	randcolor = getRandomInt(0, colorLength);
  	console.log(randcolor);

  	restaurant = document.getElementById('restaurant');
  	restaurant.innerHTML = restaurantArray[rand];
  	restaurant.style.color = colorArray[randcolor];
  	
  }

function removeElement() {
	var element = document.getElementById("new_para")
	element.parentNode.removeChild(element)
}


function getRestaurant () {
	clearInterval(food);

	if (!document.getElementById("new_para")) {
		var para = document.createElement("P");                      
		var t = document.createTextNode("Great let's go to " + restaurantArray[rand] + ".");       
		para.appendChild(t);                                          
		document.body.appendChild(para);
		para.style.textAlign = "center";
		para.style.fontFamily = "Lobster";
		para.setAttribute("id", "new_para")
	}

	else {
		removeElement();
		var para = document.createElement("P");                      
		var t = document.createTextNode("Great let's go to " + restaurantArray[rand] + ".");       
		para.appendChild(t);                                          
		document.body.appendChild(para);
		para.style.textAlign = "center";
		para.style.fontFamily = "Lobster";
		para.setAttribute("id", "new_para")
	}
	
}




function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", setRestaurant);

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);