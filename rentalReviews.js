addListing = function (section, title, releaseDate, imageURL, description, rblink) {
    var page = section;
    var header = document.createElement('h4');
    var subHeading = document.createElement('h5');
    var summary = document.createElement('p');
    var image = document.createElement('img');
    var link = document.createElement('link');

    header.innerHTML = title;
    subHeading.innerHTML = "Redbox Release Date: " + releaseDate;
    summary.innerHTML = description;
    image.src = imageURL;
    link.src = rblink;
    link.innerHTML = "View on RedBox.com"

    page.appendChild(image);
    page.appendChild(header);
    page.appendChild(subHeading);
    page.appendChild(summary);
    page.appendChild(link);

}

displayResults = function (data) {
    var results = data;
    var display = document.querySelector('article');
    var resultCount = results.length;

    display.innerHTML = "";

    for (var i = 0; i < resultCount; i++) {
        var movieInfo = results['Movie'][i];
        var newDiv = document.createElement('div');
        newDiv.id = movieInfo['title'];
        newDiv.onclick = getReviews;
        display.appendChild(newDiv);
        addListing(newDiv, movieInfo['title'], movieInfo['RedboxReleaseDate'], movieInfo['BoxArtImages']['link'][2], movieInfo['SynopsisLong'], movieInfo['@websiteUrl']);
    }
}

searchMovie = function () {
    var _this = this;
    var input = document.querySelector('input');
    var inputTerm = input.value.split(" ");
    var searchTerm = "";

    searchTerm += inputTerm[0];

    for (var i = 1; i < inputTerm.length ; i++) {
        searchTerm += "+";
        searchTerm += inputTerm[i];
    }

    var request = document.createElement('script');
    request.src = 'https://api.redbox.com/v3/products?apiKey=<key>&q=' + searchTerm + '&productTypes=Movies&callback=displayResults';

    var page = document.querySelector('body');
    page.appendChild(request);
}

getReviews = function (title) {
    var _this = this;
    var searchTerm = "";
    //var inputTerm = this.id;
    var inputTerm = title.split(" ");

    searchTerm += inputTerm[0];

    for (var i = 1; i < inputTerm.length ; i++) {
        searchTerm += "+";
        searchTerm += inputTerm[i];
    }
    alert(searchTerm);

    var request = document.createElement('script');
    request.src = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=2xkyg64ymupw4dmnrdysg8sq&q=' + searchTerm + '&page_limit=15&callback=showReviews';

    var page = document.querySelector('body');
    page.appendChild(request);
}

showReviews = function (data) {
    var results = data;
    var display = document.querySelector('aside');
    var resultCount = 15;

    display.innerHTML = " ";

    for (var i = 0; i < resultCount; i++) {
        var movie = results['movies'][i];
        var title = movie['title'];
        var userRating = movie['ratings']['audience_score'];
        var criticRating = movie['ratings']['critics_score'];
        var moviePage = movie['links']['alternate'];

        var movieTitle = document.createElement('h4');
        var audience = document.createElement('p');
        var critics = document.createElement('p');
        var link = document.createElement('link');

        movieTitle.innerHTML = title;
        audience.innerHTML = "Audience Rating: " + userRating;
        critics.innerHTML = "Critic Rating: " + criticRating;
        link.href = moviePage;
        link.innerHTML = "View on Rotten Tomatoes";

        display.appendChild(movieTitle);
        display.appendChild(audience);
        display.appendChild(critics);
        display.appendChild(link);
    }
}