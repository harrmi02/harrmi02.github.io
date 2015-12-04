
function loadFunctions(){
	document.getElementById("content").onclick=function(){
		var modal = document.getElementById("modal");
		var tabDiv = document.getElementById("tabDiv");
		var panelDiv = document.getElementById("panelDiv");
		
		this.style.display = "none";
		modal.classList.remove("modal--active");
		
		tabDiv.parentElement.removeChild(tabDiv);
		panelDiv.parentElement.removeChild(panelDiv);
	}
	
	document.getElementById("loveinfo").onclick=function(){
		var modal = document.getElementById("modal");
		var tabBox = document.getElementById("tabBox");
		var tabBar = document.getElementById("tabBar");
		var box = document.getElementById("content");
		
		var tabDiv = document.createElement('div');
		tabDiv.id = "tabDiv";
		var tab1 = document.createElement('a');
		tab1.href = "#loveinfo1";
		tab1.className = "mdl-tabs__tab is-active";
		tab1.innerHTML = "Image 1";
		
		
		var tab2 = document.createElement('a');
		tab2.href = "#loveinfo2";
		tab2.className = "mdl-tabs__tab"
		tab2.innerHTML = "Image 2";
		
		
		var tab3 = document.createElement('a');
		tab3.href = "#loveinfoabout";
		tab3.className = "mdl-tabs__tab";
		tab3.innerHTML = "About";
		
		
		tabDiv.appendChild(tab1);
		tabDiv.appendChild(tab2);
		tabDiv.appendChild(tab3);
		
		componentHandler.upgradeElement(tabDiv.childNodes[0], 'MaterialTabs');
		componentHandler.upgradeElement(tabDiv.childNodes[0], 'MaterialRipple');
		
		componentHandler.upgradeElement(tabDiv.childNodes[1], 'MaterialTabs');
		componentHandler.upgradeElement(tabDiv.childNodes[1], 'MaterialRipple');
		
		componentHandler.upgradeElement(tabDiv.childNodes[2], 'MaterialTabs');
		componentHandler.upgradeElement(tabDiv.childNodes[2], 'MaterialRipple');
		
		var panelDiv = document.createElement('div');
		panelDiv.id = 'panelDiv';
		
		var panel1 = document.createElement('div');
		panel1.className = "mdl-tabs__panel is-active";
		panel1.id = "loveinfo1";
		var lipic1 = document.createElement('img');
		lipic1.src = "img/portfolio/LoveAndInformation.jpg";
		lipic1.style.width = "100%";
		panel1.appendChild(lipic1);
		
		var panel2 = document.createElement('div');
		panel2.className = "mdl-tabs__panel";
		panel2.id = "loveinfo2";
		var lipic2 = document.createElement('img');
		lipic2.src = "img/portfolio/LoveAndInfo1.jpg";
		lipic2.style.width = "100%";
		panel2.appendChild(lipic2);
		
		var panel3 = document.createElement('div');
		panel3.className = "mdl-tabs__panel";
		panel3.id = "loveinfoabout";
		var showTitle = document.createElement('h3');
		showTitle.classList.add("showTitle");
		showTitle.innerText = "Love and Information";
		var year = document.createElement('h6');
		year.classList.add("showInfo");
		year.innerHTML = "Fall 2015";
		year.appendChild(document.createElement('hr'));
		var role = document.createElement('h5');
		role.classList.add("showInfo");
		role.innerText = "Stage Manager";
		var school = document.createElement("h6");
		school.classList.add("showInfo");
		school.innerText = "Luther College Visual and Performing Arts";
		panel3.appendChild(showTitle);
		panel3.appendChild(year);
		panel3.appendChild(role);
		panel3.appendChild(school);

		panelDiv.appendChild(panel1);
		panelDiv.appendChild(panel2);
		panelDiv.appendChild(panel3);
		
		componentHandler.upgradeElement(panelDiv.childNodes[0], 'MaterialTabs');		
		componentHandler.upgradeElement(panelDiv.childNodes[1], 'MaterialTabs');		
		componentHandler.upgradeElement(panelDiv.childNodes[2], 'MaterialTabs');
		
		tabBar.appendChild(tabDiv);
		tabBox.appendChild(panelDiv);
		
		box.style.zIndex = "2";
		modal.style.zIndex = "4";
		
		box.style.display = "block";
		
		modal.classList.add("modal--active");	

	}
}