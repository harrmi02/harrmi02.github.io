addOption = function(optionName, optionValue){
	var menu = document.querySelector('#lists');
	var option = document.createElement('option');
	
	option.value = optionValue;
	option.innerHTML = optionName;
	
	menu.appendChild(option);
}

addListing = function(section, title, author, imageURL, description){
    var page = section;
    var header = document.createElement('h4');
    var subHeading = document.createElement('h5');
    var summary = document.createElement('p');
    var image = document.createElement('img');

    header.innerHTML = title;
    subHeading.innerHTML = author;
    summary.innerHTML = description;
    image.src = imageURL;

    page.appendChild(header);
    page.appendChild(subHeading);
    page.appendChild(image);
    page.appendChild(summary);

}

showLists = function(data){
    res = data;
	var count = res['num_results'];
			
	for(var i = 0; i < count; i++){
		addOption(res['results'][i]['display_name'], res['results'][i]['list_name_encoded']);
	}
}

getList = function () {
    var _this = this;
    var menu = document.querySelector('#lists');
    var list = menu.value;

    var request = document.createElement('script');
    request.src = 'http://api.nytimes.com/svc/books/v2/lists/' + list + '.jsonp?callback=displayList&api-key=f6d1773721500a40553d9102593452db:11:70045383';

    var page = document.querySelector('body');
    page.appendChild(request);
}

displayList = function (data) {
    var results = data;
    var display = document.querySelector('article');
    var resultCount = results['num_results'];
    var title = document.createElement('h2');

    display.innerHTML = "";

    title.innerHTML = results['results'][0]['display_name'];

    display.appendChild(title);

    for (var i = 0; i < resultCount; i++) {
        var bookInfo = results['results'][i]['book_details'][0];
        var newDiv = document.createElement('div');
        newDiv.id = bookInfo['title'];
        newDiv.onclick = getListings;
        display.appendChild(newDiv);
        addListing(newDiv, bookInfo['title'], bookInfo['contributor'], bookInfo['book_image'], bookInfo['description']);

    }
}

addResult = function (title, url) {
    var display = document.querySelector('aside');
    var label = document.createElement('a');

    label.innerHTML = title;
    label.href = url;

    display.appendChild(label);
}

showResults = function (data) {
    var result = data;
    var count = result['count'];
    var entries = result['entities'];
    var section = document.querySelector('aside');
    var header = document.createElement('h2');

    section.innerHTML = " ";

    header.innerHTML = "Related Wikipedia Entries";
    section.appendChild(header);

    for (var i = 0; i < count; i++) {
        var current = entries[i];
        var title = current['title'];
        var url = current['uri'];

        addResult(title, url);
    }
    
}

getListings = function () {
    var _this = this;
    var title = _this.id;

    var request = document.createElement('script');
    request.src = 'https://api.dandelion.eu/datagraph/wikisearch/v1/?text=' + title + ' book&lang=en&$app_id=322cf916&$app_key=75522934ebd3d44f6c309111acafb0d8&callback=showResults';

    var page = document.querySelector('body')
        page.appendChild(request);
}