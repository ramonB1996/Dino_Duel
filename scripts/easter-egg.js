var playing = false;

function playAudio(src) {
    var audio = document.getElementById("audio");

    if (playing) {
        endAudioPlayback(audio);
        return;
    }
        
    var audioPath = "audio/"+src;
    audio.src = audioPath;
    audio.play();
    playing = true;

    audio.onended = function() {
        endAudioPlayback(audio);
    }
}

function playVideo(src) {
    var video = document.getElementById("video");

    var videoPath = "video/"+src;
    video.hidden = false;
    video.src = videoPath;
    video.play();

    video.onended = function() {
        video.hidden = true;
    };
}

function endAudioPlayback(audio) {
    audio.src = "";
    playing = false;
}