const videos = document.querySelectorAll('.video-container video');
let currentVideo = 0;

function playNextVideo() {
    videos[currentVideo].style.opacity = 0;
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].style.opacity = 1;
}

// Play the next video every 5 seconds
setInterval(playNextVideo, 5000);