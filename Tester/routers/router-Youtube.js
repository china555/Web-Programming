const express = require('express')
const youtubeRouter = express.Router()
const Youtube_API_KEY = 'AIzaSyCr_nPPuROa0fEZjJFKDoTaKLFzf8Sr73Y'; // individual API_KEY
const URL = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${value}&type=video&key=${Youtube_API_KEY}`;
//const youtube_url = 'https://www.googleapis.com/youtube/v3/search'; // targeted url
youtubeRouter.get()
for (let i = 0; i < items.length; i++) //loop to keep the data for each item list
{
    const title = items[i].snippet.title; //keep title
    const videoId = items[i].id.videoId; //keep videoID
    const thumbnails = items[i].snippet.thumbnails; //keep thumbnails
    //show list section consists title, thumbnails, and URL
    (`<div class="card">
                <p>Title: ${title}</p> 
                <img src="${thumbnails.medium.url}">
                <p>URL: <a href="http://www.youtube.com/embed/${videoId}" target="_blank">www.youtube.com/embed/${videoId} </a></p>
                </div>`);
}