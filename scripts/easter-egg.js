var playing = false;

var defaultAudio = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';

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

function playVideo(src) {
    var video = document.getElementById("video");
    video.hidden = false;
    video.src = src;
    video.play();

    video.onended = function() {
        video.hidden = true;
    };
}


function mikky() {
    play('audio/mikky.mp3');
}

function jitse() {
    playVideo('video/jitse.mp4');
}
