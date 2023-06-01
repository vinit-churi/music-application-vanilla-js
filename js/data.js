export const songsData = new Map();
export const userPlaylistsData = new Map();
export const userLikedSongsData = new Map();

export const addSongToData = (song) => {
    songsData.set(song.id, song);
};

export const getSongData = (id) => {
    return songsData.get(id);
};

export const populateUserPlaylistsData = async () => {};

export const populateUserLikedSongsData = async () => {};

export const getUserPlaylistsData = () => {};

export const getUserLikedSongsData = () => {};

export const addSongToUserPlaylist = async () => {};

export const addSongToUserLikedSong = async () => {};
