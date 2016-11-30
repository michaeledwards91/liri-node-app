var keys = require("./keys.js");
var Twitter = require("twitter");
var spotify = require("spotify");
var omdb = require("omdb");
var fs = require("fs");

function getMyTweets() {
	var client = new Twitter(keys.twitterKeys);

	client.get("statuses/user_timeline", "Michael80676124&count=20", function(error, tweets, response) {
		
		for (var i = 0; i < tweets.length; i++) {
			console.log(tweets[i].created_at);
			console.log(tweets[i].text);
			console.log("--------------------------------------");
		}

	})
}

function spotifySong(song) {
	spotify.search({type: "track", query: song}, function(error, data) {
		if (error) {
			console.log("Error occured: " + error);
		}
		var artists = data.tracks.items[0].album.artists;

		for (var i = 0; i < artists.length; i++) {
			console.log("Artist: " + artists[i].name);
		}
		
		console.log("Track name: " + data.tracks.items[0].name);
		console.log("Preview URL: " + data.tracks.items[0].preview_url);
		console.log("Album: " + data.tracks.items[0].album.name);
	})
}

function omdbMovie(movie) {
	omdb.get({title: movie}, {tomatoes: true}, function(error, data) {

		console.log("Title: " + data.title);
		console.log("Year: " + data.year);
		console.log("IMDB Rating: " + data.imdb.rating);
		console.log("Countries of production: " + data.countries.join(", "));
		console.log("Language: " + data.language);
		console.log("Plot: " + data.plot);
		console.log("Actors: " + data.actors.join(", "));
		if (data.tomato) {
			console.log("Rotten Tomatoes Rating: " + data.tomato.rating);
			console.log("Rotten Tomatoes URL: " + data.tomato.url);
		}
		
	})
}

function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(error, data) {
		console.log(data);
		console.log(typeof data);
		var args = data.split(",");
		console.log(args);
		nodeArgs[2] = args[0];
		query = args[1];
		liri();
	})
}

var nodeArgs = process.argv;
var query = ""; //var to hold the node args after the action nodearg, aka what will be searched for

function liri() {
	if (nodeArgs.length > 3) {
		var queryArray = [];
		for (var i = 3; i < nodeArgs.length; i++) {
			queryArray.push(nodeArgs[i]);
		}

		query = queryArray.join(" ");
	}


	if (nodeArgs[2] === "my-tweets") {
		getMyTweets();
	}

	if (nodeArgs[2] === "spotify-this-song") {
		console.log(query);
		if (query === "") {
			spotifySong("The Sign Ace of Base");
		} else {
			spotifySong(query);
		}
	}

	if (nodeArgs[2] === "movie-this") {
		if (query ==="") {
			omdbMovie("Mr. Nobody");
		} else {
			omdbMovie(query);
		}
	}	
}

liri();

if (nodeArgs[2] === "do-what-it-says") {
	doWhatItSays();
}

//THINGS NOT DONE: work around the possibility of multiple commas in random.txt, find language in omdb response
//clean up code, add comments