function play()
{
var a=new Audio("musics/justin-bieber-lifetime.mp3");
a.load();
a.play();
a.loop();
}

window.onload = play()