// `https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/500x500.jpg`
import { addSongToData } from "./data.js";
import { uniqueId } from "./utils.js";
/* body event listeners */
document.querySelector("body")?.addEventListener("click", (e) => {
    if (
        !e.target.classList.contains("songOptionEl") &&
        !e.target.classList.contains("songsOptions") &&
        !e.target.classList.contains("song-option-item")
    ) {
        const doesExists = document.querySelector(".songsOptions");
        if (doesExists) {
            doesExists.parentNode.dataset.optionsOpen = "false";
            console.log("parent node", doesExists.parentNode);
            doesExists.remove();
        }
    }
});

export function renderHero(musicData, container) {
    let { data, error } = musicData;
    if (!error) {
        let { tracks } = data;
        const hero = document.createElement("div");
        hero.classList.add("hero");
        const firstSong = document.createElement("div");
        firstSong.classList.add("firstSong");
        const firstSongImage = document.createElement("img");
        const firstSongName = document.createElement("p");
        firstSongName.textContent = tracks[0].name;
        firstSongImage.src = `https://api.napster.com/imageserver/v2/albums/${tracks[0].albumId}/images/500x500.jpg`;
        firstSongImage.alt = "music cover";
        firstSong.append(firstSongImage, firstSongName);
        const heroSongsList = document.createElement("div");
        heroSongsList.classList.add("heroSongsList");
        tracks.forEach((track, index) => {
            console.log(track);
            addSongToData(track.id, track);
            const heroSongsListItem = document.createElement("div");
            heroSongsListItem.classList.add("hero-songs-list-item");
            const indexEl = document.createElement("p");
            indexEl.textContent = index + 1;
            indexEl.classList.add("index");
            const heartEl = document.createElement("i");
            heartEl.classList.add("fa-regular");
            heartEl.classList.add("fa-heart");
            heartEl.addEventListener("click", (e) => {
                console.log("clicked");
            });
            const songInfoEl = document.createElement("div");
            songInfoEl.classList.add("songInfoEl");
            const songNameEl = document.createElement("p");
            songNameEl.classList.add("songName");
            songNameEl.textContent = track.name;
            const artistNameEl = document.createElement("p");
            artistNameEl.textContent = track.artistName;
            artistNameEl.classList.add("artistNameEl");
            songInfoEl.append(songNameEl, artistNameEl);
            const songOptionEl = document.createElement("div");
            const songOptionImg = document.createElement("i");
            songOptionImg.classList.add("songOptionImg");
            songOptionImg.classList.add("fa-ellipsis");
            songOptionImg.classList.add("fa-solid");
            songOptionEl.classList.add("songOptionEl");
            songOptionEl.dataset.optionsOpen = "false";
            songOptionEl.dataset.optionsTriggerId = uniqueId();
            songOptionEl.append(songOptionImg);
            songOptionEl.dataset.songId = track.id;
            songOptionEl.addEventListener("click", (e) => {
                if (songOptionEl.dataset.optionsOpen === "false") {
                    const doesExists = document.querySelector(".songsOptions");
                    if (doesExists) {
                        doesExists.parentNode.dataset.optionsOpen = "false";
                        console.log("parent node", doesExists.parentNode);
                        doesExists.remove();
                    }
                    launchSongOptions(
                        songOptionEl.dataset.songId,
                        songOptionEl
                    );
                    songOptionEl.dataset.optionsOpen = "true";
                } else {
                    let el = document.querySelector(
                        `[data-options-id="${songOptionEl.dataset.optionsTriggerId}"]`
                    );
                    console.log(
                        `[data-options-id="${songOptionEl.dataset.optionsTriggerId}"]`
                    );
                    el.remove();
                    songOptionEl.dataset.optionsOpen = "false";
                }
            });
            heroSongsListItem.append(
                indexEl,
                heartEl,
                songInfoEl,
                songOptionEl
            );
            heroSongsList.append(heroSongsListItem);
        });
        hero.append(firstSong, heroSongsList);
        container.append(hero);
    } else {
        console.log(error);
    }
}

function launchSongOptions(songId, songOptionEl) {
    const songsOptions = document.createElement("div");
    songsOptions.dataset.optionsId = songOptionEl.dataset.optionsTriggerId;
    songsOptions.classList.add("songsOptions");
    const playNowOption = document.createElement("p");
    playNowOption.textContent = "Play Now";
    const addToPlayListOption = document.createElement("p");
    addToPlayListOption.textContent = "Add to Playlist";
    const addToQueueOption = document.createElement("p");
    addToQueueOption.textContent = "Add to Queue";
    playNowOption.classList.add("song-option-item");
    addToPlayListOption.classList.add("song-option-item");
    addToQueueOption.classList.add("song-option-item");
    playNowOption.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("play song", songOptionEl, songId);
        songsOptions.remove();
        songOptionEl.dataset.optionsOpen = "false";
    });
    addToPlayListOption.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("add to playlist", songOptionEl, songId);
        songsOptions.remove();
        songOptionEl.dataset.optionsOpen = "false";
    });
    addToQueueOption.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("add to queue", songOptionEl, songId);
        songsOptions.remove();
        songOptionEl.dataset.optionsOpen = "false";
    });
    songsOptions.append(playNowOption, addToPlayListOption, addToQueueOption);
    songOptionEl.append(songsOptions);
}


function renderArtistsSection(container, data){

}
