
function loadFunctions(){
	document.getElementById("content").onclick=function(){
		var modals = document.getElementsByClassName("modal");
		
		this.style.display = "none";
		for(var i=0; i<modals.length; i++){
		modals[i].classList.remove("modal--active");
		}
	}
	
	var closeButtons = document.getElementsByClassName("mdl-button");
	console.log(closeButtons);
	for(var i=0; i<closeButtons.length; i++){
		closeButtons[i].onclick=function(){
		console.log("close button clicked");
		document.getElementById("content").style.display = "none";
		var modals = document.getElementsByClassName("modal");
		for(var i=0; i<modals.length; i++){
		modals[i].classList.remove("modal--active");
		}
		console.log("function finished");
	}
	console.log("close button added");
	}
	
	document.getElementById("loveinfo").onclick=function(){
		var modal = document.getElementById("limodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
				
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	document.getElementById("spin").onclick=function(){
		var modal = document.getElementById("spinmodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
				
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	document.getElementById("senior").onclick=function(){
		var modal = document.getElementById("seniormodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
				
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	document.getElementById("ibm").onclick=function(){
		var modal = document.getElementById("ibmmodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
				
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	document.getElementById("meta").onclick=function(){
		var modal = document.getElementById("metamodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
		
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	document.getElementById("vibrator").onclick=function(){
		var modal = document.getElementById("vibemodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
		
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	document.getElementById("proof").onclick=function(){
		var modal = document.getElementById("proofmodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
		
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	document.getElementById("arcadia").onclick=function(){
		var modal = document.getElementById("arcmodal");
		var box = document.getElementById("content");
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
		
		box.style.display = "block";
		
		modal.classList.add("modal--active");	
	}
	
	
}