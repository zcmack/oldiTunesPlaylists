var fs = require("fs"),
    itunes = require("itunes-data"),
    parser = itunes.parser(),
    stream = fs.createReadStream("olditunes.xml");

var tracks=[];
parser.on("track", function(track){
tracks.push(track);
});
var shouldwe=false;
parser.on("playlist", function(album) {
if(album.Name == "~aa"){
shouldwe=true;
}
if(shouldwe){
    console.log("\n\n\n" + album.Name + "\n");
var songItems = album["Playlist Items"];

for (var p=0; p<songItems.length; p++){

for(var i=0; i<tracks.length; i++){
if(tracks[i]["Track ID"] == songItems[p]["Track ID"]){
console.log(tracks[i].Artist + " -  " + tracks[i].Name);
}
}

}
}
});



stream.pipe(parser);
