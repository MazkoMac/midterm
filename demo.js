var hatSelector = document.getElementById("hatselector");
var hatImage = document.getElementById("hatimage");
var hatCounter = 0;

var bodySelector = document.getElementById("bodyselector");
var bodyImage = document.getElementById("bodyimage");
var bodyCounter = 0;

var legsSelector = document.getElementById("legselector");
var legsImage = document.getElementById("legsimage");
var legsCounter = 0;

var footSelector = document.getElementById("footselector");
var footImage = document.getElementById("footimage");
var footCounter = 0;

var inputText = document.getElementById("inputtext");




document.getElementById("nextbutton").addEventListener("click", function(){
	if (hatSelector.checked){
		if (hatCounter == 0){
			hatImage.src = "imgs/gears/h2.png";
			hatCounter = hatCounter + 1;
		} else if (hatCounter == 1){
			hatImage.src = "imgs/gears/h3.png";
			hatCounter = hatCounter + 1;
		} else if (hatCounter == 2){
			hatImage.src = "imgs/gears/h1.png";
			hatCounter = 0;
		}
	}


	
	
});


document.getElementById("previousbutton").addEventListener("click", function(){
	if (hatSelector.checked){
		if (hatCounter == 0){
			hatImage.src = "imgs/gears/h3.png";
			hatCounter = 2;
		} else if (hatCounter == 2){
			hatImage.src = "imgs/gears/h2.png";
			hatCounter = hatCounter - 1;
		} else if (hatCounter == 1){
			hatImage.src = "imgs/gears/h1.png";
			hatCounter = hatCounter - 1;
		}
		
	
	}


	
	
}); 



document.getElementById("nextbutton").addEventListener("click", function(){
	if (bodySelector.checked){
		if (bodyCounter == 0){
			bodyImage.src = "imgs/gears/b2.png";
			bodyCounter = bodyCounter + 1;
		} else if (bodyCounter == 1){
			bodyImage.src = "imgs/gears/b3.png";
			bodyCounter = bodyCounter + 1;
		} else if (bodyCounter == 2){
			bodyImage.src = "imgs/gears/b1.png";
			bodyCounter = 0;
		}
	}


	
	
});


document.getElementById("previousbutton").addEventListener("click", function(){
	if (bodySelector.checked){
		if (bodyCounter == 0){
			bodyImage.src = "imgs/gears/b3.png";
			bodyCounter = 2;
		} else if (bodyCounter == 2){
			bodyImage.src = "imgs/gears/b2.png";
			bodyCounter = bodyCounter - 1;
		} else if (bodyCounter == 1){
			bodyImage.src = "imgs/gears/b1.png";
			bodyCounter = bodyCounter - 1;
		}
		
	
	}


	
	
}); 


document.getElementById("nextbutton").addEventListener("click", function(){
	if (legsSelector.checked){
		if (legsCounter == 0){
			legsImage.src = "imgs/gears/l2.png";
			legsCounter = legsCounter + 1;
		} else if (legsCounter == 1){
			legsImage.src = "imgs/gears/l3.png";
			legsCounter = legsCounter + 1;
		} else if (legsCounter == 2){
			legsImage.src = "imgs/gears/l1.png";
			legsCounter = 0;
		}
	}


	
	
});


document.getElementById("previousbutton").addEventListener("click", function(){
	if (legsSelector.checked){
		if (legsCounter == 0){
			legsImage.src = "imgs/gears/l3.png";
			legsCounter = 2;
		} else if (legsCounter == 2){
			legsImage.src = "imgs/gears/l2.png";
			legsCounter = legsCounter - 1;
		} else if (legsCounter == 1){
			legsImage.src = "imgs/gears/l1.png";
			legsCounter = legsCounter - 1;
		}
		
	
	}


	
	
}); 


document.getElementById("nextbutton").addEventListener("click", function(){
	if (footSelector.checked){
		if (footCounter == 0){
			footImage.src = "imgs/gears/f2.png";
			footCounter = footCounter + 1;
		} else if (footCounter == 1){
			footImage.src = "imgs/gears/f3.png";
			footCounter = footCounter + 1;
		} else if (footCounter == 2){
			footImage.src = "imgs/gears/f1.png";
			footCounter = 0;
		}
	}


	
	
});


document.getElementById("previousbutton").addEventListener("click", function(){
	if (footSelector.checked){
		if (footCounter == 0){
			footImage.src = "imgs/gears/f3.png";
			footCounter = 2;
		} else if (footCounter == 2){
			footImage.src = "imgs/gears/f2.png";
			footCounter = footCounter - 1;
		} else if (footCounter == 1){
			footImage.src = "imgs/gears/f1.png";
			footCounter = footCounter - 1;
		}
		
	
	}


	
	
}); 
	

inputText.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		if(inputText.value == "combo1"){
			hatImage.src = "imgs/gears/h1.png";
			bodyImage.src = "imgs/gears/b1.png";
			legsImage.src = "imgs/gears/l1.png";
			footImage.src = "imgs/gears/f1.png";
			hatCounter = 0;
			bodyCounter = 0;
			legCounter = 0;
			footCounter = 0;
			
		}
		
		else if(inputText.value == "combo2"){
			hatImage.src = "imgs/gears/h2.png";
			bodyImage.src = "imgs/gears/b2.png";
			legsImage.src = "imgs/gears/l2.png";
			footImage.src = "imgs/gears/f2.png";
			hatCounter = 1;
			bodyCounter = 1;
			legCounter = 1;
			footCounter = 1;
			
		} 
		
		else if(inputText.value == "combo3"){
			hatImage.src = "imgs/gears/h3.png";
			bodyImage.src = "imgs/gears/b3.png";
			legsImage.src = "imgs/gears/l3.png";
			footImage.src = "imgs/gears/f3.png";
			hatCounter = 2;
			bodyCounter = 2;
			legCounter = 2;
			footCounter = 2;
			
		} 
		
	}
	
});


