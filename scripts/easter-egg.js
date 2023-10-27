var playing = false;

function play(src) {
    var audio = document.getElementById("audio");

    if (playing) {
        audio.src = "";
        playing = false;
        return;
    }
        
    audio.src = src;
    audio.play();
    playing = true;

}


function mikky() {
    play('audio/mikky.mp3');
}

function jitse() {
    play('audio/jitse.mp4');
}
