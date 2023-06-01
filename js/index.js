import { loginUser, logoutUser, getUserAuthStatus } from "./auth.js";
import {
    getTopTracks,
    getAlbumTracks,
    getArtistTracks,
    getPopularArtist,
    getTopAlbums,
    searchSong,
} from "./api.js";
import { setupRouter } from "./router.js";
import { renderHero } from "./components.js";

/*************************
 * Elements selectors
 ************************/

const forYouPage = document.getElementById("for-you");
const likedSongPage = document.getElementById("liked-song");
const searchPage = document.getElementById("search");
const libraryPage = document.getElementById("library");
const recentPage = document.getElementById("recent");

/*************************
 * setting up router
 ************************/
setupRouter();

/*************************
 * render pages
 ************************/

/* render Fou you page */
async function renderHomePage() {
    let heroData = await getTopTracks(6);
    renderHero(heroData, forYouPage);
}

renderHomePage();
