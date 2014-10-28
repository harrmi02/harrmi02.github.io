JSONPHandler = function(data){
	console.log(data);
}
addOption = function(optionName, optionValue){
	var menu = document.querySelector('select');
	var option = document.createElement('option');
	
	option.value = optionValue;
	option.innerHTML = optionName;
	
	menu.appendChild(option);
}

getLists = function(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
	
	if(request.readyState == 4){
		if(request.status == 200){
			var res = JSON.parse(request.responseText);
			
			var count = res['num_results'];
			
			for(var i = 0; i < count; i++){
				addOption(res['results'][i]['display_name'], res['results'][i]['list_name_encoded']);
			}
		
		}
	}	
	}
		var resource = "http://api.nytimes.com/svc/books/v2/lists/names.jsonp?callback=JSONPHandler&api-key=f6d1773721500a40553d9102593452db:11:70045383"
		request.open('Get', resource, true);
		request.send(null);
}