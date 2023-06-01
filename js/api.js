const API_KEY = "MWE1MjlmMzEtMjNiOC00NzU1LWI2MTYtZmMyZjUzYzUyOWIz";
/**
 * Retrieves top tracks from API endpoint.
 *
 * @return {Object} An object containing data and error properties.
 */
export const getTopTracks = async () => {
    try {
        const fetchURL = `https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/tracks/top?apikey=${API_KEY}&limit=6`;
        let data = await fetch(fetchURL);
        data = await data.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error };
    }
};

/**
 * Asynchronously fetches album tracks given an API link.
 *
 * @param {string} link - The API link.
 * @return {Promise<{ data: any, error: any }>} - The response object containing
 * the data and error, if any.
 */
export const getAlbumTracks = async (link) => {
    try {
        let data = await fetch(`${link}?apikey=${API_KEY}`);
        data = await data.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error };
    }
};

/**
 * Retrieves the artist's tracks from the provided link using the API key.
 *
 * @param {string} link - The link to fetch the artist's tracks from.
 * @return {Promise<{data: object, error: object}>} - A promise that resolves to an object containing the retrieved data and a null error object, or rejects with an error object and a null data object.
 */
export const getArtistTracks = async (link) => {
    try {
        let data = await fetch(`${link}?apikey=${API_KEY}`);
        data = await data.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error };
    }
};

/**
 * Retrieves the top 10 popular artists using the Spotify API.
 *
 * @return {Object} An object containing the fetched data and/or error.
 */
export const getPopularArtist = async () => {
    try {
        const fetchURL = `https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/artists/top?apikey=${API_KEY}&limit=10`;
        let data = await fetch(fetchURL);
        data = data.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error };
    }
};

/**
 * Retrieves the top 10 featured playlists from an external API using the provided API key.
 *
 * @return {Object} An object containing the retrieved data and/or an error if one occurs.
 */
export const getTopPlaylist = async () => {
    try {
        const fetchURL = `https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/playlists/featured?apikey=${API_KEY}&limit=10`;
        let data = await fetch(fetchURL);
        data = data.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error };
    }
};

/**
 * Async function to retrieve top albums data from API.
 *
 * @return {Object} An object containing the top albums data and an error property.
 *                  The data property contains the parsed JSON response.
 *                  The error property is null if there is no error.
 */
export const getTopAlbums = async () => {
    try {
        const fetchURL = `https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/albums/new?apikey=${API_KEY}&limit=4`;
        let data = await fetch(fetchURL);
        data = data.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error };
    }
};

/**
 * Searches for a song using the query parameter and returns the data and error status.
 *
 * @param {string} query - The search query to be used.
 * @return {Object} An object containing the data and error status.
 */
export const searchSong = async (query) => {
    try {
        //  album, artist, track, tag, playlist.
        let fetchURL = `https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/search?apikey=${API_KEY}&per_type_limit=5&query=${query}`;
        let data = await fetch(fetchURL);
        data = await data.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error };
    }
};
