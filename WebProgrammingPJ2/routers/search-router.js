//require resources
const twitter = require('twitter');
const twitter_client = new twitter({
    consumer_key: 'zp88crMbixRzYHLAAY8drCWFC',
    consumer_secret: 'r9VsvbtEKCjRLmxifPf8EDjePmE2OQI84P7ZYxWyXtzWeVW8MR',
    access_token_key: '1254341872547278850-YJN19tzWcPbT0ka2PpZOvHr9pN4YP5',
    access_token_secret: 'PH97QdcXdlXXU9Bf2TtqBDKEE6c7juPVOeytR3Hk5jfh7'
});
const SpotifyWebApi = require('spotify-web-api-node');

const express = require('express');
const search = express.Router();

search.get('/', function(req, res) {
    res.render('pages/search', {
        message: "hello world",
        message2: "hello space"
    });
});

// /search page 
search.post('/', async(req, res) => {

    let text = req.body.movie_name;
    let text2 = text;
    text += " " + "Trailers";
    const data = { query: text, twitter_data: await twitterCallAPI(text2), spotify_data: await spotifyCallAPI(text2) }
    res.render('pages/result', { data: data });
});

async function twitterCallAPI(text) {
    const data = await twitter_client.get('search/tweets', {
        q: text,
        lang: 'en',
        count: 10,
        result_type: 'popular'
    })
    return data.statuses;
}

// This is the function for calling the spotify API
async function spotifyCallAPI(text) {

    var spotifyApi = new SpotifyWebApi({
        clientId: '7372de78d32f4c9c9549cb68d53ed8d5',
        clientSecret: '83713f0047b64565ba91f285b700e97f',
        redirectUri: 'https://www.example.com'
    });

    const data = await spotifyApi.clientCredentialsGrant()
    spotifyApi.setAccessToken(data.body.access_token);
    const data1 = await spotifyApi.searchTracks(text, {
        limit: 2
    })
    song = data1.body.tracks.items[0].album.external_urls.spotify;
    const word = song.split('/')
    return word[4];

};

module.exports = search;