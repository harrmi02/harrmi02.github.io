
function loadFunctions(){
	document.getElementById("content").onclick=function(){
		var modals = document.getElementsByClassName("modal");
		
		this.style.display = "none";
		for(var i=0; i<modals.length; i++){
		modals[i].classList.remove("modal--active");
		}
	}
	
	document.getElementById("loveinfo").onclick=function(){
		var modal = document.getElementById("limodal");
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
	
	document.getElementById("dispute").onclick=function(){
		var modal = document.getElementById("dispmodal");
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