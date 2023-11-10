var playing = false;

var defaultAudio = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';

function playAudio(src) {
    var audio = document.getElementById("audio");

    if (playing) {
        endAudioPlayback(audio);
        return;
    }
        
    audio.src = src;
    audio.play();
    playing = true;

    audio.onended = function() {
        endAudioPlayback(audio);
    }
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

function endAudioPlayback(audio) {
    audio.src = "";
    playing = false;
}

function mikky() {
    playAudio('audio/mikky.mp3');
}

function jitse() {
    playVideo('video/jitse.mp4');
}

function joris() {
    playAudio('audio/joris.mp3');
}

function duncan() {
    playAudio('audio/duncan.mp3');
}

function melissa_m() {
    playAudio('audio/melissa_m.mp3');
}

function wieteke() {
    playVideo('video/wieteke.mp4');
}