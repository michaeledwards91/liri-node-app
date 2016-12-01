# liri-node-app
Node App

This is a node application that takes in 4 possible commands:

<h3>my-tweets</h3>

my-tweets will display my latest 20 tweets and the date/time they were created. my-tweets takes no parameters.

<strong>ex)</strong> node liri.js my-tweets

<h3>spotify-this-song</h3>

spotify-this-song followed by a song name will query the Spotify API for the given song name and display the songs artist, track name, preview URL, and album title.

<strong>ex)</strong> node liri.js spotify-this-song Sultans of Swing

<h3>movie-this</h3>

movie-this followed by a movie title will query the OMDB API for the given movie title and display the movie's title, year of release, IMDB rating, countries of production, language, plot, actors, and (if available) Rotten Tomatoes rating and URL.

<strong>ex)</strong> node liri.js movie-this The Brave Little Toaster

<h3>do-what-it-says</h3>

do-what-it-says reads the text inside the random.txt file and performs either my-tweets, movie-this, or spotify-this-song with a query specified in random.txt.

random.txt should follow this syntax:
do-this,"query"

<strong>ex)</strong> movie-this,"Iron Giant"     //random.txt
node liri.js do-what-it-says