const updateTorrent = (state, action) => {

    if (state === undefined) {
        return {
            loading: true,
            error: null
        };
    }

    switch (action.type) {


        default:
            return state.torrent;
    }
};

export default updateTorrent;