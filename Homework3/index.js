// API Key
const API_KEY = "AIzaSyDLRdnFCYofzUQtdoZ9rUoPWRqVq8PgjAs";

//for create card use for html page
function videoCard(title, videoId, thumbnails) { // call function to return back the html tag to append
    return `
    <div class="card">
      <p>Title: ${title}</p>
      <img src="${thumbnails.medium.url}">
      <p>URL: <a href="http://www.youtube.com/embed/${videoId}">www.youtube.com/embed/${videoId}</a></p>
    </div>`;
}

/*
 * call GET request to Youtube Data API
 */
function callYouTubeAPI(value) {
    $('#loading').show(); // show loading animation
    const URL = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${value}&type=video&key=${API_KEY}`; // url api
    console.log(URL)
    $.get(URL, function ({
        items
    }, status) { // get item back from that link it will be object arry
        // iterate each element to render
        console.log(items.length)
        items.map(function (value) { // map function
            $("#list-videos").append( //to append 
                videoCard(
                    value.snippet.title,
                    value.id.videoId,
                    value.snippet.thumbnails
                ) //call function and pass all variable
            );
        });
        // stop loading animation
        $("#loading").hide();
    });
}

$(document).ready(function () { // jquery ready to begin
    $('#loading').hide(); // loading section to hide when we didn't get any video

    $('#search').click(function () { //when we have click action in button that have search id it will do in this one
        const value = $("input").val(); // get user input value 
        $("#list-videos").empty(); // To refresh every time when search
        callYouTubeAPI(value); // call function
    });
})