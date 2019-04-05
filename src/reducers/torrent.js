const updateTorrent = (state, action) => {

    if (state === undefined) {
        return {
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'PLAY_TORRENT_REQUESTED':
            return {
                loading: true,
                error: null
            };

        case 'PLAY_TORRENT_LOADED':
            return {
                loading: false,
                error: null
            };

        case 'PLAY_TORRENT_FAILURE':
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state.torrent;
    }
};

export default updateTorrent;