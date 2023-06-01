
/***********
 * player elements selectors
 * *************/

/* current song info elements  */
const songNameElement = document.getElementById("current-song-name");
const songArtistElement = document.getElementById("current-song-artist");
const songImageElement = document.getElementById("current-song-image");

/* audio player control elements */
const playButton = document.getElementById("audio-play");
const pauseButton = document.getElementById("audio-pause");
const skipForwardButton = document.getElementById("audio-forward");
const skipBackwardButton = document.getElementById("audio-backward");
const songTimeSeekBar = document.getElementById("audio-time");
const songVolumeSeekBar = document.getElementById("audio-volume");

/*****************	
 * setting up the audio player
 ****************/
const audio = new Audio();

/*****************	
 * audio player functions
 ****************/
const playSong = (song) =>  {
    /* the audio is now playable, add src to audio element */
    audio.src = song.previewURL;
    songNameElement.textContent = song.name;
    songArtistElement.textContent = song.artistName;
    songImageElement.src = `https://api.napster.com/imageserver/v2/albums/${song.albumId}/images/500x500.jpg`;
}

const resumeSong = () => {
    audio.play();
}

const pauseSong = () =>  {
    audio.pause();
}

const skipForward = () => {
    const newTime = audio.currentTime + 5;
    if (newTime >= audio.duration) newTime = duration;
    audio.currentTime = newTime;
    
} 

const skipBackward = () => {
    const newTime = audio.currentTime - 5;
    if (newTime <= 0) newTime = 0;
    audio.currentTime = newTime;
}

const setAudioVolume = () => {
    audio.volume = songVolumeSeekBar.value;
}

const updateSongTimeSeekBar = () => {
    songTimeSeekBar.value = audio.currentTime;
}

/*****************	
 * audio player event listeners
 ****************/
let seekBarUpdateInterval;
audio.addEventListener("canplaythrough", (event) => {
    /* the audio is now playable */
    songTimeSeekBar.min = 0;
    songTimeSeekBar.max = audio.duration;
    songTimeSeekBar.step = 0.1;
    audio.play();
    seekBarUpdateInterval = setInterval(updateSongTimeSeekBar, 50);
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
});

audio.addEventListener("ended", () => {
    /* the audio has finished playing */
    console.log("audio has ended")
});

/* play and pause button event listeners */
playButton.addEventListener("click", (e) => {
    audio.play();
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
});

pauseButton.addEventListener("click", (e) => {
    audio.pause();
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
});


/* audio currentTime skip forward and backward */
skipBackwardButton.addEventListener("click", skipBackward);
skipForwardButton.addEventListener("click", skipForward );


/* audio volume and current time event listeners */
songTimeSeekBar.addEventListener("input", 
    audio.currentTime = songTimeSeekBar.value;
);
songVolumeSeekBar.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});


