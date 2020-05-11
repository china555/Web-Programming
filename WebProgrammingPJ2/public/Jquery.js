//ready for Jquery 
$(document).ready(function() {
    //at first we need to hide anything
    $("#spotify_id").hide();
    $('#loading').hide();
    $('#TwitterID').show();

    // when click YOUTUBE button
    $("#YOUTUBE").click(function() {
            $('#output').show();
            //let it hide
            $('#google').hide();
            console.log("Youtube")
            $('#TwitterID').hide();
            $('#spotify_id').hide();
            youtubeAPI(text)

        })
        // when click GOOGLE button
    $('#GOOGLE').click(function() {
            $('#google').show();
            //let it hide
            $('#output').hide();
            $('#TwitterID').hide();
            $('#spotify_id').hide();
            console.log("GOOGLE")
            googleAPI(text)
        })
        // when click SPOTIFY button
    $('#SPOTIFY').click(function() {
            console.log("SPOTIFY")
                //let it hide
            $('#google').hide();
            $('#output').hide();
            $('#TwitterID').hide();
            $('#spotify_id').show();


        })
        // when click TWITTER button
    $('#TWITTER').click(function() {
        console.log("TWITTER")
        $('#TwitterID').show();
        //let it hide
        $('#output').hide();
        $('#google').hide();
        $('#spotify_id').hide();
    })

});

function videoCardYoutube(title, videoId, thumbnails) { // call function to return back the html tag to append
    return `
    <div class="card">
      <p>Title: ${title}</p>
      <img src="${thumbnails.high.url}">
      <p>URL: <a href="http://www.youtube.com/embed/${videoId}">www.youtube.com/embed/${videoId}</a></p>
    </div>`;
}

async function youtubeAPI(data) {
    console.log("hello");
    const text = data;
    const Youtube_API_KEY = 'AIzaSyCr_nPPuROa0fEZjJFKDoTaKLFzf8Sr73Y'; // individual API_KEY

    let query = data;
    let params = {
        part: 'snippet',
        maxResults: 25,
        q: query,
        key: Youtube_API_KEY
    };
    let searchURL = "https://www.googleapis.com/youtube/v3/search?"; //link for youtube API
    const res = await axios.get(searchURL, {
        params,
        responseType: 'json'
    })
    const items = res.data.items;
    items.map((value) => { //use map to each value inside items
        $("#output").append( //append it into html that have output id
            videoCardYoutube(
                value.snippet.title,
                value.id.videoId,
                value.snippet.thumbnails
            )
        )
    })
    console.log(items);
}

function googleCard(url, snippet, title) {
    return `
    <div class="card">
      <h1>Title: ${title}</h1>
      <h3>Title: ${snippet}</h3>
      <p>URL: <a href="${url}">${url}</a></p>
    </div>`;
}

async function googleAPI(data) {
    let params = {
        q: data,
        cx: '005396220429827289473:fkehopdg5so',
        key: 'AIzaSyDJlztxp_2x5c_DEOHw3G79UJMldzm8bns'
    }

    let searchURL = "https://www.googleapis.com/customsearch/v1?"
    const res = await axios.get(searchURL, {
        params,
        responseType: 'json'
    })
    console.log(res.data.items);
    const items = res.data.items;
    items.map((value) => { //use map to each value inside items
        $("#google").append( //append it into html that have google id
            googleCard( //call function and sent parameter
                value.htmlFormattedUrl,
                value.snippet,
                value.title
            )
        )
    })
}