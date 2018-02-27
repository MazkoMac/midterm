var innerheader = document.getElementById("innerheader");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");




document.getElementById("bg1").addEventListener("click", function(){
	main.style.display = "block";
	
	
});

document.getElementById("bg2").addEventListener("click", function(){
	main.style.display = "block";
	innerheader.innerHTML = "Body Gear";
	img1.src = "imgs/gears/b1.png";
	img2.src = "imgs/gears/b2.png";
	img3.src = "imgs/gears/b3.png";
	
	
});


document.getElementById("bg3").addEventListener("click", function(){
	main.style.display = "block";
	innerheader.innerHTML = "Leg Gear";
	img1.src = "imgs/gears/l1.png";
	img2.src = "imgs/gears/l2.png";
	img3.src = "imgs/gears/l3.png";
	
	
});


document.getElementById("bg4").addEventListener("click", function(){
	main.style.display = "block";
	innerheader.innerHTML = "Foot Gear";
	img1.src = "imgs/gears/f1.png";
	img2.src = "imgs/gears/f2.png";
	img3.src = "imgs/gears/f3.png";
	
	
});