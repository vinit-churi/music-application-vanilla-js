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

/*************************
 * Elements selectors
 ************************/

/*************************
 * setting up router
 ************************/
setupRouter();

/*************************
 * render pages
 ************************/

/* render Fou you page */
