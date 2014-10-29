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
        newDiv.id = bookInfo['primary_isbn13'];
        newDiv.onclick = getListings;
        display.appendChild(newDiv);
        addListing(newDiv, bookInfo['title'], bookInfo['contributor'], bookInfo['book_image'], bookInfo['description']);

    }
}

showReviews = function (data) {
    
    console.log(data);
    
}

getListings = function () {

    var _this = this;
    var title = _this.id;
   var words = title.split(" ");
    var linkTitle = "";

    linkTitle += words[0];

    for (var i = 1; i < words.length ; i++) {
        linkTitle += "+";
        linkTitle += words[i];
    }

    ////var theResource = 'https://www.goodreads.com/book/title?format=JSON&key=1sYCfbFHx4QArsXHsj4tA&title=' + linkTitle + '&callback=showReviews';
    //var request = document.createElement('script');
    //request.src = 'https://api.bookshare.org/book/search/title/' + linkTitle + ' /format/json?api_key=xjttdfbynp6w3eh9c3y4gk5e';

    //document.querySelector('body').appendChild(request);

    var request = new XMLHttpRequest()

    request.onreadystatechange = function () {

        if (request.readyState == 4)   //
            if (request.status == 200) {  //successful request OK

                console.log(request.responseText)
            }

    }

    var theResource = 'https://www.goodreads.com/book/title?format=JSON&key=1sYCfbFHx4QArsXHsj4tA&title=' + linkTitle;

    request.open('GET', theResource, true)

    //request.open('GET','urlread.cgi',true)

    request.send(null)
}